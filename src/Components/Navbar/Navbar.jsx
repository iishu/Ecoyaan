import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [menu, setMenu]=useState('home');
  return (
    <div>
      <nav className='container'>
        <img src={logo} alt="" className="logo"/>
        <ul className='nav-menu'>
          <li><AnchorLink className='anchor-link' href="#home" ><p onClick={()=>setMenu("home")}>Home</p> </AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={()=>setMenu("about")}> About us</p></AnchorLink> </li>
          <li><AnchorLink className='anchor-link' offset={50} href="#moto"><p onClick={()=>setMenu("moto")}>Moto</p></AnchorLink> </li>
          <li><AnchorLink className='anchor-link' offset={50} href="#business"><p onClick={()=>setMenu("business")}>Business </p> </AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}><button className="btn">Contact Us </button></p></AnchorLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar