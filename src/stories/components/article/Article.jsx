import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"

import Dialog from "@Components/dialog"
import "./article.scss"

// difference between IMAGE_REGEX_ALL and IMAGE_REGEX in $1 variable
// IMAGE_REGEX_ALL = (!()[]) = ($1)
// IMAGE_REGEX = !($1)[$2]
const IMAGE_REGEX_ALL =
  /(!\[[\w\u2E80-\u9FFF]*\]\(https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.-]*]?[\?-\S*]?[#-\S*]?\))/gm
const IMAGE_REGEX =
  /!\[([\w\u2E80-\u9FFF]*)\]\((https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.-]*]?[\?-\S*]?[#-\S*]?)\)/gm
const LINK_REGEX_ALL =
  /(\[[\w\u2E80-\u9FFF]*\]\(https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.-]*]?[\?-\S*]?[#-\S*]?\))/gm
const LINK_REGEX =
  /\[([\w\u2E80-\u9FFF]*)\]\((https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.-]*]?[\?-\S*]?[#-\S*]?)\)/gm

const Article = ({
  article,
  authImg,
  category,
  emotionIcon,
  emotionNumber,
  onClick,
  releaseTime,
  title,
  topic,
}) => {
  const [enlargedImageUrl, setEnlargedImageUrl] = useState("")

  const convertArticleToComponent = article => {
    const splitedArticle = splitArticle(article)

    return splitedArticle.map((article, index) => {
      if (article.match(IMAGE_REGEX)) {
        const [text, url] = article.replace(IMAGE_REGEX, "$1,$2").split(",")
        return (
          <div
            key={index}
            className="article-article__description-image"
            onClick={() => enlargeImage(url)}
          >
            <img alt={text || ""} src={url} />
          </div>
        )
      } else if (article.match(LINK_REGEX)) {
        const [text, url] = article.replace(LINK_REGEX, "$1,$2").split(",")
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            className="article-article__description-link"
          >
            {text}
          </a>
        )
      }
      return (
        <span
          className="article-article__description-text"
          key={index}
        >{`${article}`}</span>
      )
    })
  }

  const splitArticle = article =>
    article
      .split(new RegExp(IMAGE_REGEX_ALL.source + "|" + LINK_REGEX_ALL.source))
      .filter(e => e)

  const enlargeImage = url => {
    setEnlargedImageUrl(url)
  }

  return (
    <>
      <article className="article">
        <div className="article-auth">
          <img
            className="article-auth__img"
            width={32}
            height={32}
            src={authImg}
          />
          <div className="article-auth__info">
            <b>Jimmy Lin</b>
            <span>@okesseko</span>
          </div>
          {onClick && (
            <IoMdClose onClick={onClick} size={24} color="rgb(196, 196, 196)" />
          )}
        </div>
        <div className="article-article">
          <h2 className="article-article__title">{title}</h2>
          <div className="article-article__category">
            <Link to={category.path}>{category.text}</Link>・{releaseTime}
          </div>
          <div className="article-article__description">
            {convertArticleToComponent(article)}
          </div>
        </div>
        <div className="article-topic">
          {topic.map(({ text, path }) => (
            <Link key={path} className="article-topic__item" to={path}>
              {text}
            </Link>
          ))}
        </div>
        <div className="article-emotion">
          <span className="article-emotion-icon">{emotionIcon}</span>
          <span className="article-emotion-number">{emotionNumber}</span>
        </div>
      </article>
      {enlargedImageUrl && (
        <Dialog
          onClose={() => setEnlargedImageUrl("")}
          insertDomTree={document.body}
        >
          <img className="enlarge-image" src={enlargedImageUrl} />
        </Dialog>
      )}
    </>
  )
}

Article.defaultProps = {
  article: "",
  authImg: "",
  category: {
    text: "",
    path: "",
  },
  emotionIcon: "",
  emotionNumber: 1,
  releaseTime: "",
  title: "",
  topic: [],
}

Article.propTypes = {
  article: PropTypes.string,
  authImg: PropTypes.string,
  category: PropTypes.shape({
    text: PropTypes.string,
    path: PropTypes.string,
  }),
  emotionIcon: PropTypes.string,
  emotionNumber: PropTypes.number,
  onClick: PropTypes.func,
  releaseTime: PropTypes.string,
  title: PropTypes.string,
  topic: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      path: PropTypes.string,
    })
  ),
}

export default Article
