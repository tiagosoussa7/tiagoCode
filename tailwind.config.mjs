/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xm: "440px",
      sm: "640px",
      md: "768px",
      lg: "940px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-quantum)",
      secondary: "var(--font-megrim)",
      tertiary: "var(--font-bruno)",
      quartenary: "var(--font-tech)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        secondary: "#232329",
        accent: {
          DEFAULT: "#a02fee",
          hover: "#5d009d",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
