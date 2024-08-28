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
      'gray5': '#f0efed',
      'red': '#e11d48',
      'pink': '#db2777',
      'red2': '#fce2ca',
      'red3': '#faffff',
      'orange2': '#fce0a7',
      'orange': '#ff7130',
      'black': '#000',
      'green': '#b7f7f7',
      'green2': '#faffff',
      'amber': '#fab89b',
      'lime': '#02e320',
      'rose': '#fda4af',
      'purple2': '#aca7fc',
      'purple3': '#e5e4f7',
      'skyblue': '#0791fa'
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}