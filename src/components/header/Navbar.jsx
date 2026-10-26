import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiMenu, FiHeart } from 'react-icons/fi';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { IoBagOutline } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import DropdownBox from '../DropdownBox';

function NavbarBox({ onToggleSidebar }) {
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  return (
    <Navbar
      expand='lg'
      className='bg-white py-3 border-bottom sticky-top height-62px'
      style={{ height: '62px', zIndex: 1000 }}
    >
      <Container
        fluid
        className='px-3 px-md-5 d-flex align-items-center justify-content-between'
      >
        <Navbar.Brand
          href='#home'
          className='d-flex flex-column align-items-center text-decoration-none me-0'
        >
          <span
            className='fw-bold text-dark lh-1'
            style={{
              fontFamily: 'serif',
              fontSize: '24px',
              letterSpacing: '2px',
            }}
          >
            HOXTAN
          </span>
          <small
            className='fw-semibold'
            style={{ fontSize: '9px', letterSpacing: '3px', color: '#c5a059' }}
          >
            JEWELLERY
          </small>
        </Navbar.Brand>

        <Navbar.Collapse
          id='basic-navbar-nav'
          className='d-none d-lg-flex justify-content-center flex-grow-1'
        >
          <Nav className='gap-4'>
            <Nav.Link
              href='/'
              className='text-dark fw-medium fs-6 p-1 border-bottom border-warning'
            >
              Home
            </Nav.Link>
            <div
              className='position-static'
              onMouseEnter={() => setIsDropdownHovered(true)}
              onMouseLeave={() => setIsDropdownHovered(false)}
            >
              <Nav.Link
                href='#jewellery'
                className='text-secondary fw-medium fs-6 p-1 d-flex align-items-center'
              >
                Jewellery <GoChevronDown className='ms-1' size={16} />
              </Nav.Link>
              {isDropdownHovered && <DropdownBox />}
            </div>
            <Nav.Link href='#emi' className='text-secondary fw-medium fs-6 p-1'>
              EMI
            </Nav.Link>
            <Nav.Link
              href='#exchange'
              className='text-secondary fw-medium fs-6 p-1'
            >
              Old Gold Exchange
            </Nav.Link>
            <Nav.Link
              href='#sell'
              className='text-secondary fw-medium fs-6 p-1'
            >
              Sell Old Gold
            </Nav.Link>
            <Nav.Link
              href='#stores'
              className='text-secondary fw-medium fs-6 p-1'
            >
              Stores
            </Nav.Link>
            <Nav.Link
              href='#offers'
              className='text-secondary fw-medium fs-6 p-1'
            >
              Offers
            </Nav.Link>
            <Nav.Link
              href='#track'
              className='text-secondary fw-medium fs-6 p-1'
            >
              Track Order
            </Nav.Link>
            <Nav.Link
              href='#support'
              className='text-secondary fw-medium fs-6 p-1'
            >
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className='d-flex align-items-center gap-3'>
          <Nav.Link href='#stores' className='d-none d-sm-block text-dark p-0'>
            <HiOutlineBuildingStorefront size={22} />
          </Nav.Link>
          <Nav.Link href='#wishlist' className='text-dark p-0'>
            <FiHeart size={21} />
          </Nav.Link>
          <Nav.Link href='#cart' className='text-dark p-0'>
            <IoBagOutline size={21} />
          </Nav.Link>
          <Nav.Link href='#profile' className='d-none d-sm-block text-dark p-0'>
            <FaUser size={22} />
          </Nav.Link>

          <button
            className='d-lg-none border-0 bg-transparent p-0 ms-2'
            onClick={onToggleSidebar}
          >
            <FiMenu size={26} color='#1A2B49' />
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarBox;
