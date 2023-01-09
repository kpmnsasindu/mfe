const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFedarationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packgeJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFedarationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
      },
      shared: packgeJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
