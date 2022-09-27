
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
          {
            test: /\.m?js/,
            exclude: /node_modules/,
            type: "javascript/auto",
            use: {
                loader: "babel-loader",
                options: {
                    presets: []
                }
            },
          },
          {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-react','@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            },
          },
        ],
      },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
    }),
    ]
}