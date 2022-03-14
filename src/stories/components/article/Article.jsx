import React, { useState } from "react"
import PropTypes from "prop-types"
import { IoMdClose } from "react-icons/io"
import { Link } from "gatsby"
import Dialog from "../dialog/Dialog"

import imgTest from "../../../images/img-test.png"

import "./article.scss"

const IMAGE_REGEX_ALL =
  /(!\[[\w\u2E80-\u9FFF]*\]\(https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.]*]?[\?\S*]?[#\S*]?\))/gm
const IMAGE_REGEX =
  /!\[([\w\u2E80-\u9FFF]*)\]\((https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.]*]?[\?\S*]?[#\S*]?)\)/gm
const LINK_REGEX_ALL =
  /(\[[\w\u2E80-\u9FFF]*\]\(https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.]*]?[\?\S*]?[#\S*]?\))/gm
const LINK_REGEX =
  /\[([\w\u2E80-\u9FFF]*)\]\((https?:\/\/[\w-\.]+[:\d+]?[\/[~\w\/\.]*]?[\?\S*]?[#\S*]?)\)/gm

const Article = ({
  authImg,
  articleImg,
  category,
  description,
  emotionIcon,
  emotionNumber,
  onClick,
  releaseTime,
  title,
}) => {
  const [enlargedImageUrl, setEnlargedImageUrl] = useState("")

  const enlargeImage = url => {
    setEnlargedImageUrl(url)
  }

  const splitArticle = article => {
    var parts = article.split(
      new RegExp(IMAGE_REGEX_ALL.source + "|" + LINK_REGEX_ALL.source)
    )
    // for (var i = 1; i < parts.length; i += 2) {
    //   parts[i] = (
    //     <div
    //       className="article-article__description-image"
    //       onClick={() => enlargeImage(url)}
    //     >
    //       <img alt={text || ""} src={url} />
    //     </div>
    //   )
    // }
    // for (var i = 1; i < parts.length; i += 2) {
    //   parts[i] = (
    //     <span className="match" key={i}>
    //       {parts[i]}
    //     </span>
    //   )
    // }
    console.log(parts)

    return article.replace(IMAGE_REGEX, (_, text, url) => (
      <div
        className="article-article__description-image"
        onClick={() => enlargeImage(url)}
      >
        <img alt={text || ""} src={url} />
      </div>
    ))
  }

  const replaceArticleLink = article =>
    article.replace(LINK_REGEX, (_, text, url) => (
      <a
        href={url}
        target="_blank"
        className="article-article__description-link"
      >
        {text}
      </a>
    ))
  const convertArticleToComponent = article => {
    splitArticle(article)
    // const convertImage = replaceArticleImage(article)
    // return replaceArticleLink(convertImage)
  }

  return (
    <>
      <article className="article" onClick={onClick}>
        <div className="article-auth">
          <img
            className="article-auth__img"
            width={32}
            height={32}
            src={imgTest}
          />
          <div className="article-auth__info">
            <b>Jimmy Lin</b>
            <span>@okesseko</span>
          </div>
          <IoMdClose size={24} color="rgb(196, 196, 196)" />
        </div>
        <div className="article-article">
          <h2 className="article-article__title">
            那天在捷運站外擄了一個男朋友（2）
          </h2>
          <p className="article-article__category">
            
            <Link>{category}</Link>・{releaseTime}
          </p>
          <p className="article-article__description">
            {convertArticleToComponent(
              `Lorem Ipsum is simply dummy text of the printing and typesetting \nindustry. Lorem Ipsum has been the industry's standard dummy text \n ![](https://imgur.dcard.tw/Kzv3OGuh.jpg)![test1](https://imgur.dcard.tw/WEBJmIIh.jpg)\n[ojvasdsdasda]](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ext of the printing and typesetting \nindustry. Lorem Ipsum has been the industry's standard dummy text \n`
            )}
            {/* <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
            <div
              className="article-article__description-image"
              onClick={() => enlargeImage(imgTest)}
            >
              <img src={imgTest} />
            </div>
            <a className="article-article__description-link">tsetest</a> */}
          </p>
        </div>
        <div className="article-topic">
          <button className="article-topic__item">捷運</button>
          <button className="article-topic__item">捷運</button>
          <button className="article-topic__item">捷運</button>
        </div>
        <div className="article-emotion">
          <span className="article-emotion-icon">{emotionIcon}</span>
          <span className="article-emotion-number">{emotionNumber}</span>
        </div>
      </article>
      {enlargedImageUrl && (
        <Dialog onClose={() => setEnlargedImageUrl("")}>
          <img className="enlarge-image" src={enlargedImageUrl} />
        </Dialog>
      )}
    </>
  )
}

Article.defaultProps = {
  authImg: "",
  articleImg: "",
  category: "",
  description: "",
  emotionIcon: "",
  emotionNumber: 1,
  onClick: () => {},
  releaseTime: "",
  title: "",
}

Article.propTypes = {
  authImg: PropTypes.string,
  articleImg: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  emotionIcon: PropTypes.string,
  emotionNumber: PropTypes.number,
  onClick: PropTypes.func,
  releaseTime: PropTypes.string,
  title: PropTypes.string,
}

export default Article
