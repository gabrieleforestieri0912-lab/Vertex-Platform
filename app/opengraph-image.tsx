import { ImageResponse } from "next/og";

/**
 * Placeholder OG image (1200x630), generata a build time con la palette
 * monocromatica di Vertex. Sostituire con un PNG/JPG dedicato appena pronto:
 * basta aggiungere `public/og-image.png` e puntarlo da `app/layout.tsx`.
 */
// Il runtime edge usa il build wasm di @vercel/og: su Windows quello node
// fallisce con "Invalid URL" in fileURLToPath (vedi README).
export const runtime = "edge";

export const alt = "Vertex — i progetti indipendenti di Gabriele";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "80px",
          borderTop: "6px solid #8B5CF6",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#A78BFA",
          }}
        >
          Progetti indipendenti
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 600,
              letterSpacing: -4,
              color: "#E8E8E8",
            }}
          >
            Vertex
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              color: "#8A8A8A",
            }}
          >
            Cosa è live, in beta e in cantiere.
          </div>
        </div>
      </div>
    ),
    size
  );
}
