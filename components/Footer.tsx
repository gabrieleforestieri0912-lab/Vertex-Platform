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
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-vertex-silver">Vertex</p>
          <p className="mt-1 text-xs text-vertex-steel">
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
                  className="text-xs uppercase tracking-[0.16em] text-vertex-silverMuted transition-colors duration-200 ease-out hover:text-vertex-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vertex-highlight/40 motion-reduce:transition-none"
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
