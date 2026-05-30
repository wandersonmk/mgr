import type { Config } from 'tailwindcss'

/**
 * MGR — Manual do Guarda Roupa
 * Sistema de cores oficial: paleta "Forest Artisan"
 *   Primary   #FF5700  (laranja — CTA, destaques de conversão)
 *   Secondary #D4AF37  (dourado — marca, premium, "39 anos")
 *   Tertiary  #0B1B14  (verde escuro — fundo, superfícies)
 *   Neutral   #F4F4F4  (off-white — texto, surfaces claras)
 */
export default <Partial<Config>>{
  content: ['./app/**/*.{vue,js,ts}', './app.vue'],
  theme: {
    extend: {
      colors: {
        // Escalas tonais completas (uso semântico recomendado)
        primary: {
          50: '#FFF3EC',
          100: '#FFE0CC',
          200: '#FFC09A',
          300: '#FF9B5E',
          400: '#FF7A33',
          500: '#FF5700', // base
          600: '#E64E00',
          700: '#B83E00',
          800: '#8A2F00',
          900: '#5C1F00',
        },
        secondary: {
          50: '#FBF7E9',
          100: '#F6ECC4',
          200: '#ECD888',
          300: '#E2C45C',
          400: '#D9B847',
          500: '#D4AF37', // base
          600: '#B8942A',
          700: '#927420',
          800: '#6B5518',
          900: '#45380F',
        },
        forest: {
          50: '#E9EFEC',
          100: '#C8D6CF',
          200: '#91AC9E',
          300: '#5E8170',
          400: '#38594B',
          500: '#1F3B2E',
          600: '#163024',
          700: '#102619', // surface elevada
          800: '#0B1B14', // base (Tertiary)
          900: '#07120D', // mais profundo
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F4F4F4', // base (Neutral)
          200: '#E6E6E6',
          300: '#D0D0D0',
          400: '#A8A8A8',
          500: '#808080',
          600: '#5C5C5C',
          700: '#3D3D3D',
          800: '#242424',
          900: '#121212',
        },

        // Tokens de marca (atalhos semânticos -> Forest Artisan)
        brand: {
          bg: '#0B1B14',
          'bg-deep': '#07120D',
          surface: '#102619',
          'surface-2': '#163024',
          green: '#1F3B2E',
          'green-accent': '#5E8170', // verde sálvia para ícones/detalhes
          orange: '#FF5700',
          'orange-deep': '#E64E00',
          lime: '#5E8170', // mantido p/ compatibilidade -> sálvia on-brand
          gold: '#D4AF37',
          'gold-soft': '#E2C45C',
          cream: '#F4F4F4',
          muted: '#9DB0A6', // texto secundário esverdeado
          'muted-soft': '#C8D6CF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        cta: '0 14px 34px -10px rgba(255, 87, 0, 0.55)',
        'cta-hover': '0 18px 44px -10px rgba(255, 87, 0, 0.72)',
        card: '0 8px 30px -12px rgba(0, 0, 0, 0.6)',
        'gold-ring': '0 0 0 1px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'forest-glow':
          'radial-gradient(120% 80% at 50% -10%, #1F3B2E 0%, #102619 45%, #07120D 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-glow': 'pulseGlow 2.6s ease-in-out infinite',
      },
    },
  },
}
