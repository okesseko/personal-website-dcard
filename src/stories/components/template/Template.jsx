import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { BsFillCaretDownFill } from "react-icons/bs"
import dayjs from "dayjs"

import Menu from "@Components/menu"
import Intro from "@Components/intro"
import Loading from "@Components/loading"

import avatar from "@Images/avatar.jpg"

import getCategoryInfo from "@Utils/getCategoryInfo"

import "./template.scss"

const Template = ({
  introList,
  location,
  onOrderChange,
  isForum,
  bannerImg,
  templateCategoryInfo,
  categoryList,
  isOpenModalRouter,
  isLoading,
}) => {
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
    <div className="template">
      {isForum && (
        <div
          className="template__banner"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        />
      )}
      <div className="template__header">
        {isForum && (
          <div className="template__header__category">
            <img src={templateCategoryInfo.image} />
            <h1>{templateCategoryInfo.name}</h1>
          </div>
        )}
        <div className="template__header__groups">
          <div className="template__header__groups-tabs">
            <span className="template__header__groups-tabs-tab template__header__groups-tabs-tab--selected">
              全部
            </span>
          </div>
          <div className="template__header__groups-order">
            <span className="template__header__groups__order-text">
              文章排序依
            </span>
            <div
              className="template__header__groups__order-selector"
              onClick={e => {
                e.stopPropagation()
                setIsOrderMenuOpen(true)
              }}
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
                  onClick={type => {
                    setOrderType(type)
                    onOrderChange(type)
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="template__main">
        {!isLoading ? (
          <>
            {introList.map(data => {
              const introCategoryInfo =
                getCategoryInfo(categoryList, data.category) || {}

              return (
                <Intro
                  key={data.id}
                  authImg={avatar}
                  articleImg={data.previewImg}
                  category={introCategoryInfo.name}
                  intro={data.intro}
                  emotionIcon={data.emotionIcon}
                  emotionNumber={data.emotionNumber}
                  releaseTime={dayjs(data.releaseTime).format("YYYY-MM-DD")}
                  title={data.title}
                  onClick={() => {
                    navigate(
                      `/post/${data.id}`,
                      isOpenModalRouter
                        ? {
                            state: {
                              oldLocation: JSON.parse(JSON.stringify(location)),
                              order: orderType,
                            },
                          }
                        : {}
                    )
                  }}
                />
              )
            })}
            <div className="template__main-end">沒有更多文章囉！</div>
          </>
        ) : (
          <div
            className={`template__main-loading  ${
              isForum && "template__main-loading--hasBanner"
            }`}
          >
            <Loading />
          </div>
        )}
      </div>
    </div>
  )
}

Template.propTypes = {
  introList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      previewImg: PropTypes.string,
      category: PropTypes.string,
      content: PropTypes.string,
      emotionIcon: PropTypes.string,
      emotionNumber: PropTypes.number,
      releaseTime: PropTypes.string,
    })
  ),
  location: PropTypes.any,
  onOrderChange: PropTypes.func,
  isForum: PropTypes.bool,
  bannerImg: PropTypes.string,
  templateCategoryInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    value: PropTypes.string,
  }),
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  isOpenModalRouter: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default Template
