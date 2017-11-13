module.exports = {
    entry: './app.js',
    output: {
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, use: 'eslint-loader' },
            { test: /\.txt$/, use: 'text-loader' },
        ]
    }
};
