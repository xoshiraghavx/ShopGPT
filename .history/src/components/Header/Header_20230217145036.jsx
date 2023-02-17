import Reac, {useRef, useEffect} from 'react';
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

const headerRef = useRef(null)

const menuRef = useRef(null)
const stickyHeaderFunc =()=>{
  window.addEventListener('scroll', ()=>{
    if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('Sticky__header')
    }
    else{
      headerRef.current.classList.remove('Sticky__header')
    }
  })
}
useEffect(()=>{
  stickyHeaderFunc()
  return ()=> window.removeEventListener("scroll", stickyHeaderFunc);
});
const menuToggle =() => menuRef.current.classList,toggle('')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>ShopGPT</h1>
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

              <span className='fav__icon'><i class="ri-heart-line"></i>
              <span className="badge">2</span></span>
              <span className="cart__icon"><i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span></span>

              <span><motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" /></span>
              <div className="mobile__menu">
              <span><i class="ri-menu-line"></i> </span>
             </div>
            </div>
             
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header