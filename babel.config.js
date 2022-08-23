module.exports = {
    presets: ['@babel/env', '@babel/preset-react'],
    plugins: [
        ['@babel/transform-runtime'],
    ],
    env: {
        test: {
            plugins: ['@babel/plugin-transform-runtime'],
        },
    },
};
