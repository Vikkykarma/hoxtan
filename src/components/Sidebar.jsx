import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import {
  FiX,
  FiHome,
  FiGrid,
  FiClock,
  FiMail,
  FiPhoneCall,
} from 'react-icons/fi';
import { IoBagOutline, IoDiamondOutline } from 'react-icons/io5';
import { LuCreditCard } from 'react-icons/lu';
import { BiRefresh } from 'react-icons/bi';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { FaHeadset, FaUser } from 'react-icons/fa';

function Sidebar({ isOpen, onClose }) {
  return (
    <Offcanvas
      show={isOpen}
      onHide={onClose}
      placement='end'
      onEscapeKeyDown={onClose}
      backdrop={true}
      style={{ backgroundColor: '#FAFAFA', width: '320px' }}
    >
      {/* Sidebar Close Header */}
      <Offcanvas.Header className='px-4 pt-4 pb-2 d-flex justify-content-between align-items-center'>
        <div className='d-flex flex-column align-items-center'>
          <span
            className='fw-bold text-dark lh-1'
            style={{
              fontFamily: 'serif',
              fontSize: '22px',
              letterSpacing: '2px',
            }}
          >
            HOXTAN
          </span>
          <small
            className='fw-semibold'
            style={{ fontSize: '8px', letterSpacing: '3px', color: '#c5a059' }}
          >
            JEWELLERY
          </small>
        </div>
        <button
          className='border-0 bg-transparent p-0 text-dark'
          onClick={onClose}
        >
          <FiX size={24} />
        </button>
      </Offcanvas.Header>

      {/* Sidebar Content Links List */}
      <Offcanvas.Body className='px-3 pt-2 d-flex flex-column justify-content-between h-100'>
        <div>
          {/* User Status Profile Card */}
          <div
            className='d-flex align-items-center justify-content-between p-3 mb-4 rounded-4 border'
            style={{
              backgroundColor: '#FFFDF9',
              borderColor: '#F3EDE2',
              cursor: 'pointer',
            }}
          >
            <div className='d-flex align-items-center gap-3'>
              <div
                className='rounded-circle d-flex align-items-center justify-content-center'
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: '#F8F3E9',
                }}
              >
                <FaUser size={18} color='#856404' />
              </div>
              <div>
                <h6
                  className='mb-0 fw-bold text-dark'
                  style={{ fontSize: '15px' }}
                >
                  Sign in
                </h6>
                <p className='mb-0 text-muted' style={{ fontSize: '11px' }}>
                  Track orders, EMI and saved pieces
                </p>
              </div>
            </div>
            <GoChevronRight size={18} color='#856404' />
          </div>

          {/* Core App Navigation Stack */}
          <ListGroup variant='flush' className='bg-transparent'>
            <ListGroup.Item
              action
              href='#home'
              className='border-0 px-3 py-2.5 d-flex align-items-center rounded-3 mb-1'
              style={{
                backgroundColor: '#F5EFE6',
                color: '#1A2B49',
                fontWeight: '600',
              }}
            >
              <FiHome className='me-3' size={18} /> Home
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#jewellery'
              className='bg-transparent border-0 px-3 py-2.5 d-flex justify-content-between align-items-center text-dark fw-medium mb-1'
            >
              <span className='d-flex align-items-center'>
                <IoDiamondOutline className='me-3' size={18} /> Jewellery
              </span>
              <GoChevronDown className='text-secondary' size={16} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#collections'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <FiGrid className='me-3' size={18} /> Collections
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#orders'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <FiClock className='me-3' size={18} /> Orders
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#cart'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <IoBagOutline className='me-3' size={18} /> Cart
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#emi'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <LuCreditCard className='me-3' size={18} /> EMI
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#exchange'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <BiRefresh className='me-3' size={20} /> Exchange / Refund
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#account'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <FaUser className='me-3' size={18} /> Account
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#contact'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-1'
            >
              <FiMail className='me-3' size={18} /> Contact
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='#support'
              className='bg-transparent border-0 px-3 py-2.5 d-flex align-items-center text-dark fw-medium mb-4'
            >
              <FaHeadset className='me-3' size={18} /> Support
            </ListGroup.Item>
          </ListGroup>
        </div>

        {/* Sidebar Help Footer Info */}
        <div
          className='p-3 mt-auto border-top'
          style={{
            backgroundColor: '#F7F5F0',
            marginLeft: '-16px',
            marginRight: '-16px',
            marginbottom: '-16px',
          }}
        >
          <span
            className='text-uppercase d-block mb-3 fw-bold'
            style={{ fontSize: '11px', letterSpacing: '1px', color: '#AA8B56' }}
          >
            Need Help?
          </span>
          <div
            className='d-flex align-items-center gap-2 mb-2 text-dark fw-semibold'
            style={{ fontSize: '14px' }}
          >
            <FiPhoneCall size={14} className='text-secondary' />{' '}
            <span>18005693934</span>
          </div>
          <div
            className='d-flex align-items-center gap-2 text-muted'
            style={{ fontSize: '13.5px' }}
          >
            <FiMail size={14} /> <span>support@hoxtanjewellery.com</span>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
