"use client";

const FOOTER_COPY = {
  en: {
    prefix: "developer",
    ariaLabel: "Open developer Instagram profile"
  },
  ar: {
    prefix: "المطور",
    ariaLabel: "افتح حساب المطور على إنستجرام"
  }
};

const INSTAGRAM_URL = "https://www.instagram.com/zuz_amr";

export default function Footer({ language }) {
  const isArabic = language === "ar";
  const copy = FOOTER_COPY[language] ?? FOOTER_COPY.en;

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-30 flex items-center justify-center border-t border-white/10 bg-black/60 px-4 py-3 text-white backdrop-blur-xs ${
        isArabic ? "text-xs font-extrabold tracking-[0.1em]" : "text-[0.65rem] uppercase tracking-[0.28em]"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
    >
      <span className="text-white/70">{copy.prefix}</span>
      <span className="mx-2 text-white/30">|</span>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.ariaLabel}
        className="text-neon rounded-full px-2 py-1 text-white transition duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-black"
      >
        zuz_amr
      </a>
    </footer>
  );
}
