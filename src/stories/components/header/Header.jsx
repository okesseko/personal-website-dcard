import React, { useState } from "react"
import {
  AiFillCloseCircle,
  AiOutlineSearch,
  AiFillGithub,
} from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

import logo from "../../../images/logo.svg"
import PropTypes from "prop-types"
import "./header.scss"

const Header = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState("")

  return (
    <header className="header">
      <img height={28} src={logo} />
      <form className="header-searchbar">
        <input
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        {inputValue && (
          <button
            type="button"
            className="header-searchbar__clean"
            onClick={() => setInputValue("")}
          >
            <AiFillCloseCircle size={14} />
          </button>
        )}
        <button
          type="button"
          className="header-searchbar__search"
          onClick={() => onSearch(inputValue)}
        >
          <AiOutlineSearch size={20} />
        </button>
      </form>
      <ul className="header-icon-group">
        <li>
          <a target="_blank" href="https://github.com/okesseko">
            <AiFillGithub size={22} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yung-chen-lin-jimmy/"
          >
            <FaLinkedin size={22} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=okesseko@gmail.com&su=Hi Jimmy, I am xxx&body=I am interesting about you🙌"
          >
            <IoMdMail size={22} />
          </a>
        </li>
      </ul>
    </header>
  )
}

Header.defaultProps = {
  placeholder: "",
  onSearch: () => {},
}

Header.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
}

export default Header
