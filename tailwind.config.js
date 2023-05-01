/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#8772E8",

          "secondary": "#444B8C",

          "accent": "#539E2A",

          "neutral": "#191D24",

          "base-100": "#2A303C",

          "info": "#81BB35",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#893976",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}