import * as React from "react"
import { Link } from "gatsby"
import Header from "../stories/components/header/Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  return (
    <div className="global-wrapper" >
      <Header
        placeholder="有甚麼想找的~"
        onSearch={val => {
          console.log(`search val: ${val}`)
        }}
      />
      <main>{children}</main>
    </div>
  )
}

export default Layout
