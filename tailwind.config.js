import fluid, { extract } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
    content: {
        files: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        extract
    },
    theme: {
        fontFamily: {
            sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            menda: ['Menda', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                accent: 'rgb(238, 63, 154)',
                'bg-primary': '#000000',
                'bg-secondary': '#111111',
                'text-primary': '#ffffff',
                'text-secondary': '#cccccc',
            },
        },
    },
    plugins: [
        fluid
    ]
} 