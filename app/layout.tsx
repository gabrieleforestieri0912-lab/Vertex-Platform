import type { Metadata } from "next";
import "./globals.css";

/**
 * URL di produzione confermato. In locale e nei preview deployment resta
 * valido l'override con NEXT_PUBLIC_SITE_URL; quando attiveremo un custom
 * domain basterà aggiornare il fallback qui sotto.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vertex-startup.vercel.app";

const title = "Vertex — I progetti indipendenti di Gabriele";
const description =
  "Vertex raccoglie i progetti indipendenti di Gabriele: AgentCloud, Curriculuxe, StackUp e altri. Un hub minimale su cosa è live, in beta e in cantiere.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Vertex",
    title,
    description,
    url: "/",
    // L'immagine arriva da app/opengraph-image.tsx (placeholder 1200x630).
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-vertex-bg font-sans antialiased">{children}</body>
    </html>
  );
}
