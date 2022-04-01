import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useLayoutEffect } from "react"
import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"

import CategoryContent from "@Contents/CategoryContent"

import Header from "@Components/header"
import Sidebar from "@Components/sidebar"
import "./layout.scss"

const Layout = ({ asideContent, children }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    // remove router state when reload page
    navigate(location.pathname + location.search, { replace: true })
  }, [])

  return (
    <CategoryContent.Consumer>
      {categoryList => {
        const sidebarCategoryList = categoryList.map(category => ({
          type: "image",
          imageUrl: category.image,
          text: category.name,
          value: `/forum/${category.value}`,
        }))
        return (
          <div className="layout">
            <Header
              placeholder="搜尋 你好"
              onSearch={val => navigate(`/search?query=${val}`)}
            />
            <div className="layout__main">
              <Sidebar
                fixedItems={[
                  { IconComponent: CgMenuBoxed, text: "所有文章", value: "/" },
                  // {
                  //   IconComponent: FaFire,
                  //   text: "熱門文章",
                  //   value: "/popular",
                  // },
                ]}
                topicItems={[
                  { type: "title", text: "文章分類", value: "/forum/title" },
                  ...sidebarCategoryList,
                ]}
              />
              <main>
                <div className="layout__main__children">{children}</div>
              </main>
              <aside className="layout__main__aside">{asideContent}</aside>
            </div>
          </div>
        )
      }}
    </CategoryContent.Consumer>
  )
}

Layout.propTypes = {
  asideContent: PropTypes.element,
  children: PropTypes.element.isRequired,
}

export default Layout
