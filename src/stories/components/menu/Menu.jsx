import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { BsCheck2 } from "react-icons/bs"
import "./menu.scss"

const Menu = ({ triangleRight, selectedItem, items, onClick, closeMenu }) => {
  const [closeAnim, setCloseAnim] = useState(false)

  useEffect(() => {
    if (document) {
      document.addEventListener(
        "click",
        () => {
          setCloseAnim(true)
          setTimeout(closeMenu, 200)
        },
        { once: true }
      )
    }
  }, [])

  return (
    <div
      className={`menu ${closeAnim && "menu--close"}`}
      style={{ "--menu-triangle-right": triangleRight }}
    >
      <ul className="menu-list">
        {items.map(item => (
          <li
            key={item.value}
            className={`menu-list__item ${
              item.value === selectedItem && "menu-list__item--selected"
            }`}
            onClick={() => {
              onClick(item.value)
            }}
          >
            {item.text}
            {item.value === selectedItem && <BsCheck2 size={18} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

Menu.defaultProps = {
  triangleRight: "0.625rem",
  selectedItem: "",
  items: [],
  onClick: () => {},
  closeMenu: () => {},
}

Menu.propTypes = {
  triangleRight: PropTypes.string,
  selectedItem: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
  closeMenu: PropTypes.func,
}

export default Menu
