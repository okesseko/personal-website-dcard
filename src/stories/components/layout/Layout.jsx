import React from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import "./layout.scss"

const Layout = ({ asideContent, children, headerProps, sidebarProps }) => {
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
