/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',     // Móviles pequeños
      'md': '768px',     // Tablets
      'lg': '1024px',    // Desktop
      'xl': '1280px',    // Desktop grande
      '2xl': '1536px',   // Pantallas extra grandes
    },
    extend: {},
  },
  plugins: [],
}