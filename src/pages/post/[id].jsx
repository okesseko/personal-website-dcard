import React, { useEffect, useState } from "react"

import { getArticle } from "@Api"
import Seo from "@Components/seo"
import Article from "@Components/article"
import avatar from "@Images/avatar.jpg"

const ArticlePost = ({ articleId }) => {
  const [article, setArticle] = useState({})

  useEffect(() => {
    getArticleInfo()
  }, [articleId])

  function getArticleInfo() {
    getArticle({ id: articleId })
      .then(res => {
        setArticle(res.data.articles[0])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Seo title={`${article.title} - ${article.category} | Jimmy Lin`} />
      <Article
        article={article.content}
        authImg={avatar}
        category={{
          text: article.category,
          path: `/forum/${article.category}`,
        }}
        emotionIcon={article.emotionIcon}
        emotionNumber={article.emotionNumber}
        releaseTime={article.releaseTime}
        title={article.title}
      />
    </>
  )
}

export default ArticlePost
