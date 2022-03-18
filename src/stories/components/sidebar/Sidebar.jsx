import React from "react"
import PropTypes from "prop-types"
import SidebarItem from "../sidebarItem/SidebarItem"
import "./sidebar.scss"

const Sidebar = ({ fixedItems, topicItems }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__fixed">
        {fixedItems.map(item => (
          <SidebarItem key={item.text} {...item} />
        ))}
      </div>
      <div className="sidebar__topic">
        {topicItems.map(item => (
          <SidebarItem key={item.text} {...item} />
        ))}
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  fixedItems: [],
  topicItems: [],
}

Sidebar.propTypes = {
  fixedItems: PropTypes.arrayOf(PropTypes.shape(SidebarItem.propTypes)),
  topicItems: PropTypes.arrayOf(PropTypes.shape(SidebarItem.propTypes)),
}

export default Sidebar
