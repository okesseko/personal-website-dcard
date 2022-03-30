const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@Api": path.resolve(__dirname, "src/api"),
        "@Components": path.resolve(__dirname, "src/stories/components"),
        "@Contents": path.resolve(__dirname, "src/contents"),
        "@Images": path.resolve(__dirname, "src/images"),
        "@Pages": path.resolve(__dirname, "src/pages"),
        "@Utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}