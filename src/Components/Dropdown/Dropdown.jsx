import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import  './dropdown.css'
const Dropdowns = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container fluid>
        <div className='main'>
          {/* <div className='drop'> */}
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className='btn'>
        View
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>View1</DropdownItem>
        <DropdownItem>View2</DropdownItem>
        <DropdownItem >View3</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
    {/* </div> */}

    {/* <div className='confi-btn'> */}
    <button>Configuration</button>
    {/* </div> */}
    </div>
    </Container>
  );
}

export default Dropdowns;