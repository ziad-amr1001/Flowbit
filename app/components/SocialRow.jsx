"use client";

const ICONS = {
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="white" stroke="white" />
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="white">
      <path d="M13.5 9.5V7.4c0-.62.42-1.02 1.05-1.02h1.45V4h-2.4C10.66 4 9.5 5.17 9.5 7.2v2.3H7v2.9h2.5V20h3V12.4h2.52l.38-2.9h-2.9z" />
    </svg>
  )
};

const socialCopy = {
  en: [
    {
      key: "instagram",
      href: "https://www.instagram.com/flowbit.1",
      label: "@flowbit.1",
      aria: "Instagram"
    },
    {
      key: "facebook",
      href: "https://www.facebook.com/profile.php?id=61581806432845",
      label: "Facebook Page",
      aria: "Facebook Page"
    }
  ],
  ar: [
    {
      key: "instagram",
      href: "https://www.instagram.com/flowbit.1",
      label: "@flowbit.1",
      aria: "حساب إنستجرام"
    },
    {
      key: "facebook",
      href: "https://www.facebook.com/profile.php?id=61581806432845",
      label: "صفحة فيسبوك",
      aria: "صفحة فيسبوك"
    }
  ]
};

export default function SocialRow({ language }) {
  const isArabic = language === "ar";
  const socials = socialCopy[language] ?? socialCopy.en;

  return (
    <div
      className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
    >
      {socials.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:shadow-soft-glow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
            isArabic ? "tracking-[0.08em]" : "uppercase tracking-[0.18em]"
          }`}
          aria-label={item.aria}
        >
          <span className="text-white transition duration-300 group-hover:text-white">
            {ICONS[item.key]}
          </span>
          <span
            className={`transition duration-300 group-hover:text-white ${
              isArabic ? "font-extrabold" : ""
            }`}
          >
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
