const HmlWebpackPlugin = require("html-webpack-plugin");
const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-optional-chaining"],
    },
  },
};
module.exports = {
  output: {
    filename: "app.[contentHash].js",
  },
  module: {
    rules: [javascriptRules],
  },
  plugins: [
    new HmlWebpackPlugin({
      title: " Webpack Paso a paso",
      template: "src/index.html",
    }),
  ],
};
