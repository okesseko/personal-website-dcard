import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"

import Seo from "@Components/seo"

import CategoryContent from "@Contents/CategoryContent"

import Template from "@Components/template"

import getCategoryInfo from "@Utils/getCategoryInfo"

import "../index.scss"

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
     <CategoryContent.Consumer>
       {categoryList => {
         const templateCategoryInfo =
           getCategoryInfo(categoryList, category) || {}

         return (
           <div>
             <Seo title={`${templateCategoryInfo.name} | Jimmy Lin`} />
             <Template
               isForum
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
