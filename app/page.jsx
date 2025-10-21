"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import SocialRow from "./components/SocialRow";
import Footer from "./components/Footer";

export default function HomePage() {
  const [isFading, setIsFading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [language, setLanguage] = useState("en");
  const timersRef = useRef({ fade: null, hide: null });

  const clearOverlayTimers = useCallback(() => {
    if (timersRef.current.fade) {
      clearTimeout(timersRef.current.fade);
      timersRef.current.fade = null;
    }
    if (timersRef.current.hide) {
      clearTimeout(timersRef.current.hide);
      timersRef.current.hide = null;
    }
  }, []);

  const triggerOverlay = useCallback(() => {
    clearOverlayTimers();
    setShowOverlay(true);
    setIsFading(false);
    document.body.classList.add("overflow-hidden");

    timersRef.current.fade = setTimeout(() => {
      setIsFading(true);
      document.body.classList.remove("overflow-hidden");
    }, 900);

    timersRef.current.hide = setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  }, [clearOverlayTimers]);

  useEffect(() => {
    triggerOverlay();
    return () => {
      clearOverlayTimers();
      document.body.classList.remove("overflow-hidden");
    };
  }, [clearOverlayTimers, triggerOverlay]);

  const handleLanguageToggle = useCallback(() => {
    triggerOverlay();
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }, [triggerOverlay]);

  const isArabic = language === "ar";

  return (
    <div className="relative flex min-h-screen flex-col bg-gray-950 text-white">
      {showOverlay && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${
            isFading ? "fade-out pointer-events-none" : ""
          }`}
        >
          <Loading isFading={isFading} />
        </div>
      )}

      <Navbar language={language} onToggleLanguage={handleLanguageToggle} />

      <main
        className={`flex flex-1 flex-col items-center px-6 pb-24 pt-20 sm:pt-24 ${
          isArabic ? "font-extrabold" : ""
        }`}
        dir={isArabic ? "rtl" : "ltr"}
        lang={isArabic ? "ar" : "en"}
      >
        <HeroCard language={language} />
        <div className="mt-12 sm:mt-14">
          <SocialRow language={language} />
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
