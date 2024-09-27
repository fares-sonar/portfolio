/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        header: "var(--bg-header)",
        blue: "var(--blue)",
        modalBg: "var(--modal-bg)",
        iconHover: "var(--icon-hover)",
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(.6)" },
          "60%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        upDown:{
          "0%": { transform: "translateY(-50px)" },
          "60%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-50px)" },
        },
      },
      animation: {
        popUp: "popUp .5s linear",
        upDown: "upDown 5s linear infinite",
      },
    },
  },
  plugins: [],
};
