import PropTypes from "prop-types"
import React from "react"
import "./button.scss"

const Button = ({ color, text, disable, onClick }) => {
  return (
    <button
      className={`button button--${color}`}
      disabled={disable}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "primary",
  disable: false,
  text: "",
  onClick: () => {},
}

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "transparent"]),
  disable: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
