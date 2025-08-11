// webpack.config.js

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const PUBLIC_URL = isProd
  ? "https://PatnamMadhu.github.io/portfolio"
  : "/";

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? false : "eval-source-map",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: PUBLIC_URL,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMaps: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: "public/assets", to: "dist/assets" }],
    }),

    new webpack.DefinePlugin({
      "process.env.PUBLIC_URL": JSON.stringify(PUBLIC_URL),
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
      publicPath: "/",
    },
  },
};
