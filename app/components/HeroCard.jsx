"use client";

import { useEffect, useState } from "react";

const DETAILS_ANIMATION_DURATION = 450;

const content = {
  en: {
    title: "ChatGPT PRO Activation💎",
    buyNow: "Buy Now",
    detailsButton: "Details",
    priceLabel: "only for 100 egp per month",
    detailsHeading: "Subscription details",
    paragraphs: [
      "💎 What is ChatGPT Pro?",
      "ChatGPT Pro is your personal AI powerhouse — smarter, faster, and completely unlimited 🚀",
      "It's not just chat anymore — it's the full potential of artificial intelligence, unlocked just for you.",
      "⚡️ Why ChatGPT Pro is Next-Level:",
      "You're not getting the regular experience — you're activating the most advanced version in the world: ChatGPT-5 Pro 🤖✨",
      "It's designed for creators, students, business owners, and anyone who wants more from AI.",
      "🔥 What You'll Get:",
      "💬 Unlimited Conversations — Talk freely with no message caps, no slowdowns, no limits.",
      "📂 Unlimited File Uploads — Upload PDFs, Word docs, Excel sheets, or anything else — anytime.",
      "🖼 Unlimited Image Uploads — Drop images, screenshots, or designs and get instant insights.",
      "📊 Powerful Data Analysis — Turn your data into visuals, reports, and smart summaries in seconds.",
      "🧠 Smarter & More Human — ChatGPT-5 Pro understands tone, context, and adapts to your style naturally.",
      "🌍 Multi-Language Support — Speak or write in any language — it just gets you.",
      "⚙️ No Limits, No Waiting — Always available, always responsive — pure performance, 24/7.",
      "🕒 Subscription Duration:",
      "Your ChatGPT Pro subscription lasts 30 days.",
      "After your plan ends, all saved data and chats will be permanently deleted — so make sure to back up anything important before your 30 days are over 📅⚠️",
      "🚀 In short:",
      "ChatGPT Pro = The ultimate AI experience.",
      "Unlimited. Intelligent. Effortless.",
      "Welcome to the future of creativity and productivity 💫"
    ],
    ariaLabel: "Toggle subscription details"
  },
  ar: {
    title: "تفعيل ChatGPT Pro 💎",
    buyNow: "اشترِ الآن",
    detailsButton: "التفاصيل",
    priceLabel: "فقط بـ 100 جنيه شهريًا",
    detailsHeading: "تفاصيل الاشتراك",
    paragraphs: [
      "🔥 ما هو شات جي بي تي برو؟",
      "شات جي بي تي برو هو محرك الذكاء الاصطناعي الشخصي الخاص بك — أذكى وأسرع وبدون أي قيود 🚀",
      "مش مجرد دردشة، ده الطاقة الكاملة للذكاء الاصطناعي مفتوحة ليك أنت بس.",
      "⚡ ليه الإصدار برو مختلف؟",
      "أنت مش بتجرب النسخة العادية، أنت بتفعل أقوى إصدار في العالم: ChatGPT-5 Pro 🤖✨",
      "مصمم لصنّاع المحتوى، والطلبة، ورواد الأعمال، وكل حد عايز أكتر من الذكاء الاصطناعي.",
      "💎 إيه اللي هيوصلك؟",
      "💬 محادثات بلا حدود — ولا عدد رسائل، ولا تهنيج، ولا انتظار.",
      "📂 رفع ملفات بلا قيود — PDF، Word، Excel أو أي صيغة في أي وقت.",
      "🖼️ رفع صور بلا توقف — سكرين شوت، تصاميم، صور منتجات وتحليل لحظي.",
      "📊 تحليل بيانات خارق — حوّل الأرقام لرسوم وتقارير وملخصات في ثواني.",
      "🧠 فهم ذكي ومرن — ChatGPT-5 Pro بيلقط النبرة والسياق ويمشي على أسلوبك.",
      "🌍 دعم لغات متعددة — اتكلم أو اكتب بأي لغة وهو معاك.",
      "⚙️ بدون سقف وبدون انتظار — شغال طول اليوم بأداء ثابت.",
      "⏳ مدة الاشتراك:",
      "اشتراكك في ChatGPT Pro مدته 30 يوم.",
      "بعد انتهاء الباقة كل الملفات والمحادثات بتتحذف نهائياً، فاحفظ المهم قبل ما الـ 30 يوم يخلصوا 🧾📥",
      "✅ الخلاصة:",
      "ChatGPT Pro هو تجربة الذكاء الاصطناعي القصوى.",
      "غير محدود. أذكى. أسهل.",
      "أهلاً بيك في مستقبل الإبداع والإنتاجية ⚡"
    ],
    ariaLabel: "عرض تفاصيل الاشتراك"
  }
};

