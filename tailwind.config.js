/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                accent: 'rgb(238, 63, 154)',
                'bg-primary': '#000000',
                'bg-secondary': '#111111',
                'text-primary': '#ffffff',
                'text-secondary': '#cccccc',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
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
} 