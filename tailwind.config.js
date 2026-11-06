/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#050816',
        surface: '#0D1124',
        primary: {
          DEFAULT: '#6C63FF',
          hover: '#5A50E5',
          light: '#857DFF',
          dark: '#4F46E5',
          15: 'rgba(108, 99, 255, 0.15)',
          20: 'rgba(108, 99, 255, 0.2)',
        },
        secondary: {
          DEFAULT: '#00E5FF',
          hover: '#00C8E0',
          15: 'rgba(0, 229, 255, 0.15)',
        },
        accent: {
          DEFAULT: '#FF4D9D',
          hover: '#E03682',
        },
        'text-secondary': '#94A3B8',
        dark: {
          bg: '#050816',
          surface: '#0D1124',
          card: '#0E1326',
          cardHover: '#131A33',
          border: 'rgba(255, 255, 255, 0.1)',
          borderLight: 'rgba(255, 255, 255, 0.15)'
        }
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(108, 99, 255, 0.28)',
        'glow-cyan': '0 0 25px rgba(0, 229, 255, 0.28)',
        'glow-pink': '0 0 25px rgba(255, 77, 157, 0.28)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(108, 99, 255, 0.28), transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(108, 99, 255, 0.25), rgba(0, 229, 255, 0.15), rgba(255, 77, 157, 0.15))',
      }
    },
  },
  plugins: [],
}