export default function HeroCard({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const copy = content[language] ?? content.en;
  const isArabic = language === "ar";

  useEffect(() => {
    let timeout;

    if (isOpen) {
      setShouldRender(true);
    } else {
      timeout = setTimeout(() => setShouldRender(false), DETAILS_ANIMATION_DURATION);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setShouldRender(false);
  }, [language]);

  const toggleDetails = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="w-full max-w-xl" dir={isArabic ? "rtl" : "ltr"} lang={isArabic ? "ar" : "en"}>
      <div className="card-neon rounded-3xl p-8 shadow-inner-glow">
        <div className="relative z-10 flex flex-col gap-10">
          <div className="flex min-h-[200px] flex-col items-center justify-center gap-5 rounded-2xl border border-white/18 bg-black/40 p-10 text-center">
            <p
              className={`text-2xl font-black text-white sm:text-3xl ${
                isArabic ? "tracking-[0.05em] leading-snug" : "tracking-[0.18em]"
              }`}
            >
              {copy.title}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
            <a
              className={`flex w-full items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-black text-black transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:w-auto sm:min-w-[180px] sm:px-10 ${
                isArabic ? "tracking-[0.08em]" : "uppercase tracking-[0.25em]"
              }`}
              href="https://wa.me/201102576790?text=%D8%A7%D9%87%D9%84%D8%A7%20%D9%88%D8%B3%D9%87%D9%84%D8%A7%20%D8%A7%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%83%D8%AB%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%0AHello,%20I%20want%20to%20know%20more%20details%20about%20the%20subscription"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={language === "ar" ? "اشتر الآن عبر واتساب" : "Buy flowbit via WhatsApp"}
            >
              {copy.buyNow}
            </a>
            <button
              type="button"
              onClick={toggleDetails}
              aria-controls="hero-details-panel"
              aria-expanded={isOpen}
              aria-label={copy.ariaLabel}
              className={`rounded-xl border border-white/30 bg-transparent px-8 py-3 text-base font-black text-white transition duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:min-w-[180px] sm:px-10 ${
                isArabic ? "tracking-[0.08em]" : "uppercase tracking-[0.25em]"
              }`}
            >
              {copy.detailsButton}
            </button>
          </div>
        </div>
      </div>
      {shouldRender && (
        <div
          id="hero-details-panel"
          className={`details-panel mt-6 space-y-6 rounded-2xl border border-white/18 bg-black/40 p-10 shadow-inner-glow backdrop-blur-xs ${
            isOpen ? "details-reveal" : "details-hide"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <h3
            className={`text-2xl font-extrabold tracking-[0.24em] text-white ${
              isArabic ? "text-right tracking-[0.08em]" : "uppercase"
            }`}
          >
            {copy.detailsHeading}
          </h3>
          <article
            className={`space-y-5 text-lg leading-relaxed ${
              isArabic ? "text-right font-extrabold text-white" : "text-white/85"
            } sm:text-xl`}
          >
            {copy.paragraphs.map((line, index) => (
              <p key={`${language}-detail-${index}`}>{line}</p>
            ))}
          </article>
          <div
            className={`w-full rounded-xl border border-white/10 bg-white py-3 text-center text-base font-black text-black sm:text-lg ${
              isArabic ? "tracking-[0.08em]" : "uppercase tracking-[0.2em]"
            }`}
          >
            {copy.priceLabel}
          </div>
        </div>
      )}
    </section>
  );
}

