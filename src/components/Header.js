import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from "react-redux";
import "../Styles/Header.css";

const Header = () => {
  const state = useSelector((state)=>state.addItem)
  return (
    <header>
      <div className="logo">
       
      <Link to="/" className='snacks'>Food Fun</Link>
     
      <i class="fa fa-cutlery" aria-hidden="true"></i>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menulist">MenuList</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className='no-border'>
          <Link to='/cart'> <strong><i class="fa fa-shopping-cart" aria-hidden="true"></i><span className='cart-no'>{state.length}</span></strong></Link>
           </li>
           </ul>
      </nav>
    </header>
    )
  }
export default Header;



