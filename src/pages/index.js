import React, { useState } from "react"

import { navigate } from "gatsby"

import { BsFillCaretDownFill } from "react-icons/bs"
import Menu from "../stories/components/menu/Menu"
import Intro from "../stories/components/intro/Intro"
import Seo from "../components/seo"

import imgTest from "../images/img-test.png"
import { useLocation } from "@reach/router"

import "./index.scss"

const App = () => {
  const location = useLocation()

  const [isOrderMenuOpen, setIsOrderMenuOpen] = useState(false)
  const [orderType, setOrderType] = useState("desc")

  const orderMenu = [
    {
      text: "新到舊",
      value: "desc",
    },
    {
      text: "舊到新",
      value: "asc",
    },
  ]
  return (
    <div className="all-post">
      <Seo title="Jimmy personal website" />
      <div className="all-post__header">
        <div className="all-post__header__groups">
          <span className="all-post__header__groups-tab all-post__header__groups-tab--selected">
            全部
          </span>
        </div>
        <div className="all-post__header__order">
          <span className="all-post__header__order-text">文章排序依</span>
          <div
            className="all-post__header__order-selector"
            onClick={() => setIsOrderMenuOpen(true)}
          >
            {orderMenu.find(item => item.value === orderType).text}
            <BsFillCaretDownFill
              style={{ marginLeft: "0.25rem", color: "rgba(0,0,0,0.5)" }}
              size={12}
            />
            {isOrderMenuOpen && (
              <Menu
                transitionX="-7.5rem"
                transitionY="1rem"
                selectedItem={orderType}
                items={orderMenu}
                closeMenu={() => setIsOrderMenuOpen(false)}
                onClick={type => setOrderType(type)}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ margin: "0px 60px" }}>
        {new Array(10).fill("").map((_, index) => (
          <Intro
            key={index}
            authImg={imgTest}
            articleImg={imgTest}
            category="test"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged."
            emotionIcon="🤣🥰🤩"
            emotionNumber={1}
            releaseTime="2020/01/01"
            title="Title"
            onClick={() => {
              navigate(`/post/${index}`, {
                state: { oldLocation: JSON.parse(JSON.stringify(location)) },
              })
              console.log("article click")
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
