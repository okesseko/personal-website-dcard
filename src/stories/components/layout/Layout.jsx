import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useLayoutEffect } from "react"

import Header from "@Components/header"
import Sidebar from "@Components/sidebar"
import "./layout.scss"

const Layout = ({ asideContent, children, headerProps, sidebarProps }) => {
  const location = useLocation()

  // remove router state when reload page
  useLayoutEffect(() => {
    navigate(location.pathname + location.search, { replace: true })
  }, [])
  return (
    <div className="layout">
      <Header {...headerProps} />
      <div className="layout__main">
        <Sidebar {...sidebarProps} />
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
  headerProps: PropTypes.shape(Header.propTypes),
  sidebarProps: PropTypes.shape(Sidebar.propTypes),
}

export default Layout
