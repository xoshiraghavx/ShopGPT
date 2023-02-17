import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import shop from '../pages/shop'
import cart from '../pages/cart'
import ProductDetails from '../pages/ProductDetails'
import checkout from '../pages/checkout'
import login from '../pages/login'
import signup from '../pages/signup'
const routers = () => {
  return <Routes>
    <Route path='home' element /> 
  </Routes>
}

export default routers