const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  devServer: {
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/public',
      serverSideRender: true,
      writeToDisk: true,
    },
    historyApiFallback: true,
    static: path.resolve(__dirname, 'public'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },
  output: {
    publicPath: 'auto',
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/compiles'),
  },
  watchOptions: {
    ignored: ['/node_modules/'],
  },
};
