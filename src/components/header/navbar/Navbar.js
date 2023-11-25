import './Navbar.css';
import Category from './category/Category';
import Logo from './logo/Logo';
import React from 'react';
import Signin from './authentication/Signin';
import AvailableRooms from './available-rooms/AvailableRooms';

function Navbar() {
  return (
    <div className='Navbar'>
      <Logo />
      <Category />
      <AvailableRooms />
      <Signin />
    </div>
  );
}

export default Navbar;
