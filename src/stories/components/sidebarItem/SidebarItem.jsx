import React from "react"
import PropTypes from "prop-types"
import "./sidebarItem.scss"

const SidebarItem = ({ IconComponent, iconSize, imageUrl, text, type }) => {
  return (
    <div className="sidebarItem">
      {type === "icon" ? (
        <div className="sidebarItem-icon">
          <IconComponent size={iconSize} />
        </div>
      ) : (
        <img className="sidebarItem-image" src={imageUrl} />
      )}
      <p className="sidebarItem-text">{text}</p>
    </div>
  )
}

SidebarItem.defaultProps = {
  IconComponent: <></>,
  iconSize: 24,
  imageUrl: "",
  text: "",
  type: "icon",
}

SidebarItem.propTypes = {
  IconComponent: PropTypes.elementType,
  iconSize: PropTypes.number,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "image"]),
}

export default SidebarItem
