import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                // Fluid spacing using clamp()
                'fluid-4': 'clamp(1rem, 2vw, 1.5rem)',      // py-4 to py-6
                'fluid-6': 'clamp(1.5rem, 3vw, 2rem)',      // px-6 to px-8
                'fluid-8': 'clamp(2rem, 4vw, 2.5rem)',      // gap-8 to gap-10
                'fluid-16': 'clamp(4rem, 8vw, 5rem)',       // gap-16 to gap-20
            },
            fontSize: {
                // Fluid typography using clamp()
                'fluid-sm': 'clamp(0.875rem, 1.5vw, 1rem)',    // text-sm to text-base
                'fluid-2xl': 'clamp(1.5rem, 3vw, 1.875rem)',   // text-2xl to text-3xl
            },
            maxWidth: {
                // Fluid max-width
                'fluid-7xl': 'clamp(80rem, 90vw, 128rem)',      // max-w-7xl to max-w-8xl
            },
            gap: {
                // Fluid gaps
                'fluid-6': 'clamp(1.5rem, 3vw, 2rem)',      // gap-6 to gap-8
                'fluid-8': 'clamp(2rem, 4vw, 2.5rem)',      // gap-8 to gap-10
                'fluid-16': 'clamp(4rem, 8vw, 5rem)',       // gap-16 to gap-20
            },
            colors: {
                accent: 'rgb(238, 63, 154)',
                'bg-primary': '#000000',
                'bg-secondary': '#111111',
                'text-primary': '#ffffff',
                'text-secondary': '#cccccc',
            },
            fontFamily: {
                'menda': ['Menda', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            },
            animation: {
                'bounce-slow': 'bounce 2s infinite',
                'pulse-glow': 'pulse-glow 2s infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%': { boxShadow: '0 0 0 0 rgba(238, 63, 154, 0.7)' },
                    '70%': { boxShadow: '0 0 0 20px rgba(238, 63, 154, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(238, 63, 154, 0)' },
                }
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [
        fluid
    ]
} 