/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./project-posts/**/*.{md,mdx}",
    './styles/**/*.{css,scss}',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    // Standardized breakpoints (replaces 15+ inconsistent breakpoints)
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // =========================================================================
      // COLORS - Using CSS Variables for Light/Dark mode support
      // =========================================================================
      colors: {
        // Brand colors
        'brand': {
          primary: 'var(--color-brand-primary)',
          'primary-hover': 'var(--color-brand-primary-hover)',
          'primary-active': 'var(--color-brand-primary-active)',
          secondary: 'var(--color-brand-secondary)',
          'secondary-hover': 'var(--color-brand-secondary-hover)',
          accent: 'var(--color-brand-accent)',
        },
        // Background semantic colors
        'bg': {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          muted: 'var(--color-bg-muted)',
          subtle: 'var(--color-bg-subtle)',
          inverse: 'var(--color-bg-inverse)',
          overlay: 'var(--color-bg-overlay)',
          card: 'var(--color-bg-card)',
          'card-hover': 'var(--color-bg-card-hover)',
        },
        // Surface colors (for elevated elements)
        'surface': {
          1: 'var(--color-surface-1)',
          2: 'var(--color-surface-2)',
          3: 'var(--color-surface-3)',
          hover: 'var(--color-surface-hover)',
          active: 'var(--color-surface-active)',
        },
        // Text semantic colors
        'text': {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          muted: 'var(--color-text-muted)',
          disabled: 'var(--color-text-disabled)',
          inverse: 'var(--color-text-inverse)',
          link: 'var(--color-text-link)',
          'link-hover': 'var(--color-text-link-hover)',
        },
        // Border semantic colors
        'border': {
          DEFAULT: 'var(--color-border-default)',
          light: 'var(--color-border-light)',
          dark: 'var(--color-border-dark)',
          focus: 'var(--color-border-focus)',
          error: 'var(--color-border-error)',
        },
        // Semantic status colors
        'success': {
          DEFAULT: 'var(--color-success)',
          bg: 'var(--color-success-bg)',
          text: 'var(--color-success-text)',
        },
        'warning': {
          DEFAULT: 'var(--color-warning)',
          bg: 'var(--color-warning-bg)',
          text: 'var(--color-warning-text)',
        },
        'error': {
          DEFAULT: 'var(--color-error)',
          bg: 'var(--color-error-bg)',
          text: 'var(--color-error-text)',
        },
        'info': {
          DEFAULT: 'var(--color-info)',
          bg: 'var(--color-info-bg)',
          text: 'var(--color-info-text)',
        },
        // Legacy support (deprecate gradually)
        'japanese-blue': '#7FD1FF',
      },
      
      backgroundColor: {
        'custom-hsla': 'hsla(0, 0%, 47%, .1)',
      },

      // =========================================================================
      // TYPOGRAPHY
      // =========================================================================
      fontFamily: {
        'sans': ['var(--font-sans)'],
        'display': ['K2D', 'var(--font-sans)'],
        'mono': ['var(--font-mono)'],
      },
      fontSize: {
        '2xs': ['var(--font-size-2xs)', { lineHeight: '1.25' }],
        'xs': ['var(--font-size-xs)', { lineHeight: '1.5' }],
        'sm': ['var(--font-size-sm)', { lineHeight: '1.5' }],
        'base': ['var(--font-size-base)', { lineHeight: '1.5' }],
        'md': ['var(--font-size-md)', { lineHeight: '1.5' }],
        'lg': ['var(--font-size-lg)', { lineHeight: '1.625' }],
        'xl': ['var(--font-size-xl)', { lineHeight: '1.625' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: '1.375' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: '1.25' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: '1.25' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: '1' }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: '1' }],
        '7xl': ['var(--font-size-7xl)', { lineHeight: '1' }],
      },
      lineHeight: {
        'none': 'var(--line-height-none)',
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
      },

      // =========================================================================
      // SPACING (Using CSS variables for consistency)
      // =========================================================================
      spacing: {
        'px': '1px',
        '0': '0',
        '0.5': 'var(--space-0-5)',
        '1': 'var(--space-1)',
        '1.5': 'var(--space-1-5)',
        '2': 'var(--space-2)',
        '2.5': 'var(--space-2-5)',
        '3': 'var(--space-3)',
        '3.5': 'var(--space-3-5)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '7': 'var(--space-7)',
        '8': 'var(--space-8)',
        '9': 'var(--space-9)',
        '10': 'var(--space-10)',
        '11': 'var(--space-11)',
        '12': 'var(--space-12)',
        '14': 'var(--space-14)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
        '28': 'var(--space-28)',
        '32': 'var(--space-32)',
        '36': 'var(--space-36)',
        '40': 'var(--space-40)',
        '44': 'var(--space-44)',
        '48': 'var(--space-48)',
        '52': 'var(--space-52)',
        '56': 'var(--space-56)',
        '60': 'var(--space-60)',
        '64': 'var(--space-64)',
      },

      // =========================================================================
      // BORDER RADIUS
      // =========================================================================
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'DEFAULT': 'var(--radius-DEFAULT)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        'full': 'var(--radius-full)',
        // Component-specific
        'button': 'var(--radius-button)',
        'card': 'var(--radius-card)',
        'input': 'var(--radius-input)',
        'modal': 'var(--radius-modal)',
        'badge': 'var(--radius-badge)',
        'tag': 'var(--radius-tag)',
        'avatar': 'var(--radius-avatar)',
        'image': 'var(--radius-image)',
      },

      // =========================================================================
      // BOX SHADOW
      // =========================================================================
      boxShadow: {
        'none': 'var(--shadow-none)',
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-DEFAULT)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'inner': 'var(--shadow-inner)',
        // Component-specific
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'dropdown': 'var(--shadow-dropdown)',
        'modal': 'var(--shadow-modal)',
        'button-inset': 'var(--shadow-button-inset)',
      },

      // =========================================================================
      // Z-INDEX
      // =========================================================================
      zIndex: {
        'auto': 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'fixed': 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        'modal': 'var(--z-modal)',
        'popover': 'var(--z-popover)',
        'tooltip': 'var(--z-tooltip)',
        'toast': 'var(--z-toast)',
        'max': 'var(--z-max)',
      },

      // =========================================================================
      // TRANSITIONS
      // =========================================================================
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
        'slower': 'var(--transition-slower)',
      },
      transitionTimingFunction: {
        'linear': 'var(--ease-linear)',
        'in': 'var(--ease-in)',
        'out': 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        'bounce': 'var(--ease-bounce)',
      },

      // =========================================================================
      // CONTAINER
      // =========================================================================
      maxWidth: {
        'prose': 'var(--container-prose)',
        'container-sm': 'var(--container-sm)',
        'container-md': 'var(--container-md)',
        'container-lg': 'var(--container-lg)',
        'container-xl': 'var(--container-xl)',
        'container-2xl': 'var(--container-2xl)',
      },

      // =========================================================================
      // ANIMATIONS
      // =========================================================================
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'scale-out': 'scaleOut 0.2s ease-in',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

