import React from 'react'
import "./Header.css"
import rasm from "./logo.svg"
import searchIcon from "./search.svg"
import uzIcon from "./UZ.svg"
import downIcon from "./down.svg"
import personIcon from "./person.svg"

const Header = () => {
  return (
    <div>
        <nav>
            <img src={rasm} alt="" />
            <div className='navbar'>
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>News</p>
            <p>Contact us</p>
            <img className='icons' src={searchIcon} alt="" />
            <img className='icons' src={uzIcon} alt="" />
            <img className='icons' src={downIcon} alt="" />
            <img className='icons' src={personIcon} alt="" />
            </div>
        </nav>
    </div>
  )
}

export default Header