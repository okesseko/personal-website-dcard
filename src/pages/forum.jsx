import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"

import Template from "@Components/template"

import "./index.scss"

const Forum = ({ location, category }) => {
  const [introList, setIntroList] = useState([])

  useEffect(() => {
    console.log(category)
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
      isForum
      category={{
        id: "test",
        name: "test",
        image:
          "https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg",
      }}
      introList={introList}
      location={location}
      onOrderChange={getIntroList}
      bannerImg={
        "https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg"
      }
    />
  )
}

export default Forum
