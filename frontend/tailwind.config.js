const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        inset: {
            0: 0,
            auto: 'auto',
            '1/2': '50%'
        },
        extend: {
            colors: {
                primary: colors.indigo,
                secondary: colors.blue
            }
        }
    },
    variants: {},
    plugins: []
};
