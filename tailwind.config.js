/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Support toggling dark mode via class
  theme: {
    extend: {
      colors: {
        darkBg: '#090a0f',
        darkCard: 'rgba(17, 24, 39, 0.7)',
        glowPurple: '#6366f1',
        glowCyan: '#06b6d4',
        glowEmerald: '#10b981',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.6))' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
