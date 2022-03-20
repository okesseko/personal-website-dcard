import React from "react"
import PropTypes from "prop-types"
import "./sidebarItem.scss"

const SidebarItem = ({
  IconComponent,
  iconSize,
  imageUrl,
  onClick,
  selected,
  text,
  type,
  value,
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
    <div
      className={`sidebarItem ${selected && "sidebarItem--selected"}`}
      onClick={() => {
        if (type !== "title") onClick(value)
      }}
    >
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
  iconSize: 24,
  imageUrl: "",
  onClick: () => {},
  text: "",
  type: "icon",
  value: "",
}

SidebarItem.propTypes = {
  IconComponent: PropTypes.elementType,
  iconSize: PropTypes.number,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "image", "title"]),
  value: PropTypes.string,
}

export default SidebarItem
