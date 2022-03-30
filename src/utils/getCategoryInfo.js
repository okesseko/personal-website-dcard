const getCategoryInfo = (categoryList, targetValue) => {
  return categoryList.find(category => category.value === targetValue)
}

export default getCategoryInfo
