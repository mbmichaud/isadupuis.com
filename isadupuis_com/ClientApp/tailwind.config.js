/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontFamily: {
            'dancing': ['Dancing Script'],
        },
        extend: {
            //colors: {
            //    "primary": "#5E1C28",
            //    "secondary": "#881337",
            //    "accent": "#1FB2A6",
            //    "neutral": "#191D24",
            //    "base-100": "#2A303C",
            //    "info": "#3ABFF8",
            //    "success": "#36D399",
            //    "warning": "#FBBD23",
            //    "error": "#F87272",
            //},
            animation: {
                'bg-left-right-slow': 'bg-left-right 5s ease infinite',
            },
            keyframes: {
                "bg-left-right": {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                }
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
                "primary": "#5E1C28",
                "secondary": "#881337",
                "accent": "#20e0a5",
                "neutral": "#171a22",
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
