import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"

import Seo from "@Components/seo"

import CategoryContent from "@Contents/CategoryContent"

import Template from "@Components/template"

import "./index.scss"

const Forum = ({ location, category }) => {
  const [introList, setIntroList] = useState([])

  useEffect(() => {
    getIntroList()
  }, [category])

  function getIntroList(order = "desc") {
    getArticle({ order, category })
      .then(res => {
        setIntroList(res.data.articles)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Seo title={`${category} |Jimmy Lin`} />
      <CategoryContent.Consumer>
        {categoryList => (
          <Template
            isForum
            templateCategory={category}
            categoryList={categoryList}
            introList={introList}
            location={location}
            onOrderChange={getIntroList}
            bannerImg={
              "https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg"
            }
          />
        )}
      </CategoryContent.Consumer>
    </>
  )
}

export default Forum
