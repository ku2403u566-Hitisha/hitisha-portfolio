/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#EDE6D6',
        'warm-white': '#F8F6F2',
        'charcoal': '#2B2B2B',
        'soft-gold': '#C6A969',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
