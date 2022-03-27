import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { CgMenuBoxed } from "react-icons/cg"
import { FaFire } from "react-icons/fa"

import { getCategory } from "@Api"

import Header from "@Components/header"
import Sidebar from "@Components/sidebar"
import "./layout.scss"

const Layout = ({ asideContent, children }) => {
  const location = useLocation()

  const [categoryList, setCategoryList] = useState([])

  useLayoutEffect(() => {
    // remove router state when reload page
    navigate(location.pathname + location.search, { replace: true })
  }, [])

  useEffect(() => {
    getCategory()
      .then(res =>
        setCategoryList(
          res.data.map(data => ({
            type: "image",
            imageUrl: data.image,
            text: data.name,
            value: `/forum/${data.value}`,
          }))
        )
      )
      .catch(err => console.error(err))
  })

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
            { IconComponent: FaFire, text: "熱門文章", value: "/popular" },
          ]}
          topicItems={[
            { type: "title", text: "文章分類", value: "/forum/title" },
            ...categoryList,
          ]}
        />
        <main>
          <div className="layout__main__children">{children}</div>
        </main>
        <aside className="layout__main__aside">{asideContent}</aside>
      </div>
    </div>
  )
}

Layout.propTypes = {
  asideContent: PropTypes.element,
  children: PropTypes.element.isRequired,
}

export default Layout
