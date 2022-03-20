import React from "react"
import Layout from "./src/stories/components/layout/Layout"

import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"
import imgTest from "./src/images/img-test.png"
import react from "./src/images/react-icon.png"
import reactNative from "./src/images/react-native-icon.png"
import nft from "./src/images/NFT.png"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const WrapPageElement = ({ element, props }) => (
  <Layout
    headerProps={{
      placeholder: "搜尋 你好",
      onSearch: val => {
        console.log(`search val: ${val}`)
      },
    }}
    sidebarProps={{
      fixedItems: [
        { IconComponent: CgMenuBoxed, text: "所有文章", value: "all" },
        { IconComponent: FaFire, text: "熱門文章", value: "popular" },
      ],
      topicItems: [
        { type: "title", text: "文章分類", value: "title" },
        { type: "image", imageUrl: react, text: "React", value: "react" },
        {
          type: "image",
          imageUrl: reactNative,
          text: "React Native",
          value: "RN",
        },
        { type: "image", imageUrl: nft, text: "NFT", value: "NFT" },
        {
          type: "image",
          imageUrl: imgTest,
          text: "個人網站",
          value: "website",
        },
      ],
    }}
    {...props}
  >
    {element}
  </Layout>
)

export default WrapPageElement
