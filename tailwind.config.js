// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      // https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      // https://tailwindcss.com/docs/drop-shadow#basic-usage
      dropShadow: {
        at: `0 0.50px 0.50px rgba(0,0,0,0.8)`,
      },
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#using-custom-colors
        //Accessibility and Tailwin CSS Colors: https://colour-a11y.vercel.app/
        primary: {
          50: `#E0F7FA`,
          100: `#D1F8FF`,
          200: `#C2FBFE`,
          300: `#B3FCFD`,
          400: `#A4FDFC`,
          500: `#95FEFB`,
          600: `#06b6d4`,
          700: `#77FFE9`,
          800: `#68FFE8`,
          900: `#59FFE7`,
          950: `#4AFFE6`,
        },
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.sky.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    // https://dev.to/gokhantaskan/adding-a-tailwindcss-light-only-variant-in-a-few-seconds-using-vue-3-and-vueuse-43al
    plugin(({ addVariant }) => {
      addVariant('light', `.light &`)
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
