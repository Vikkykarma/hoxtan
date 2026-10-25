import React from 'react';
import { Container } from 'react-bootstrap';
import { FiTruck, FiPercent } from 'react-icons/fi';
import { GoVerified } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeadset } from 'react-icons/fa';
import './Topbar.css'; // Import the CSS file for custom styles

function TopBannerBar() {
  return (
    /* 
      - bg-dark: Premium dark charcoal/black layer background code.
      - text-white: Saare texts default me white honge.
      - py-2: Top aur bottom me exact clean padding spacing handle karne ke liye.
    */
    <div
      className='bg-dark text-white py-2 border-bottom border-secondary'
      style={{ fontSize: '12.5px' }}
    >
      <Container fluid className='px-3 px-md-5'>
        {/* 
          HORIZONTAL TRACK SCROLL CONTROLLERS:
          - flex-nowrap: Items ko wrap hokar double line me girne se rokta hai.
          - overflow-x-auto: Screen choti hone par finger touch scroll ya click drag scroll track khol deta hai.
          - gap-4: Har specific tag ya badge data details block ke beech barabar space maintain rakhta hai.
        */}
        <div
          className='d-flex align-items-center justify-content-between flex-nowrap gap-4 custom-topbar-scroll'
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Left Feature Box Group items links */}
          <div className='d-flex align-items-center gap-4 flex-shrink-0'>
            {/* Tag 1: Free & Fast Delivery */}
            <div className='d-flex align-items-center gap-2'>
              <FiTruck size={14} className='text-white-50' />
              <span className='fw-semibold'>Free & Fast Delivery</span>
            </div>

            {/* Tag 2: 100% Verified Jewellery */}
            <div className='d-flex align-items-center gap-2'>
              <GoVerified size={14} className='text-white-50' />
              <span className='fw-semibold'>100% Verified Jewellery</span>
            </div>

            {/* Tag 3: Flexible EMI Plans */}
            <div className='d-flex align-items-center gap-2'>
              <FiPercent size={14} className='text-white-50' />
              <span className='fw-semibold'>Flexible EMI Plans</span>
            </div>
          </div>

          {/* Middle Live Live Data Info: Gold Rates Dashboard Display */}
          <div
            className='d-flex align-items-center gap-2 flex-shrink-0 text-white-50 ms-lg-auto'
            style={{ fontSize: '12px' }}
          >
            <span>Gold rate</span>
            {/* 22K Badge with Gold highlighted price parameters text */}
            <strong className='text-white'>
              22K <span style={{ color: '#c5a059' }}>₹13,550/g</span>
            </strong>
            {/* 24K Badge */}
            <strong className='text-white'>
              24K <span style={{ color: '#c5a059' }}>₹14,550/g</span>
            </strong>
            {/* Image live date tracking timestamps set parameter text lines layout */}
            <span className='ms-1 ps-2 border-start border-secondary small-timestamp'>
              Set 23/10/2026, 11:28 am
            </span>
          </div>

          {/* Right Core Action Help Anchors Links list group tracking boxes */}
          <div className='d-flex align-items-center gap-4 flex-shrink-0'>
            {/* Support Anchor Line button links */}
            <a
              href='#support'
              className='text-decoration-none text-white d-flex align-items-center gap-2 border-start border-secondary ps-4'
            >
              <FaHeadset size={14} />
              <span className='fw-semibold'>Support</span>
            </a>

            {/* Deliver location select selection area trigger parameters block links */}
            <div className='d-flex align-items-center gap-2 cursor-pointer'>
              <SlLocationPin size={14} className='text-white-50' />
              <span>
                Deliver to:{' '}
                <strong style={{ color: '#c5a059' }}>Select location</strong>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBannerBar;
