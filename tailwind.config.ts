import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0C0E',
        surface: {
          DEFAULT: '#131518',
          elevated: '#1A1D21',
        },
        'accent-gold': {
          DEFAULT: '#D4AF37',
          light: '#E8CC6A',
          dark: '#A88A20',
        },
        'accent-cyan': '#38BDF8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,175,55,0.18) 0%, transparent 65%)',
        'gold-shimmer': 'linear-gradient(105deg, #A88A20 0%, #D4AF37 40%, #E8CC6A 60%, #D4AF37 80%, #A88A20 100%)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
