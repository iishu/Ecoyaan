import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <img src={logo} alt="" className="logo"/>
        <ul>
          <li>Home </li>
          <li> About us </li>
          <li>Sell on ecoyaan </li>
          <li><buttonc className="btn">Contact us</buttonc> </li>
          <li>Terma of services </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar