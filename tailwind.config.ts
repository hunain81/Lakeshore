import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            900: '#0B3B36',
            800: '#0D4540',
            700: '#0F4D45',
          },
          gold: '#C9A65A',
          'gold-light': '#E2C47E',
          cream: '#F6F1E7',
          'cream-dark': '#EDE7D9',
          charcoal: '#1C1C1C',
          'charcoal-soft': '#3A3A3A',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-display)', 'Georgia', 'serif'],
        montserrat: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,8vw,7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem,5vw,4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-xl': ['clamp(2rem,3.5vw,3rem)', { lineHeight: '1.2' }],
        'heading-lg': ['clamp(1.5rem,2.5vw,2.25rem)', { lineHeight: '1.25' }],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
