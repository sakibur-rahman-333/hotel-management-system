import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Select({ direction }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='d-flex'>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Category</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to='/'>All rooms</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/all-time-service'>All Time Service</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/internet-service'>Internet Service</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/swimming-pool'>Swimming Pool</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Select;
