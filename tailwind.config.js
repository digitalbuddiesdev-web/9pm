/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 9PM Brand Colors (Dark Maroon Red & Black)
        ninepm: {
          primary: '#8F0000',
          hover: '#B31212',
          dark: '#0A0A0A',
          pure: '#000000',
          surface: '#1A1A1A',
          surfaceLight: '#242424',
          text: '#FFFFFF',
          muted: '#A3A3A3',
          offwhite: '#FAF8F6',
          border: 'rgba(255, 255, 255, 0.08)',
          redBorder: 'rgba(143, 0, 0, 0.4)',
          glow: 'rgba(143, 0, 0, 0.3)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'equalizer': 'equalizer 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
