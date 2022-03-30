import React from 'react'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import { CategoryProvide } from "./src/contents/CategoryContent"

import CustomLayout from "./wrapPageElement"

export const wrapPageElement = CustomLayout

export const wrapRootElement = ({ element }) => (
  <CategoryProvide>{element}</CategoryProvide>
)
