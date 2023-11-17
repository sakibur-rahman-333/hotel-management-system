import './Navbar.css';
import Category from './category/Category';
import Logo from './logo/Logo';
import React from 'react';
import Signin from './authentication/Signin';

function Navbar() {
  return (
    <div className='Navbar'>
      <Logo />
      <Category />
      <Signin />
    </div>
  );
}

export default Navbar;
