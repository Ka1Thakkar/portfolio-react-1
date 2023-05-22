/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
        robotoslab: "https://fonts.googleapis.com/css2?family=Roboto-Slab:wght@400;600;700&display=swap"
      }
    },
  },
  plugins: [],
}

