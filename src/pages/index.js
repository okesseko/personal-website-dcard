import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import React, { useEffect, useState } from "react"
import { BsFillCaretDownFill } from "react-icons/bs"
import dayjs from "dayjs"

import { getArticle } from "@Api"

import Menu from "@Components/menu"
import Intro from "@Components/intro"
import Seo from "@Components/seo"

import avatar from "@Images/avatar.jpg"

import "./index.scss"

const App = () => {
  const location = useLocation()

  const [isOrderMenuOpen, setIsOrderMenuOpen] = useState(false)
  const [orderType, setOrderType] = useState("desc")
  const [introList, setIntroList] = useState([])

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
  useEffect(() => {
    getArticle({ order: orderType })
      .then(res => {
        setIntroList(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [orderType])

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
        {introList.map(data => (
          <Intro
            key={data.id}
            authImg={avatar}
            articleImg={data.previewImg}
            category={data.category}
            description={data.content}
            emotionIcon={data.emotionIcon}
            emotionNumber={data.emotionNumber}
            releaseTime={dayjs(data.releaseTime).format("YYYY-MM-DD")}
            title={data.title}
            onClick={() => {
              navigate(`/post/${data.id}`, {
                state: {
                  oldLocation: JSON.parse(JSON.stringify(location)),
                },
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
