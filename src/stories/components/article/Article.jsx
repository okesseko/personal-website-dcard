import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Parser from "html-react-parser"

import Dialog from "@Components/dialog"
import "./article.scss"
import dayjs from "dayjs"

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

  useEffect(() => {
    // add image click event to img element
    if (document) {
      const images = document.querySelectorAll(
        ".article-article__description img"
      )
      images.forEach(element =>
        element.addEventListener("click", () => enlargeImage(element.src))
      )
    }
  }, [article])

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
            <div onClick={onClick} className="article-auth__info-close">
              <IoMdClose size={24} color="rgb(196, 196, 196)" />
            </div>
          )}
        </div>
        <div className="article-article">
          <h2 className="article-article__title">{title}</h2>
          <div className="article-article__category">
            <Link to={category.path}>{category.text}</Link>・
            {dayjs(releaseTime).format("YYYY-MM-DD")}
          </div>
          <div className="article-article__description">{Parser(article)}</div>
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
