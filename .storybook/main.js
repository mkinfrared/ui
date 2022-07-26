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
  ],
  core: {
    builder: "webpack5",
  },
};
