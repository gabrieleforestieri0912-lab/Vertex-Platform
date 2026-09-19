/**
 * Placeholder: nessun profilo reale e' stato ancora confermato.
 * Sostituire gli href con gli URL definitivi (o togliere le voci non usate).
 */
const socialLinks = [
  { label: "Email", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-vertex-border">
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-vertex-silver">Vertex</p>
          <p className="mt-1 text-xs text-vertex-silverMuted">
            &copy; {new Date().getFullYear()} Gabriele. Tutti i diritti
            riservati.
          </p>
        </div>

        <nav aria-label="Contatti">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex min-h-6 items-center text-xs uppercase tracking-[0.16em] text-vertex-silverMuted transition-colors duration-200 ease-out hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
