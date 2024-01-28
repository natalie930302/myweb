/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        bungee: ["Bungee"],
        inter: ["Inter"],
        roboto: ["Roboto"],
        notoSansTC: ["Noto Sans TC"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          700: "#ffa507",
          600: "#ffb70b",
          500: "#ffce2d",
          100: "#ffedb4",
          50: "#fff9e2",
        },
        secondary: {
          600: "#2f80ed",
          500: "#2e90fc",
          100: "#bcdcff",
          50: "#e3f1ff",
        },
        gray: {
          800: "#3d3d3d",
          700: "#5c5c5c",
          500: "#8d847c",
          400: "#b7b7b7",
          100: "#f3f3f3",
        },
        alert: {
          500: "#ff4b30",
          300: "#ef9072",
          50: "#ffece5",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
