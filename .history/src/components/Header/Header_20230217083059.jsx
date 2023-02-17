import React from 'react';
import './header.css'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'
import {Container, Row} from "reactstrap";
import userIcon from '../../assets/images/user-icon.png'

const nav__link = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {
                  nav__link.map((item, index)=>(
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : ''}>{item.display }</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__icons">

              <span><i class="ri-heart-line"></i></span>
              <span className="cart__icon"><i class="ri-shopping-bag-line"></i></span>

              <span><motion.img whileTap={{}} src={userIcon} alt="" /></span>
            </div>
             <div className="mobile__menu">
              <span><i class="ri-menu-line"></i> </span>
             </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header