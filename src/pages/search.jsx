import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"
import Seo from "@Components/seo"

import CategoryContent from "@Contents/CategoryContent"

import Template from "@Components/template"

import getQuery from "@Utils/getQuery"

import "./index.scss"

const Search = ({ location }) => {
  const [introList, setIntroList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const searchQuery = getQuery(location)

  useEffect(() => {
    getIntroList()
  }, [location.search])

  function getIntroList(order = "desc") {
    setIsLoading(true)

    getArticle({ order, search: searchQuery })
      .then(res => {
        setIntroList(res.data.articles)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <Seo title={`[ ${searchQuery} ] 的搜尋結果 | Jimmy Lin`} />
      <CategoryContent.Consumer>
        {categoryList => (
          <Template
            isLoading={isLoading}
            categoryList={categoryList}
            introList={introList}
            location={location}
            onOrderChange={getIntroList}
          />
        )}
      </CategoryContent.Consumer>
    </>
  )
}

export default Search
