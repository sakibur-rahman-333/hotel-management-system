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
            <Link to='/'>Sample One</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/sample-two'>Sample Two</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/sample-three'>Sample Three</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/sample-four'>Sample Four</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Select;
