"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "Progetti", href: "#projects" },
  { label: "Stato", href: "#stato" },
  { label: "Chi sono", href: "#about" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > 120 && latest > prev) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 20);
  });

  // fallback for SSR
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 pointer-events-none"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.nav
        aria-label="Principale"
        className={`pointer-events-auto flex items-center gap-1 rounded-full border bg-black/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.08)_inset] transition-all duration-300 ${
          scrolled ? "px-2 py-1.5 border-white/15" : "px-3 py-2 border-white/10"
        }`}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-full pl-1 pr-3 py-1 hover:bg-white/5 transition-colors"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white">
            <Image src="/vertex.png" alt="" width={18} height={18} className="rounded-full" />
          </span>
          <span className="text-sm font-bold tracking-tight text-white">Vertex</span>
          <span className="hidden sm:inline-flex rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
            Platform
          </span>
        </a>

        <div className="mx-1 h-5 w-px bg-white/10" aria-hidden />

        <ul className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-flex min-h-8 items-center rounded-full px-3.5 text-sm font-medium text-white/70 transition-colors hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#projects"
          className="ml-1 hidden sm:inline-flex min-h-8 items-center rounded-full bg-white px-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-[0.97]"
        >
          Esplora
        </a>
      </motion.nav>
    </motion.header>
  );
}
