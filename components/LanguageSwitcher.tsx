"use client";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langLabel}
      className={cn(
        "flex items-center rounded-full border border-white/10 bg-white/5 p-0.5",
        compact ? "gap-0" : "gap-0.5",
      )}
    >
      {(["it", "en"] as const).map((code) => {
        const active = locale === code;
        const label = code === "it" ? "IT" : "EN";
        const fullLabel = code === "it" ? t.langItalian : t.langEnglish;
        const title =
          code === "it" ? t.switchToItalian : t.switchToEnglish;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={active ? fullLabel : title}
            title={active ? fullLabel : title}
            className={cn(
              "inline-flex min-h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-bold transition-all",
              active
                ? "bg-white text-black"
                : "text-white/60 hover:text-white hover:bg-white/10",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
