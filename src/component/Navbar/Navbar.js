import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../resoureces/img/logo.png'

import './Navbar.scss'

const Navbar = () => {
 

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
