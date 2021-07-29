const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const path = require('path');
let mode = "development"
let target = "web";

if(process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    path: path.resolve(__dirname,"bundle"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          }
        }
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }, 
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: ""},
          },
          "css-loader", 
          "postcss-loader", 
          "sass-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: "./project/src/index.html",
  })],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    contentBase: "./bundle",
    hot: true,
  },
  entry: './project/src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
};