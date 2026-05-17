import type { BlogFromApi, BlogPost, LocalizedField } from "../types";

function isEmptyHtml(html: string): boolean {
  const text = html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .trim();
  return !text;
}

export function pickLocale(
  field: LocalizedField | undefined,
  locale: string,
  options?: { skipEmptyHtml?: boolean }
): string {
  if (!field) return "";

  const keys = [locale, "az", "en", "ru", ...Object.keys(field)];

  for (const key of keys) {
    const value = field[key];
    if (!value?.trim()) continue;
    if (options?.skipEmptyHtml && isEmptyHtml(value)) continue;
    return value;
  }

  return "";
}

/** Admin editor &nbsp; ilə uzun sətirlər yaradır — adi boşluğa çeviririk */
function normalizeContentHtml(html: string): string {
  return html.replace(/&nbsp;/gi, " ");
}

function formatDate(iso: string, locale: string): string {
  try {
    const loc = locale === "az" ? "az-Latn-AZ" : locale;
    return new Date(iso).toLocaleDateString(loc, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function mapBlog(raw: BlogFromApi, locale: string): BlogPost {
  const title = pickLocale(raw.title, locale);
  const excerpt = pickLocale(raw.excerpt, locale);

  return {
    id: raw.id,
    slug: raw.slug,
    image: raw.img_url,
    title,
    description: excerpt,
    content: normalizeContentHtml(
      pickLocale(raw.content, locale, { skipEmptyHtml: true })
    ),
    date: formatDate(raw.published_at || raw.created_at, locale),
    tags: raw.tags ?? [],
  };
}

export function mapBlogs(items: BlogFromApi[], locale: string): BlogPost[] {
  return items.map((item) => mapBlog(item, locale));
}
