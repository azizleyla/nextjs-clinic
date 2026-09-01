
/**
 * Multi-tenant tenant resolution (Model 2 — host-based SaaS).
 *
 * Tenant is derived from the request host:
 *   elmed.saas.az       → "elmed"
 *   bona-dea.saas.az    → "bona-dea"
 *   localhost / www / IP → DEFAULT_CLINIC
 *
 * Server components read the incoming host via `next/headers`; client code
 * reads `window.location.host`. The resolved id is sent to the backend as the
 * `X-Clinic` header (see apiClient), where it filters every query by clinic_id.
 */

const DEFAULT_CLINIC = process.env.NEXT_PUBLIC_DEFAULT_CLINIC || "elmed";
const NON_TENANT_HOSTS = new Set(["www", "localhost", "127", "0"]);

/** Host → clinic slug (subdomain). */
export function hostToClinic(host?: string | null): string {
  if (!host) return DEFAULT_CLINIC;
  const sub = host.split(":")[0].split(".")[0].trim().toLowerCase();
  if (!sub || NON_TENANT_HOSTS.has(sub)) return DEFAULT_CLINIC;
  return sub;
}

/**
 * Resolve the current tenant in either environment.
 * - Client: `window.location.host`
 * - Server: `next/headers` host (dynamic import, guarded so it never loads on
 *   the client bundle).
 */
export async function resolveClinicId(): Promise<string> {
  if (typeof window !== "undefined") {
    return hostToClinic(window.location.host);
  }
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    return hostToClinic(h.get("host"));
  } catch {
    return DEFAULT_CLINIC;
  }
}
