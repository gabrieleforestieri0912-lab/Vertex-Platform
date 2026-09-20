import { Badge } from "@/components/ui/Badge";
import { statusMeta } from "@/lib/status";
import type { ProjectStatus } from "@/lib/types";

/**
 * Badge di stato (D5): icona + testo. Il colore (tone) è solo un rinforzo:
 * lo stato resta leggibile senza cromo e dai lettori di schermo (testo).
 */
export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const meta = statusMeta[status];

  return (
    <Badge tone={meta.tone} icon={meta.icon} className={className}>
      {meta.label}
    </Badge>
  );
}
