const getQuery = location => {
  if (!location) return ""
  return location.search.replace("?query=", "")
}

export default getQuery
