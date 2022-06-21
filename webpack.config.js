// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Home',
      filename: 'index.html',
      template: '/src/index.hbs',
      minify: {
        removeRedundantAttributes: false,
        removeComments: true,
        collapseWhitespace: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          inlineRequires: "/images/"
        }
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

  } else {
    config.mode = 'development';
  }
  return config;
};
