import PropTypes from "prop-types"
import React from "react"

import SidebarItem from "@Components/sidebarItem"
import "./sidebar.scss"

const Sidebar = ({ fixedItems, topicItems, onClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__fixed">
        {fixedItems.map(item => (
          <SidebarItem key={item.value} onClick={onClick} {...item} />
        ))}
      </div>
      <div className="sidebar__topic">
        {topicItems.map(item => (
          <SidebarItem key={item.value} onClick={onClick} {...item} />
        ))}
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  fixedItems: [],
  topicItems: [],
  onClick: () => {},
}

Sidebar.propTypes = {
  fixedItems: PropTypes.arrayOf(PropTypes.shape(SidebarItem.propTypes)),
  topicItems: PropTypes.arrayOf(PropTypes.shape(SidebarItem.propTypes)),
  onClick: PropTypes.func,
}

export default Sidebar
