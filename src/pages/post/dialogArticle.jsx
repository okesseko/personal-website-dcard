import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

import { getArticle } from "@Api"
import Seo from "@Components/seo"
import Article from "@Components/article"
import Intro from "@Components/intro"
import avatar from "@Images/avatar.jpg"

import "./dialogArticle.scss"

const MOCK_INFO = {
  id: 2,
  authImg: avatar,
  articleImg: avatar,
  category: "test",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged.",
  emotionIcon: "🤣🥰🤩",
  emotionNumber: 1,
  releaseTime: "2020/01/01",
  title: "Title",
}

const DialogArticle = ({ oldLocation, location, articleId, ...props }) => {
  const [maskDisplayed, setMaskDisplayed] = useState(false)
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

  const LinkArrow = ({ direction, articleInfo }) => {
    return (
      <Link
        className="dialog-article__link"
        to={`/post/${articleInfo.id}`}
        state={{
          oldLocation: JSON.parse(JSON.stringify(oldLocation || location)),
        }}
        onMouseEnter={() => setMaskDisplayed(true)}
        onMouseLeave={() => setMaskDisplayed(false)}
      >
        {direction === "left" ? (
          <HiOutlineChevronLeft size={80} color="white" />
        ) : (
          <HiOutlineChevronRight size={80} color="white" />
        )}
        <div
          className={`dialog-article__link-intro dialog-article__link-intro--${direction}`}
        >
          <Intro {...articleInfo} />
        </div>
      </Link>
    )
  }

  return (
    <>
      <Seo title={`${article.title} - ${article.category} |Jimmy Lin`} />
      <div className="dialog-article" onClick={e => e.stopPropagation()}>
        <LinkArrow direction="left" articleInfo={MOCK_INFO} />

        <div className="dialog-article__main">
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
            onClick={() => navigate("/")}
          />
        </div>

        <LinkArrow direction="right" articleInfo={MOCK_INFO} />

        <div
          className={`dialog-article__mask ${
            maskDisplayed && "dialog-article__mask--displayed"
          }`}
        />
      </div>
    </>
  )
}

export default DialogArticle
