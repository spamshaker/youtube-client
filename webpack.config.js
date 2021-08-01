const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const config = {
  entry: {'web-main': './client/web/src/index.tsx', styles: './client/styles/main.css'},
  output: {
    path: path.resolve(__dirname, 'server/web/public')
  },
  devServer: {
    open: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.less'],
    alias: {'@web-modules': path.resolve(__dirname, 'client/web/src')}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/web/public/index.html'
    }),
    new webpack.EnvironmentPlugin({
      REDIRECT_URL: 'http://localhost:8000'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: ['less-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
    config.devtool = 'source-map';
  }
  return config;
};
