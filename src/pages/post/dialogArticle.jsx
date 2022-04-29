import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import dayjs from "dayjs"

import { getArticle } from "@Api"
import Seo from "@Components/seo"
import CategoryContent from "@Contents/CategoryContent"
import Article from "@Components/article"
import Intro from "@Components/intro"
import avatar from "@Images/avatar.jpg"

import getCategoryInfo from "@Utils/getCategoryInfo"

import "./dialogArticle.scss"

const DialogArticle = ({ oldLocation, order, location, articleId }) => {
  const [maskDisplayed, setMaskDisplayed] = useState(false)
  const [article, setArticle] = useState({})
  const [prevArticle, setPrevArticle] = useState(null)
  const [nextArticle, setNextArticle] = useState(null)

  useEffect(() => {
    getArticleInfo()
    setMaskDisplayed(false)
  }, [articleId])

  function getArticleInfo() {
    getArticle({ order, id: articleId, getPrev: true, getNext: true })
      .then(res => {
        console.log(res.data)
        setPrevArticle(res.data.prevArticle)
        setArticle(res.data.articles[0])
        setNextArticle(res.data.nextArticle)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const LinkArrow = ({ direction, articleInfo, categoryList }) => {
    const templateCategoryInfo =
      getCategoryInfo(categoryList, articleInfo ? articleInfo.category : "") ||
      {}
    return articleInfo ? (
      <Link
        className="dialog-article__link"
        to={`/post/${articleInfo.id}`}
        state={{
          order,
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
          <Intro
            authImg={avatar}
            articleImg={articleInfo.previewImg}
            category={templateCategoryInfo.name}
            intro={articleInfo.intro}
            emotionIcon={articleInfo.emotionIcon}
            emotionNumber={articleInfo.emotionNumber}
            releaseTime={dayjs(articleInfo.releaseTime).format("YYYY-MM-DD")}
            title={articleInfo.title}
          />
        </div>
      </Link>
    ) : (
      <div className="dialog-article__link--empty" />
    )
  }

  return (
    <>
      <Seo title={`${article.title} - ${article.category} | Jimmy Lin`} />
      <CategoryContent.Consumer>
        {categoryList => (
          <div className="dialog-article" onClick={e => e.stopPropagation()}>
            <LinkArrow
              direction="left"
              articleInfo={prevArticle}
              categoryList={categoryList}
            />

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

            <LinkArrow
              direction="right"
              articleInfo={nextArticle}
              categoryList={categoryList}
            />

            <div
              className={`dialog-article__mask ${
                maskDisplayed && "dialog-article__mask--displayed"
              }`}
            />
          </div>
        )}
      </CategoryContent.Consumer>
    </>
  )
}

export default DialogArticle
