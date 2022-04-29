import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"

import Seo from "@Components/seo"

import CategoryContent from "@Contents/CategoryContent"

import Template from "@Components/template"

import getCategoryInfo from "@Utils/getCategoryInfo"

import "../index.scss"

const Forum = ({ location, category }) => {
  const [introList, setIntroList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getIntroList()
  }, [category])

  function getIntroList(order = "desc") {
    setIsLoading(true)

    getArticle({ order, category })
      .then(res => {
        setIntroList(res.data.articles)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <CategoryContent.Consumer>
      {categoryList => {
        const templateCategoryInfo =
          getCategoryInfo(categoryList, category) || {}

        return (
          <div>
            <Seo title={`${templateCategoryInfo.name} | Jimmy Lin`} />
            <Template
              isForum
              isLoading={isLoading}
              templateCategoryInfo={templateCategoryInfo}
              categoryList={categoryList}
              introList={introList}
              location={location}
              onOrderChange={getIntroList}
              bannerImg={templateCategoryInfo.image}
            />
          </div>
        )
      }}
    </CategoryContent.Consumer>
  )
}

export default Forum
