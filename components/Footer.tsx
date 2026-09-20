import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * Link essenziali GIÀ presenti nel sito — nessun link nuovo inventato:
 * - Sezioni: stessi anchor della navbar (#projects, #about).
 * - Contatti: email presa dai commit pubblici dei repo (il campo email del
 *   profilo GitHub è vuoto) e profilo GitHub owner del sito. Cambiali qui
 *   se vuoi usarne altri.
 */
const sectionLinks = [
  { label: "Progetti", href: "#projects" },
  { label: "Chi sono", href: "#about" },
];

const contactLinks = [
  { label: "Email", href: "mailto:gabrieleforestieri0912@gmail.com" },
  { label: "GitHub", href: "https://github.com/gabrieleforestieri0912-lab" },
];

export function Footer() {
  return (
    <footer className="border-t border-vertex-border">
      <div aria-hidden className="h-px w-full bg-vertex-border" />

      <Container className="py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Wordmark Vertex: stesso trattamento della navbar/hero (blend
              screen sul fondo scuro) + riflesso metallico (.text-metal). */}
          <div>
            <a
              href="#"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg"
            >
              <Image src="/vertex.png" alt="" width={24} height={24} className="rounded-md" />
              <span className="text-sm font-bold tracking-tight text-vertex-highlight">Vertex</span>
            </a>
            <p className="mt-2 text-xs text-vertex-silverMuted">
              &copy; {new Date().getFullYear()} Gabriele. Tutti i diritti
              riservati.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <FooterGroup title="Sezioni" links={sectionLinks} />
            <FooterGroup title="Contatti" links={contactLinks} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-vertex-silverMuted">
        {title}
      </h2>
      <nav aria-label={title}>
        <ul className="mt-2 flex flex-col">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex min-h-11 items-center text-sm text-vertex-silverMuted transition-colors duration-200 ease-out hover:text-vertex-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
