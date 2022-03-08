import React from "react"
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai"
import logo from "../../../images/logo.svg"
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <img height={28} src={logo} />
      <form className="header-searchbar">
        <input />
        <button className="header-searchbar__clean">
          <AiFillCloseCircle size={14} />
        </button>
        <button className="header-searchbar__search">
          <AiOutlineSearch size={20} />
        </button>
      </form>
    </header>
  )
}

export default Header
