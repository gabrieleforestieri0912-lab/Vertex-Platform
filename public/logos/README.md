# Loghi dei progetti

Metti qui il logo di ogni progetto e collegalo da `data/projects.ts`:

```ts
{
  name: "AgentCloud",
  logo: "/logos/agentcloud.png", // <- questo campo
  // ...
}
```

Regole:

- Formato: **PNG o SVG** su fondo trasparente, quadrato (1:1), almeno 88×88 px
  (la card lo mostra a 44×44 con `object-contain`, quindi un logo quadrato non
  viene deformato).
- Nome file: minuscolo, senza spazi (`agentcloud.png`, `curriculuxe.png`, ...).
  Il campo `logo` è il path pubblico, quindi `/logos/<nome-file>`.
- Se il campo `logo` non è presente, la card mostra un **monogramma**
  (iniziale del progetto su riquadro col colore accento): niente immagini rotte.
- Formato consigliato per il web: SVG se il logo è vettoriale, altrimenti PNG
  ottimizzato (i file in `public/` non passano da una pipeline di build).

> Nota: nessun logo è stato caricato in questo repo e nessuno è stato inventato —
> finché i file non ci sono, tutte le card usano il monogramma.
