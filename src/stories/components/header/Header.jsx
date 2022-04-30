import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  AiFillCloseCircle,
  AiFillGithub,
  AiOutlineSearch,
} from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

import logo from "@Images/logo.png"

import getQuery from "@Utils/getQuery"

import "./header.scss"

const Header = ({ placeholder, onSearch }) => {
  const location = useLocation()
  const [inputValue, setInputValue] = useState(() => getQuery(location))

  return (
    <header className="header-wrapper">
      <div className="header">
        <Link to="/">
          <img height={28} src={logo} />
        </Link>
        <form
          className="header-searchbar"
          onSubmit={e => {
            e.preventDefault()
            onSearch(inputValue)
          }}
        >
          <input
            placeholder={placeholder}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          {inputValue && (
            <div
              key="clear"
              type="cancel"
              className="header-searchbar__clean"
              onClick={() => setInputValue("")}
            >
              <AiFillCloseCircle size={14} />
            </div>
          )}
          <button type="submit" className="header-searchbar__search">
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
      </div>
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
