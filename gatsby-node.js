const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@Components": path.resolve(__dirname, "src/stories/components"),
        "@Pages": path.resolve(__dirname, "src/pages"),
        "@Images": path.resolve(__dirname, "src/images"),
      },
    },
  })
}
