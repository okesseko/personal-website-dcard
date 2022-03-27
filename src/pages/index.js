import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"

import Template from "@Components/template"

import "./index.scss"

const App = ({ location }) => {
  const [introList, setIntroList] = useState([])

  useEffect(() => {
    getIntroList()
  }, [])

  function getIntroList(order = "desc") {
    getArticle({ order })
      .then(res => {
        setIntroList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Template
      introList={introList}
      location={location}
      onOrderChange={getIntroList}
    />
  )
}

export default App
