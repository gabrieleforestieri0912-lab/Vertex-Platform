import Image from "next/image";

/**
 * Navbar minimale (Fase 3): wordmark metallico (filo conduttore col logo
 * tornado) + link alle sezioni esistenti. Nessun link nuovo inventato.
 * Sticky con blur leggero; i target hanno scroll-mt-24 per l'offset.
 */
const navLinks = [
  { label: "Progetti", href: "#projects" },
  { label: "Chi sono", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-vertex-border bg-vertex-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 xl:max-w-6xl 2xl:max-w-7xl">
        <a
          href="#"
          className="inline-flex min-h-11 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg"
        >
          {/* Stesso trattamento della hero: blend screen sul fondo scuro. */}
          <Image
            src="/vertex.png"
            alt=""
            width={24}
            height={24}
            className="mix-blend-screen brightness-150"
          />
          <span className="text-metal text-sm font-semibold tracking-tight">
            Vertex
          </span>
        </a>

        <nav aria-label="Principale">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-sm text-vertex-silver transition-colors duration-200 ease-out hover:text-vertex-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
