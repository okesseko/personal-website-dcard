import React, { useEffect, useState } from "react"
import { getCategory } from "@Api"

const CategoryContent = React.createContext([])

const CategoryProvide = ({ children }) => {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    getCategory()
      .then(res => setCategoryList(res.data.categories))
      .catch(err => console.error(err))
  }, [])

  return (
    <CategoryContent.Provider value={categoryList}>
      {children}
    </CategoryContent.Provider>
  )
}

export default CategoryContent

export { CategoryProvide }
