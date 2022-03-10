import React from "react"
import PropTypes from "prop-types"
import "./sidebarItem.scss"

const SidebarItem = ({ IconComponent, iconSize, text }) => {
  return (
    <div className="sidebarItem">
      <div className="sidebarItem-icon">
        <IconComponent size={iconSize} />
      </div>
      <p className="sidebarItem-text">{text}</p>
    </div>
  )
}

SidebarItem.defaultProps = {
  IconComponent: <></>,
  iconSize: 24,
  text: "",
}

SidebarItem.propTypes = {
  IconComponent: PropTypes.elementType,
  iconSize: PropTypes.number,
  text: PropTypes.string,
}

export default SidebarItem
