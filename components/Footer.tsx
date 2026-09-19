/**
 * Contatti reali.
 * - Email: presa dai commit pubblici dei tuoi repo (il campo email del profilo
 *   GitHub e' vuoto). Cambiala qui se vuoi usarne un'altra.
 * - GitHub: profilo owner di questo repo.
 */
const contactLinks = [
  { label: "Email", href: "mailto:gabrieleforestieri0912@gmail.com" },
  { label: "GitHub", href: "https://github.com/gabrieleforestieri0912-lab" },
];

export function Footer() {
  return (
    <footer className="border-t border-vertex-border">
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between xl:max-w-6xl 2xl:max-w-7xl">
        <div>
          <p className="text-sm text-vertex-silver">Vertex</p>
          <p className="mt-1 text-xs text-vertex-silverMuted">
            &copy; {new Date().getFullYear()} Gabriele. Tutti i diritti
            riservati.
          </p>
        </div>

        <nav aria-label="Contatti">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {contactLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-6 items-center text-xs uppercase tracking-[0.16em] text-vertex-silverMuted transition-colors duration-200 ease-out hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
