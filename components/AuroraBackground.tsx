export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#7C5CFC]/10 blur-[80px]" />
      <div className="absolute -top-16 -right-24 h-[360px] w-[360px] rounded-full bg-[#06B6D4]/10 blur-[80px]" />
    </div>
  );
}
