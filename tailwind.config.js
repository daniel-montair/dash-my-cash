/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens Semânticos
        'primary-yellow': 'var(--color-primary-yellow)',
        'primary-blue': 'var(--color-primary-blue)',
        'success-green': 'var(--color-success-green)',
        'danger-red': 'var(--color-danger-red)',
        'info-blue': 'var(--color-info-blue)',
        'lime-green': 'var(--color-lime-green)',
        
        // Tokens Primitivos - Escala de Cinza
        'gray': {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        
        // Cores de Gráfico
        'chart-income-light': 'var(--chart-income-light)',
        'chart-expense-light': 'var(--chart-expense-light)',
      },
      spacing: {
        // Tokens Semânticos
        'container': 'var(--spacing-container)',
        'section': 'var(--spacing-section)',
        'card': 'var(--spacing-card)',
        
        // Tokens Primitivos
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      },
      fontSize: {
        'h1': 'var(--font-size-h1)',
        'h2': 'var(--font-size-h2)',
        'body': 'var(--font-size-body)',
        'sm': 'var(--font-size-sm)',
        'xs': 'var(--font-size-xs)',
      },
      fontWeight: {
        'regular': 'var(--font-weight-regular)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'full': 'var(--border-radius-full)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
      },
      screens: {
        'md': '768px',   // Tablet
        'desktop': '1024px',  // Desktop (conforme PROMPT 3)
        'lg': '1280px',  // Desktop (conforme regras do projeto)
        'xl': '1920px',  // Wide / 4K
      },
    },
  },
  plugins: [],
}
