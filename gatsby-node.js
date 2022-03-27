const path = require("path")
const { getCategory } = require("./src/api")
// import { getCategory } from "@Api"

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@Api": path.resolve(__dirname, "src/api"),
        "@Components": path.resolve(__dirname, "src/stories/components"),
        "@Pages": path.resolve(__dirname, "src/pages"),
        "@Images": path.resolve(__dirname, "src/images"),
      },
    },
  })
}

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   let categoryData
//   await getCategory()
//     .then(res => (categoryData = res.data))
//     .catch(err => console.error(err))

//   if (categoryData)
//     categoryData.forEach(category => {
//       console.log(category)
//       createNode({
//         ...category,
//         id: category.id,
//         internal: {
//           type: "category",
//           contentDigest: createContentDigest(category),
//         },
//       })
//     })
// }
