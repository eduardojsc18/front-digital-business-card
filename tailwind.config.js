/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {

        fontFamily: {
            'raleway': ['"Raleway"', 'sans-serif'],
            'merriweather': ['"Merriweather"', 'sans-serif'],
        },

        extend: {
            /***
             * PALETTE COLOR
             * https://coolors.co/ede0d4-e6ccb2-e2c2a2-ddb892-c7a17d-b08968-9c6644-7f5539-734d34-69462f
             ***/
            colors: {
                'palette': {
                    50: '#EDE0D4',
                    100: '#E6CCB2',
                    200: '#E2C2A2',
                    300: '#DDB892',
                    400: '#C7A17D',
                    500: '#B08968',
                    600: '#9C6644',
                    700: '#7F5539',
                    800: '#734D34',
                    900: '#69462F',
                    1000: '#4b3222',
                    1050: '#251911',
                },
                'ironstone': {
                    50: '#f8f5ee',
                    100: '#ede6d4',
                    200: '#dccdac',
                    300: '#c8ad7c',
                    400: '#b79258',
                    500: '#a87f4a',
                    600: '#90663e',
                    700: '#7f5539',
                    800: '#624231',
                    900: '#55392e',
                    950: '#301d18',
                },
            },
            container: {
                center: true
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
