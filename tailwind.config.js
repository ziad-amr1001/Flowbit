/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#050505",
          900: "#0b0b0b",
          800: "#141414",
          700: "#1f1f1f",
          300: "#d4d4d4",
          100: "#f5f5f5"
        }
      },
      boxShadow: {
        "inner-glow": "inset 0 0 40px rgba(255, 255, 255, 0.08)",
        "soft-glow": "0 0 18px rgba(255, 255, 255, 0.45)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};
