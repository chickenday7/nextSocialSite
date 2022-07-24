const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
  entry: ["@babel/polyfill",'./src/index.tsx'],
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: `./js/${filename("socialSite.js")}`,
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
    { test: /\.txt$/, use: 'raw-loader' },
    {
        test: /\.css$/i,
        use: [
             "style-loader", 
              "css-loader"
        ],
      },
    {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.m?tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
    },
    {
        test: /\.(woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: `./font/${filename('[ext]')}`
            }
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        title: "Development",
        minify: isProd,
        open: true,
        compress: true,
        hot: true
     }),
     new CleanWebpackPlugin(),
    ],
};