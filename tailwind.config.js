/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#030B18',
        accent1: '#00FFD1',
        accent2: '#F5C842',
        accent3: '#6C63FF',
        textPrimary: '#FFFFFF',
        textSecondary: '#94A3B8',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
