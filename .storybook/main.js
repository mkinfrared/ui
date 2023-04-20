const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const compileTokens = require("./compileTokens");

process.env.DESIGN_TOKEN_GLOB = "**/*.tokens.{css,less,svg}";

compileTokens();

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        scriptsPackageName: "../node_modules/react-scripts",
      },
    },
    "@storybook/addon-a11y",
    "aria-live-storybook-addon",
    "storybook-design-token",
    {
      name: "storybook-addon-turbo-build",
      options: {
        // Please refer below tables for available options
        optimizationLevel: 2,
      },
    },
  ],
  core: {
    builder: {
      name: "webpack5",
    },
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    return config;
  },
};
