import { Location, Router } from "@reach/router"
import { navigate } from "gatsby"
import React from "react"
import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"

import imgTest from "@Images/img-test.png"
import nft from "@Images/NFT.png"
import react from "@Images/react-icon.png"
import reactNative from "@Images/react-native-icon.png"

import NotFoundPage from "@Pages/404"
import AllPost from "@Pages/index"
import DialogArticle from "@Pages/post/dialogArticle"
import ArticlePost from "@Pages/post/[id]"
import Search from "@Pages/search"

import Dialog from "@Components/dialog"
import Layout from "@Components/layout"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const WrapPageElement = () => (
  <Layout
    headerProps={{
      placeholder: "搜尋 你好",
      onSearch: val => {
        navigate(`/search?query=${val}`)
      },
    }}
    sidebarProps={{
      fixedItems: [
        { IconComponent: CgMenuBoxed, text: "所有文章", value: "/" },
        { IconComponent: FaFire, text: "熱門文章", value: "/popular" },
      ],
      topicItems: [
        { type: "title", text: "文章分類", value: "/forum/title" },
        {
          type: "image",
          imageUrl: react,
          text: "React",
          value: "/forum/react",
        },
        {
          type: "image",
          imageUrl: reactNative,
          text: "React Native",
          value: "/forum/RN",
        },
        { type: "image", imageUrl: nft, text: "NFT", value: "/forum/NFT" },
        {
          type: "image",
          imageUrl: imgTest,
          text: "個人網站",
          value: "/forum/website",
        },
      ],
    }}
  >
    <Location>
      {({ location, navigate }) => {
        const { oldLocation } = location.state || {}
        return (
          <>
            <Router
              location={oldLocation || location}
              style={{ height: "100%" }}
            >
              <AllPost path="/" />
              <ArticlePost path="post/:id" />
              <Search path="search" />
              <NotFoundPage default />
            </Router>
            {oldLocation && (
              <Dialog
                insertDomTree={document.body}
                onClose={() => navigate("/")}
              >
                <DialogArticle oldLocation={oldLocation} />
              </Dialog>
            )}
          </>
        )
      }}
    </Location>
  </Layout>
)

export default WrapPageElement
