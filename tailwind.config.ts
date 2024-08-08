import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#1f2124',
                red: '#c1121f',
                gray: '#e5e5e5',
                white: '#fff',
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
