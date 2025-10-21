"use client";

export default function LanguageSwitch({ language, onToggle }) {
  const isArabic = language === "ar";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isArabic}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      className="group relative flex h-9 w-24 items-center rounded-full border border-white/30 bg-black/60 px-1 text-[0.7rem] uppercase tracking-[0.28em] transition duration-300 hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    >
      <span className="relative z-10 flex w-1/2 justify-center">
        <span className={isArabic ? "font-extrabold text-black" : "text-white/70"}>AR</span>
      </span>
      <span className="relative z-10 flex w-1/2 justify-center">
        <span className={!isArabic ? "font-extrabold text-black" : "text-white/70"}>EN</span>
      </span>
      <span
        className={`absolute inset-y-1 w-[46%] rounded-full bg-white shadow-soft-glow transition-all duration-300 ${
          isArabic ? "left-1" : "right-1"
        }`}
      />
    </button>
  );
}
