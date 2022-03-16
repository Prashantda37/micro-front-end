const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const Dotenv = require('dotenv-webpack');

const deps = require('./package.json').dependencies;

// const ENV = process.env.NODE_ENV;

module.exports = {
  output: {
    publicPath: 'http://localhost:8080/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      allowEmptyValues: true,
      'process.env': {
        // ENV: JSON.stringify(ENV),
        BASE_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new ModuleFederationPlugin({
      name: 'services',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './store': './src/store/storeProvider',
        './actions': './src/store/actions',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
