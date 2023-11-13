import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        consolas: ['var(--font-roboto-mono)', 'consolas', 'monospace']
      },
      colors: {
        primary: {
          main: '#234CAD'
        },
        secondary: {
          main: '#FFCB30'
        },
        theme: {
          light: colors.white,
          dark: colors.neutral[950]
        }
      },
      transitionTimingFunction: {
        elastic:
          // eslint-disable-next-line max-len
          'linear(0 0.01%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)'
      },
      backgroundImage: {
        'rect-pattern': 'url("/images/rect-pattern.png")'
      },
      zIndex: {
        navbar: '999',
        'navbar-hamburger': '1001',
        'navbar-navigation': '1000'
      }
    }
  },
  plugins: []
};

export default config;
