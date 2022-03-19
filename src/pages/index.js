import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../stories/components/layout/Layout"
import Seo from "../components/seo"
import { Router } from "@reach/router"

import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"
import imgTest from "../images/img-test.png"
import react from "../images/react-icon.png"
import reactNative from "../images/react-native-icon.png"
import nft from "../images/NFT.png"
import AllPost from "../templates/allPost"

const App = ({ data, location }) => {
  return (
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
          { type: "title", text: "文章分類" },
          { type: "image", imageUrl: react, text: "React" },
          { type: "image", imageUrl: reactNative, text: "React Native" },
          { type: "image", imageUrl: nft, text: "NFT" },
          { type: "image", imageUrl: imgTest, text: "個人網站" },
        ],
      }}
    >
      <Router>
        <AllPost path="/" />
      </Router>
    </Layout>
  )
}

export default App
