/** @type {import('tailwindcss').Config} */
export const content = ["./knowcode/*.html"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      mono: ["Ubuntu Mono", "monospace"],
    },
    backgroundImage: {
      "hero-jigsaw": `url("/static/jigsaw.svg")`,
    },
  },
};
export const daisyui = {
  themes: [
    {
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "#1c7ed6",
        "primary-content": "#fff",
        secondary: "#f41808",
        "secondary-content": "#fff",
        accent: "#edf2ff",
        neutral: "#222233",
        "neutral-content": "#fff",
        "base-100": "#fff",
        "base-200": "#f1f3f5",
        "base-300": "#fff",
        "base-content": "#000",
        error: "#e03131",
        "error-content": "#fff",
        success: "#8ce99a",
      },
    },
  ],
};
export const plugins = [require("daisyui")];
