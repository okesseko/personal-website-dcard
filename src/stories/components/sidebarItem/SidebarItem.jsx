import { Link, Match } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"

import "./sidebarItem.scss"

const SidebarItem = ({
  IconComponent,
  iconSize,
  imageUrl,
  onClick,
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
    <Match path={value}>
      {props =>
        type === "title" ? (
          <div className="sidebarItem">
            <p className="sidebarItem-text sidebarItem-text--title">{text}</p>
          </div>
        ) : (
          <Link to={value}>
            <div
              className={`sidebarItem "sidebarItem--link" ${
                props.match && "sidebarItem--selected"
              }`}
              onClick={() => onClick(value)}
            >
              {shouldBeRenderedComponentByType()}
              <p className="sidebarItem-text">{text}</p>
            </div>
          </Link>
        )
      }
    </Match>
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
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "image", "title"]),
  value: PropTypes.string,
}

export default SidebarItem
