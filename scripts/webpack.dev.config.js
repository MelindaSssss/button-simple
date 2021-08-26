const path = require("path");
const webpack = require("webpack");
const webpackConfigBase = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
// const NODE_DIR = path.resolve(__dirname, "node_modules");
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const webpackConfigDev = {
  mode: "development",
  resolve: {
    alias: {
      // react: path.join(NODE_DIR, "react/dist/react.min.js"),
      // "react-dom": path.join(NODE_DIR, "react-dom/dist/react-dom.min.js"),
      React: "react",
      ReactDOM: "react-dom",
    },
  },
  entry: {
    app: [resolve("../src/index.js")],
  },

  output: {
    path: resolve("../lib"),
    filename: "button-simple.js",
  },

  devtool: "cheap-module-eval-source-map",

  devServer: {
    contentBase: resolve("../lib"),
    hot: true,
    open: true,
    host: "localhost",
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
