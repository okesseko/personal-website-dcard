import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import "./dialog.scss"

const Dialog = ({ children, dialogStyle, onClose, insertDomTree }) => {
  useEffect(() => {
    if (document) document.body.style.overflow = "hidden"
    return () => {
      if (document) document.body.style.overflow = null
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="dialog" style={dialogStyle} onClick={onClose}>
      {children}
    </div>,
    insertDomTree
  )
}

Dialog.defaultProps = {
  children: null,
  dialogStyle: {},
  onClose: () => {},
}

Dialog.propTypes = {
  children: PropTypes.element,
  dialogStyle: PropTypes.object,
  onClose: PropTypes.func,
  insertDomTree: PropTypes.element,
}

export default Dialog
