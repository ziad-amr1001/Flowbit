"use client";

import LanguageSwitch from "./LanguageSwitch";

export default function Navbar({ language, onToggleLanguage }) {
  return (
    <header className="sticky top-0 z-40 flex w-full justify-center">
      <nav className="w-full max-w-5xl px-4 sm:px-8">
        <div className="flex items-center justify-between rounded-b-2xl border-b border-white/20 bg-black/60 px-4 py-4 backdrop-blur-xs sm:px-6">
          <LanguageSwitch language={language} onToggle={onToggleLanguage} />
          <span className="text-neon text-2xl font-black uppercase tracking-[0.35em] text-white md:text-3xl">
            flowbit
          </span>
        </div>
      </nav>
    </header>
  );
}
