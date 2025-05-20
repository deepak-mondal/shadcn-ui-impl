/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        // Fluid typography
        'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.5' }],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.4' }],
        'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.3' }],
        'fluid-3xl': ['clamp(2rem, 1.8rem + 1.5vw, 3rem)', { lineHeight: '1.2' }],
        'fluid-4xl': ['clamp(3rem, 2.5rem + 2.5vw, 4rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        // Fluid spacing
        'fluid-1': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 0.4rem + 0.5vw, 1rem)',
        'fluid-3': 'clamp(0.75rem, 0.6rem + 0.75vw, 1.5rem)',
        'fluid-4': 'clamp(1rem, 0.8rem + 1vw, 2rem)',
        'fluid-5': 'clamp(1.5rem, 1.2rem + 1.5vw, 3rem)',
        'fluid-6': 'clamp(2rem, 1.6rem + 2vw, 4rem)',
        'fluid-7': 'clamp(3rem, 2.4rem + 3vw, 6rem)',
        'fluid-8': 'clamp(4rem, 3.2rem + 4vw, 8rem)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 