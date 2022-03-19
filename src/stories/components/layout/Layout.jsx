import React from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import { CgMenuBoxed } from "react-icons/cg"
import imgTest from "../../../images/img-test.png"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header
        placeholder="有甚麼想找的~"
        onSearch={val => {
          console.log(`search val: ${val}`)
        }}
      />
      <div className="layout__main">
        <Sidebar
          fixedItems={[
            { IconComponent: CgMenuBoxed, text: "I am fixed items" },
            { IconComponent: CgMenuBoxed, text: "I am fixed items" },
            { IconComponent: CgMenuBoxed, text: "I am fixed items" },
            { IconComponent: CgMenuBoxed, text: "I am fixed items" },
          ]}
          topicItems={[
            { type: "title", text: "I am title" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
            { type: "image", imageUrl: imgTest, text: "I am topic item" },
          ]}
        />
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.defaultProps = {
  IconComponent: <></>,
  iconSize: 24,
  imageUrl: "",
  text: "",
  type: "icon",
}

Layout.propTypes = {
  IconComponent: PropTypes.elementType,
  iconSize: PropTypes.number,
  imageUrl: PropTypes.string,
  selected: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "image", "title"]),
}

export default Layout
