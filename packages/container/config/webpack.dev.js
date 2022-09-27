const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: {
                ...deps,
                react: {
                  singleton: true,
                  requiredVersion: deps.react,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                },
              },
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);
