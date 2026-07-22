/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Helios design tokens from DESIGN.md
        surface: {
          1: '#f7f5f0',
          2: '#ffffff',
          3: '#e1dcd2',
          dark: '#161514',
          'dark-raised': '#1f1d1b',
        },
        ink: {
          DEFAULT: '#161514',
          soft: 'rgba(22, 21, 20, 0.64)',
          faint: 'rgba(22, 21, 20, 0.48)',
          hairline: 'rgba(22, 21, 20, 0.12)',
          'on-dark': '#f7f5f0',
          'on-dark-soft': 'rgba(247, 245, 240, 0.64)',
          'on-dark-faint': 'rgba(247, 245, 240, 0.48)',
          'on-dark-hairline': 'rgba(247, 245, 240, 0.08)',
        },
        accent: {
          1: '#f2da4a',
          2: '#d9b800',
        },
        overlay: {
          2: 'rgba(22, 21, 20, 0.32)',
          3: 'rgba(22, 21, 20, 0.64)',
          glass: 'rgba(255, 255, 255, 0.12)',
          'glass-light': 'rgba(225, 220, 210, 0.64)',
        },
        // Legacy brand aliases remapped to Helios (avoid teal/blue SaaS look)
        brand: {
          50: '#f7f5f0',
          100: '#e1dcd2',
          500: '#d9b800',
          600: '#c4a600',
          700: '#161514',
          900: '#161514',
        },
      },
      fontFamily: {
        sans: [
          'Switzer',
          'Inter',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'Geist Mono',
          'SFMono-Regular',
          'Consolas',
          'ui-monospace',
          'monospace',
        ],
      },
      fontSize: {
        h1: ['60px', { lineHeight: '60px', letterSpacing: '-2px', fontWeight: '500' }],
        h2: ['48px', { lineHeight: '52px', letterSpacing: '-1.25px', fontWeight: '500' }],
        h3: ['40px', { lineHeight: '44px', letterSpacing: '-1px', fontWeight: '500' }],
        h4: ['32px', { lineHeight: '36px', letterSpacing: '-0.5px', fontWeight: '500' }],
        h5: ['28px', { lineHeight: '32px', letterSpacing: '-0.5px', fontWeight: '500' }],
        h6: ['24px', { lineHeight: '28px', letterSpacing: '-0.25px', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '28px', letterSpacing: '0', fontWeight: '400' }],
        body: ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' }],
        label: ['11px', { lineHeight: '12px', letterSpacing: '1.25px', fontWeight: '600' }],
      },
      borderRadius: {
        'helios-sm': '16px',
        'helios-md': '24px',
        'helios-lg': '32px',
        'helios-xl': '40px',
        'helios-full': '1080px',
      },
      maxWidth: {
        content: '1376px',
        canvas: '1440px',
        nav: '1028px',
      },
      spacing: {
        'section-sm': '80px',
        'section-md': '120px',
        'section-lg': '160px',
        'section-xl': '200px',
      },
      transitionDuration: {
        helios: '200ms',
      },
    },
  },
  plugins: [],
};
