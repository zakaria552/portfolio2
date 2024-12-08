/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "circular-web": ["circular-web", "sans-serif"],
        jaro: ['Jaro', "sans-serif"],
        yuji: ["Yuji+Mai"],
        Raleway: ['Raleway', 'sans-serif'],
        potta: ["Potta One", "sans-serif"]
      },
    },
  },
  plugins: [],
}

