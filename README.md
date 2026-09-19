# Vertex

Landing/hub statica sotto cui operano i progetti indie di Gabriele (AgentCloud,
Curriculuxe, StackUp, ...). Una sola pagina: Hero + griglia progetti + footer.

Niente CMS, niente database, niente API: i progetti sono hardcoded in
`data/projects.ts`.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (design token in `tailwind.config.ts`)
- Nessuna dipendenza esterna oltre a Next/React/Tailwind

## Palette

Base scura (`vertex.*`) + **un solo accento** (`accent.*`), tarato per contrasto AA
su `vertex.bg`:

| Token | Valore | Uso | Contrasto su `#0A0A0A` |
| --- | --- | --- | --- |
| `accent` | `#8B5CF6` | bordi, icone, glow, monogrammi | 4.6:1 (UI: min 3:1) |
| `accent-soft` | `#A78BFA` | testo, link, etichette | 7.2:1 (testo: min 4.5:1) |
| `accent-deep` | `#6D28D9` | riempimenti con testo bianco | 7.1:1 |

Per cambiare accento basta aggiornare i tre valori in `tailwind.config.ts`: niente
colori hardcoded nei componenti (l'unica eccezione e' `::selection` in
`app/globals.css` e il bordo dell'immagine OG).

## Avvio in locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build di produzione
npm run lint    # ESLint
```

## Come aggiungere un progetto

Apri `data/projects.ts` e aggiungi una voce all'array `projects`:

```ts
{
  name: "NomeProgetto",
  tagline: "Una riga, concreta. Niente marketing fluff.",
  status: "building", // "live" | "beta" | "building" | "paused"
  category: "SaaS",   // "SaaS" | "Mobile" | "Education"
  url: "https://esempio.com",
}
```

Regole:

- `status` e `category` sono union type definite in `lib/types.ts`: se scrivi un
  valore non previsto, la build TypeScript fallisce (voluto).
- Nuova categoria o nuovo stato? Aggiungilo **prima** in `lib/types.ts` e poi
  aggiungi la relativa voce nelle mappe `statusLabels` / `statusStyles` /
  `statusDotStyles` in `components/ProjectCard.tsx`.
- `url` è il link esterno al prodotto o alla waitlist: la card lo apre in una
  nuova tab (`target="_blank" rel="noopener noreferrer"`).
- `logo` (opzionale) è il path pubblico del logo, es. `/logos/agentcloud.png`.
  Senza questo campo la card mostra un monogramma col colore accento. Vedi
  `public/logos/README.md` per formato e convenzioni.
- L'ordine nell'array è l'ordine di visualizzazione nella griglia.
- Lo stato è comunicato con opacità/peso, non con colori semantici: la palette
  resta monocromatica.
- La griglia è 1 colonna su mobile, 2 da `sm`, 3 da `lg`.

## Struttura

```
app/
  layout.tsx            # font, sfondo vertex.bg, metadata + OG
  page.tsx              # Hero + ProjectGrid + About + Footer (unica pagina)
  opengraph-image.tsx   # OG image 1200x630 generata a build time (placeholder)
components/
  Hero.tsx              # nome, claim, CTA, logo Vertex (public/vertex.png)
  ProjectGrid.tsx       # griglia responsive
  ProjectCard.tsx       # logo/monogramma, nome, tagline, badge, link esterno
  About.tsx             # sezione "a 360" (blocchi da compilare)
  Footer.tsx            # contatti/social (href "#" da sostituire)
data/
  projects.ts           # elenco progetti
lib/
  types.ts              # tipo Project, ProjectStatus, ProjectCategory
public/
  vertex.png            # logo Vertex, usato nella hero
  logos/                # loghi dei singoli progetti (vedi README dentro)
```

## Contenuti da finalizzare

- Sezione "a 360" in `components/About.tsx`: riempi l'oggetto `about`
  (`intro`, `focus`, `stack`, `facts`). I campi vuoti mostrano un box tratteggiato
  "da compilare": nessun testo e' stato inventato.
- Claim dell'hero in `components/Hero.tsx` (`TODO(copy)`).
- Loghi dei progetti: vedi `public/logos/README.md` (finche' mancano, monogramma).
- Tagline in `data/projects.ts`: quelle attuali sono segnaposto.
- Link contatti/social in `components/Footer.tsx`: gli `href` sono `#`.
- Copia IT definitiva della lista progetti (la lista completa dei progetti non è
  ancora stata fornita).

## Deploy

Target: Vercel. Nessuna variabile d'ambiente obbligatoria; opzionale
`NEXT_PUBLIC_SITE_URL` per forzare l'URL pubblico usato dai meta tag OG quando il
custom domain è attivo (in alternativa viene usato l'URL del deployment Vercel).
Il collegamento al team Vercel va fatto a mano dopo review del codice.

## Note operative

- L'OG image è generata da `app/opengraph-image.tsx` (placeholder): per
  sostituirla con un'immagine dedicata, eliminala e punta `openGraph.images` in
  `app/layout.tsx` a un file in `public/`.
- Se Next fallisce con `Failed to load SWC binary ... not a valid Win32
  application`, il binario nativo in `node_modules/@next/swc-*` è corrotto o
  troncato: `rm -rf node_modules && npm install`.
- `app/opengraph-image.tsx` gira su **runtime edge** di proposito: con il
  runtime node di `@vercel/og` la generazione fallisce su Windows
  (`TypeError: Invalid URL` dentro `fileURLToPath`). Lato Vercel (Linux) il
  runtime edge è comunque quello consigliato, ma la route risulta dinamica
  (`ƒ`) invece che statica.
