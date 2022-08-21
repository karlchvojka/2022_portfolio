const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    allowedHosts: 'all'
  },
  resolve: {
    alias: {
      path: require.resolve('path-browserify'),
      public: path.resolve(__dirname, './public'),
      src: path.resolve(__dirname, './src'),
      elements: path.resolve(__dirname, './src/components/elements'),
      globalAssets: path.resolve(__dirname, './src/globalAssets'),
      globalConfig: path.resolve(__dirname, './src/globalConfig'),
      modules: path.resolve(__dirname, './src/components/modules'),
      layouts: path.resolve(__dirname, './src/components/layouts'),
      pages: path.resolve(__dirname, './src/components/pages'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    })
  ]
}
