"use client";

/**
 * Root-level error boundary. Catches errors that happen in the root layout (e.g. body).
 * Must include its own <html> and <body> — Next.js replaces the whole app with this.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="az">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            fontFamily: "system-ui, sans-serif",
            textAlign: "center",
            backgroundColor: "#fef2f2",
            color: "#991b1b",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 8 }}>
            Xəta baş verdi
          </h1>
          <p style={{ marginBottom: 24, maxWidth: 400 }}>{error.message}</p>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "10px 20px",
              backgroundColor: "#b91c1c",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Yenidən cəhd et
          </button>
        </div>
      </body>
    </html>
  );
}
