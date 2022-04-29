import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"

import Seo from "@Components/seo"

import CategoryContent from "@Contents/CategoryContent"

import Template from "@Components/template"

import "./index.scss"

const App = ({ location }) => {
  const [introList, setIntroList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getIntroList()
  }, [])

  function getIntroList(order = "desc") {
    setIsLoading(true)

    getArticle({ order })
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
      <Seo title={`Jimmy Lin`} />
      <CategoryContent.Consumer>
        {categoryList => (
          <Template
            isOpenModalRouter
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

export default App
