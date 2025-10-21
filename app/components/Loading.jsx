"use client";

import { useEffect, useRef } from "react";

export default function Loading() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    let animationFrame;
    let resizeObserver;

    const fontSize = 18;
    const characters = ["0", "1"];
    let columns = 0;
    let drops = [];

    const setCanvasSize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      columns = Math.floor(innerWidth / fontSize);
      drops = new Array(columns).fill(1);
    };

    const draw = () => {
      if (!context) {
        return;
      }

      context.fillStyle = "rgba(0, 0, 0, 0.2)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.font = `${fontSize}px "Courier New", monospace`;
      context.fillStyle = "rgba(255, 255, 255, 0.85)";

      drops.forEach((dropY, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;
        const y = dropY * fontSize;

        context.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index] = dropY + 1;
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    setCanvasSize();
    draw();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => setCanvasSize());
      resizeObserver.observe(document.body);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
