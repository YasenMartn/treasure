import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [menu, setmenu] = useState(false)

  return (
    <div className='navbar'>

      <div className="mobileMenuBtn" onClick={() => setmenu(!menu)}>
        <div className={"line " + (menu ? "active" : "")}></div>
      </div>

      <div className={"mobileMenu " + (menu ? "active" : "")}>
        <NavLink onClick={() => setmenu(false)} to="/">Home</NavLink>
        <NavLink onClick={() => setmenu(false)} to="/products">Products</NavLink>
        <NavLink onClick={() => setmenu(false)} to="/contact">Contact</NavLink>
        <NavLink onClick={() => setmenu(false)} to="/about">About</NavLink>
      </div>

      <NavLink to="/" className="navbarPart navLeft">
        <img src="/pictures/logot.png" alt="logo" />
      </NavLink>

      <div className="navbarPart navMid">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <NavLink to="/cart" className="navbarPart navRight">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart fontSize='large' className='cartIcon' />
        </Badge>
      </NavLink>
    </div>
  )
}

export default Navbar