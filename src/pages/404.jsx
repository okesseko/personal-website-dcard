import { navigate } from "gatsby"
import React from "react"

import Button from "@Components/button"
import Seo from "@Components/seo"
import notFund from "@Images/notFound.webp"

import "./404.scss"

const NotFoundPage = () => {
  return (
    <div className="not-found-wrapper">
      <Seo title="404: Not Found" />
      <img width={280} height={160} src={notFund}></img>
      <span className="not-found-wrapper__information">沒有這個頁面</span>
      <Button
        color="primary"
        text="回首頁"
        onClick={() => navigate("/", { replace: true })}
      />
    </div>
  )
}

export default NotFoundPage
