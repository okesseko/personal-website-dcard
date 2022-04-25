import PropTypes from "prop-types"
import React from "react"
import "./intro.scss"

const Intro = ({
  authImg,
  articleImg,
  category,
  intro,
  emotionIcon,
  emotionNumber,
  onClick,
  releaseTime,
  title,
}) => {
  return (
    <article className="intro" onClick={onClick}>
      <div className="intro-article">
        <p className="intro-article__category">
          <img src={authImg} width={16} height={16} />
          {category}・{releaseTime}
        </p>
        <h2 className="intro-article__title">{title}</h2>
        <p className="intro-article__description">{intro}</p>
        <div className="intro-article__emotion">
          <span className="intro-article__emotion-icon">{emotionIcon}</span>
          <span className="intro-article__emotion-number">{emotionNumber}</span>
        </div>
      </div>
      {articleImg && <img className="intro-image" src={articleImg} />}
    </article>
  )
}

Intro.defaultProps = {
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

Intro.propTypes = {
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

export default Intro
