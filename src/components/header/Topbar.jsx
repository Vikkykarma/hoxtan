import React from 'react';
import { Container } from 'react-bootstrap';
import { FiTruck, FiPercent } from 'react-icons/fi';
import { GoVerified } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeadset } from 'react-icons/fa';
import './Topbar.css';

function TopBannerBar() {
  return (
    <div
      className='bg-dark text-white py-2 border-bottom border-secondary'
      style={{ fontSize: '12.5px' }}
    >
      <Container fluid className='px-3 px-md-5'>
        <div
          className='d-flex align-items-center justify-content-between flex-nowrap gap-4 custom-topbar-scroll'
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            whiteSpace: 'nowrap',
          }}
        >
          <div className='d-flex align-items-center gap-4 flex-shrink-0'>
            <div className='d-flex align-items-center gap-2'>
              <FiTruck size={14} className='text-white-50' />
              <span className='fw-semibold'>Free & Fast Delivery</span>
            </div>

            <div className='d-flex align-items-center gap-2'>
              <GoVerified size={14} className='text-white-50' />
              <span className='fw-semibold'>100% Verified Jewellery</span>
            </div>

            <div className='d-flex align-items-center gap-2'>
              <FiPercent size={14} className='text-white-50' />
              <span className='fw-semibold'>Flexible EMI Plans</span>
            </div>
          </div>

          <div
            className='d-flex align-items-center gap-2 flex-shrink-0 text-white-50 ms-lg-auto'
            style={{ fontSize: '12px' }}
          >
            <span>Gold rate</span>
            <strong className='text-white'>
              22K <span style={{ color: '#c5a059' }}>₹13,550/g</span>
            </strong>
            <strong className='text-white'>
              24K <span style={{ color: '#c5a059' }}>₹14,550/g</span>
            </strong>
            <span className='ms-1 ps-2 border-start border-secondary small-timestamp'>
              Set 23/10/2026, 11:28 am
            </span>
          </div>

          <div className='d-flex align-items-center gap-4 flex-shrink-0'>
            <a
              href='#support'
              className='text-decoration-none text-white d-flex align-items-center gap-2 border-start border-secondary ps-4'
            >
              <FaHeadset size={14} />
              <span className='fw-semibold'>Support</span>
            </a>

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
