import axios from "axios"

const defaultRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:9000"
      : process.env.GATSBY_API_URL,
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
