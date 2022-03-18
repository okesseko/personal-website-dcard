import React from "react"
import PropTypes from "prop-types"
import "./sidebarItem.scss"

const SidebarItem = ({
  IconComponent,
  iconSize,
  imageUrl,
  selected,
  text,
  type,
}) => {
  function shouldBeRenderedComponentByType() {
    switch (type) {
      case "icon":
        return (
          <div className="sidebarItem-icon">
            <IconComponent size={iconSize} />
          </div>
        )

      case "image":
        return <img className="sidebarItem-image" src={imageUrl} />

      default:
        return null
    }
  }

  return (
    <div className={`sidebarItem ${selected && "sidebarItem--selected"}`}>
      {shouldBeRenderedComponentByType()}
      <p
        className={`sidebarItem-text ${
          type === "title" && "sidebarItem-text--title"
        }`}
      >
        {text}
      </p>
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
  selected: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "image", "title"]),
}

export default SidebarItem
