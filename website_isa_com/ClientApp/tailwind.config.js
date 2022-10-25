/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#881337",
                "secondary": "#4c1d95",
                "accent": "#1FB2A6",
                "neutral": "#191D24",
                "base-100": "#2A303C",
                "info": "#3ABFF8",
                "success": "#36D399",
                "warning": "#FBBD23",
                "error": "#F87272",
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                    },
                },
            },
        },
    },
    daisyui: {
        themes: [{
            customTheme: {
                "primary": "#881337",
                "secondary": "#4c1d95",
                "accent": "#1FB2A6",
                "neutral": "#191D24",
                "base-100": "#2A303C",
                "info": "#3ABFF8",
                "success": "#36D399",
                "warning": "#FBBD23",
                "error": "#F87272",
            },
        }],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui")
    ],
} 
