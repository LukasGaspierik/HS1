import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'><h1>HYPESTORE</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/shoes' activeStyle>Shoes</NavLink>
          <NavLink to='/clothing' activeStyle>Clothing</NavLink>
          <NavLink to='/accessories' activeStyle>Accessories</NavLink>
          <NavLink to='/signup' activeStyle>Sign up</NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='/'>Add Product</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;