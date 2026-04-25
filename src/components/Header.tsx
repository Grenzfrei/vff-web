"use client";

import Link from "next/link";
import { useState } from "react";
import { EVENT, NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface-white border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-primary">
          {EVENT.name}
        </Link>

        <button
          className="desktop:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className="block w-6 h-0.5 bg-text mb-1.5" />
          <span className="block w-6 h-0.5 bg-text mb-1.5" />
          <span className="block w-6 h-0.5 bg-text" />
        </button>

        <nav className="hidden desktop:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="desktop:hidden border-t border-primary/20 px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
