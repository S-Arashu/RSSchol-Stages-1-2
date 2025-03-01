const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, './public')],
            },
        ],
    },
    output: {
        publicPath: './src',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src'),
    },
};
