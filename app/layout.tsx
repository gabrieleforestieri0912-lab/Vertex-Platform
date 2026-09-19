import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertex — Indie ventures by Gabriele",
  description:
    "Vertex is the holding for indie projects by Gabriele: AgentCloud, Curriculuxe, StackUp and more. A minimal hub for what's live, in beta, and building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-vertex-bg font-sans antialiased">{children}</body>
    </html>
  );
}
