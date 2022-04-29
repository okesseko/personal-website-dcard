import { Location, Router } from "@reach/router"
import React from "react"

import NotFoundPage from "@Pages/404"
import AllPost from "@Pages/index"
import DialogArticle from "@Pages/post/dialogArticle"
import ArticlePost from "@Pages/post/[id]"
import Search from "@Pages/search"
import Forum from "@Pages/forum/[category]"

import Dialog from "@Components/dialog"
import Layout from "@Components/layout"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const WrapPageElement = () => (
  <Layout>
    <Location>
      {({ location, navigate }) => {
        const { oldLocation, order } = location.state || {}
        return (
          <>
            <Router
              location={oldLocation || location}
              style={{ height: "100%" }}
            >
              <AllPost path="/" />
              <ArticlePost path="post/:articleId" />
              <Search path="search" />
              <Forum path="forum/:category" />
              <NotFoundPage default />
            </Router>
            {oldLocation && (
              <Dialog
                insertDomTree={document.body}
                onClose={() => navigate("/")}
              >
                <DialogArticle
                  oldLocation={oldLocation}
                  order={order}
                  articleId={location.pathname.replace("/post/", "")}
                />
              </Dialog>
            )}
          </>
        )
      }}
    </Location>
  </Layout>
)

export default WrapPageElement
