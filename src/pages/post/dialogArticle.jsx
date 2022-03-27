import { Link } from "gatsby"
import React, { useState } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

import Article from "@Components/article"
import Intro from "@Components/intro"
import imgTest from "@Images/img-test.png"

import "./dialogArticle.scss"

const MOCK_INFO = {
  id: 1,
  authImg: imgTest,
  articleImg: imgTest,
  category: "test",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged.",
  emotionIcon: "🤣🥰🤩",
  emotionNumber: 1,
  releaseTime: "2020/01/01",
  title: "Title",
}

const DialogArticle = ({ oldLocation, location }) => {
  const [maskDisplayed, setMaskDisplayed] = useState(false)

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
    <div className="dialog-article" onClick={e => e.stopPropagation()}>
      <LinkArrow direction="left" articleInfo={MOCK_INFO} />

      <div className="dialog-article__main">
        <Article
          article={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n
   ![image1](https://pic1.zhimg.com/v2-81a06ae54177e4beccf4fd9c20f267a8_b.jpg) ![image2](https://pic1.zhimg.com/v2-81a06ae54177e4beccf4fd9c20f267a8_b.jpg)
  Lorem Ipsum is simply dummy [google link](https://google.com)  Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
  `}
          authImg={imgTest}
          category={{ text: "category", path: "/category" }}
          emotionIcon="🤣🥰🤩"
          emotionNumber={1}
          releaseTime="2020/01/01"
          title="Title"
          topic={[
            { text: "topic1", path: "/topic1" },
            { text: "topic2", path: "/topic2" },
          ]}
        />
      </div>

      <LinkArrow direction="right" articleInfo={MOCK_INFO} />

      <div
        className={`dialog-article__mask ${
          maskDisplayed && "dialog-article__mask--displayed"
        }`}
      />
    </div>
  )
}

export default DialogArticle
