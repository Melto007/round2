const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#7e22ce',
      'white': '#fff',
      'gray': '#6b7280',
      'gray2': '#a1a1aa',
      'gray3': '#d1d5db',
      'gray4': '#d1d5db',
      'red': '#e11d48',
      'pink': '#db2777',
      'red2': '#fcd2c2',
      'red3': '#fae4dc',
      'orange': '#ff7130',
      'black': '#000',
      'green': '#7ef7e1',
      'green2': '#d9fff8',
      'amber': '#fcd34d',
      'lime': '#84cc16',
      'rose': '#fda4af',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}