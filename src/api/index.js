import axios from "axios"

const defaultRequest = axios.create({
  baseURL: process.env.GATSBY_API_URL || "http://localhost:9000",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

// article
const getArticle = params =>
  defaultRequest({
    params,
    method: "get",
    url: "/article",
  })

// category
const getCategory = params =>
  defaultRequest({
    params,
    method: "get",
    url: "/category",
  })

export { getArticle, getCategory }
