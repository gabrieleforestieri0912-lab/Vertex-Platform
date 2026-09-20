import Image from "next/image";

const navLinks = [
  { label: "Progetti", href: "#projects" },
  { label: "Stato", href: "#stato" },
  { label: "Chi sono", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-vertex-border bg-vertex-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 xl:max-w-6xl 2xl:max-w-7xl">
        <a href="#" className="inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
          <Image src="/vertex.png" alt="" width={22} height={22} className="rounded-md" />
          <span className="text-sm font-bold tracking-tight text-vertex-highlight">Vertex</span>
          <span className="hidden sm:inline-flex rounded-full border border-vertex-border bg-vertex-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-vertex-silverMuted">
            Platform
          </span>
        </a>

        <nav aria-label="Principale">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-9 items-center rounded-full px-3 text-sm font-medium text-vertex-silverMuted transition-colors hover:text-vertex-highlight hover:bg-vertex-surface"
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
