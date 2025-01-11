/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'white-primary' : "#eff2f5",
            'accent': "#2870ea"
        },
        gridTemplateColumns: {
            'crypto-info': "repeat(3, max-content)",
            'performance': "max-content 1fr max-content"
        }
    },
  },
  plugins: [],
}

