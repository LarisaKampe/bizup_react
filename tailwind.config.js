/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.jsx",
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C2D4E",
          dark: "#091F37",
          light: "#0F3A62",
          muted: "#1A4570",
        },
        cyan: {
          DEFAULT: "#19B8E8",
          light: "#4DCBF0",
          dark: "#0EA3D0",
        },
        lime: "#C4E415",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        elevated: "0 8px 40px rgba(0,0,0,0.14)",
        glow: "0 0 24px rgba(25,184,232,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        "fade-in": "fadeIn 0.5s ease both",
        "slide-down": "slideDown 0.3s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
