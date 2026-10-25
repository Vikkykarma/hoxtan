import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoPlayStore } from 'react-icons/bi';

function Footer() {
  // हेडिंग्स के नीचे दिखने वाली गोल्डन लाइन का कॉमन स्टाइल
  const underlineStyle = {
    display: 'block',
    width: '25px',
    height: '2px',
    backgroundColor: '#bfa15f',
    marginTop: '6px',
    marginBottom: '20px',
  };

  // लिंक्स का कॉमन स्टाइल
  const linkStyle = {
    color: '#555555',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    marginBottom: '10px',
    fontFamily: 'sans-serif',
  };

  return (
    <footer
      style={{
        backgroundColor: '#faf9f7',
        padding: '60px 0 40px 0',
        borderTop: '1px solid #eeeeee',
      }}
    >
      <Container>
        <Row xs={2} md={3} lg={6} className='g-4'>
          {/* 1. ब्रांड लोगो और एड्रेस सेक्शन */}
          <Col>
            <div className='mb-3'>
              {/* लोगो टेक्सट / इमेज */}
              <h2
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  margin: 0,
                  color: '#000',
                }}
              >
                HOXTAN
              </h2>
              <small
                style={{
                  color: '#bfa15f',
                  letterSpacing: '3px',
                  fontSize: '10px',
                  display: 'block',
                  marginTop: '-3px',
                }}
              >
                JEWELLERY
              </small>
            </div>

            <p
              style={{
                italic: 'true',
                color: '#555',
                fontSize: '14px',
                marginBottom: '25px',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              Made to Shine for You
            </p>

            {/* कांटेक्ट डिटेल्स */}
            <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.8' }}>
              <div className='d-flex align-items-start mb-2'>
                <span className='me-2'>📍</span>
                <span>spectrum business center, manglore</span>
              </div>
              <div className='d-flex align-items-center mb-2'>
                <span className='me-2'>✉️</span>
                <a
                  href='mailto:support@hoxtanjewellery.com'
                  style={{ color: '#555', textDecoration: 'none' }}
                >
                  support@hoxtanjewellery.com
                </a>
              </div>
              <div className='d-flex align-items-center'>
                <span className='me-2'>📞</span>
                <span>18005693934</span>
              </div>
            </div>
          </Col>

          {/* 2. Collections लिंक्स */}
          <Col>
            <h5
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                fontWeight: 'normal',
                margin: 0,
              }}
            >
              Collections
            </h5>
            <span style={underlineStyle}></span>
            <a href='#antique' style={linkStyle}>
              Antique Collections
            </a>
            <a href='#bridal' style={linkStyle}>
              Bridal Collection
            </a>
            <a href='#daily' style={linkStyle}>
              Daily Wear Collection
            </a>
            <a href='#gold-silver' style={linkStyle}>
              Gold and Silver Coins
            </a>
            <a href='#temple' style={linkStyle}>
              Temple Collection
            </a>
          </Col>

          {/* 3. Customer Services लिंक्स */}
          <Col>
            <h5
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                fontWeight: 'normal',
                margin: 0,
              }}
            >
              Customer Services
            </h5>
            <span style={underlineStyle}></span>
            <a href='#faqs' style={linkStyle}>
              FAQs
            </a>
            <a href='#tracking' style={linkStyle}>
              Order Tracking
            </a>
            <a href='#contact' style={linkStyle}>
              Contact Us
            </a>
          </Col>

          {/* 4. Information लिंक्स */}
          <Col>
            <h5
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                fontWeight: 'normal',
                margin: 0,
              }}
            >
              Information
            </h5>
            <span style={underlineStyle}></span>
            <a href='#about' style={linkStyle}>
              About us
            </a>
            <a href='#terms' style={linkStyle}>
              Terms and Conditions
            </a>
            <a href='#privacy' style={linkStyle}>
              Privacy Policy
            </a>
            <a href='#shipping' style={linkStyle}>
              Shipping and Delivery Policy
            </a>
            <a href='#refund' style={linkStyle}>
              Cancellation and Refund Policy
            </a>
          </Col>

          {/* 5. My Account लिंक्स */}
          <Col xs={6} sm={6} md={4} lg={1.5}>
            <h5
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                fontWeight: 'normal',
                margin: 0,
              }}
            >
              My Account
            </h5>
            <span style={underlineStyle}></span>
            <a href='#profile' style={linkStyle}>
              Profile
            </a>
            <a href='#orders' style={linkStyle}>
              My Orders
            </a>
            <a href='#wishlist' style={linkStyle}>
              Wishlist
            </a>
            <a href='#bag' style={linkStyle}>
              My Bag
            </a>
            <a href='#address' style={linkStyle}>
              Shipping Address
            </a>
          </Col>

          {/* 6. Download App और सोशल मीडिया */}
          <Col xs={12} sm={6} md={4} lg={1.5} className='ms-auto'>
            <h5
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                fontWeight: 'normal',
                margin: 0,
              }}
            >
              Download App
            </h5>
            <span style={underlineStyle}></span>
            <p
              style={{ color: '#555', fontSize: '13px', marginBottom: '15px' }}
            >
              Shop on the go with the Hoxtan App.
            </p>

            {/* स्टोर बटन इमेजेस के लिए प्लेसहोल्डर */}
            <div
              className='d-flex flex-column gap-2 mb-4'
              style={{ maxWidth: '135px' }}
            >
              <a href='#playstore'>
                <BiLogoPlayStore size={40} />
              </a>
              <a href='#appstore'>
                <FcGoogle size={40} />
              </a>
            </div>

            {/* सोशल मीडिया सर्कुलर आइकॉन्स */}
            <div className='d-flex gap-2'>
              {['📸', '👤', '📺', '𝕏'].map((icon, idx) => (
                <a
                  key={idx}
                  href={`#social-${idx}`}
                  className='rounded-circle d-flex align-items-center justify-content-center'
                  style={{
                    width: '32px',
                    height: '32px',
                    border: '1px solid #e0e0e0',
                    backgroundColor: '#ffffff',
                    color: '#333333',
                    textDecoration: 'none',
                    fontSize: '14px',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
