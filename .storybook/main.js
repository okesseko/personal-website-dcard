const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-gatsby",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    config.module.rules[0].exclude = [/core-js/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    })

    config.resolve.mainFields = ["browser", "module", "main"]

    config.resolve.alias = {
      ...config.resolve.alias,
      "@Components": path.resolve(__dirname, "../src/stories/components"),
      "@Pages": path.resolve(__dirname, "../src/pages"),
      "@Images": path.resolve(__dirname, "../src/images"),
    }
    return config
  },
}
