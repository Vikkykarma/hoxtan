import React from 'react';
import { Row, Col } from 'react-bootstrap';
// 🚀 React Icons को इम्पोर्ट किया
import {
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
  SiVisa,
  SiMastercard,
} from 'react-icons/si';
import { FaArrowUp } from 'react-icons/fa6';

function FooterBottom() {
  // पेमेंट बक्से (Badges) का कॉमन स्टाइल
  const badgeStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    padding: '2px 8px',
    height: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
  };

  return (
    // 'w-100' और 'overflow-hidden' साइड स्क्रॉल को पूरी तरह रोकेंगे
    <div
      className='w-100 overflow-hidden position-relative'
      style={{
        backgroundColor: '#222222',
        padding: '15px 20px',
        borderTop: '1px solid #333333',
      }}
    >
      {/* 🚀 m-0 और w-100 बूटस्ट्रैप के नेगेटिव मार्जिन को खत्म करके स्क्रॉल बार को आने से रोकते हैं */}
      <Row className='align-items-center m-0 w-100'>
        {/* कॉलम 1: बायीं तरफ का कॉपीराइट टेक्स्ट (6 ग्रिड स्पेस) */}
        <Col xs={6} className='p-0 text-start'>
          <span
            style={{
              color: '#cccccc',
              fontSize: '13px',
              fontFamily: 'sans-serif',
            }}
          >
            © Hoxtan Jewellery. All rights reserved.
          </span>
        </Col>

        {/* कॉलम 2: दायीं तरफ का पेमेंट और 'Scroll to Top' बटन (6 ग्रिड ... स्पेस) */}
        <Col
          xs={6}
          className='p-0 d-flex align-items-center justify-content-end gap-2 flex-wrap'
          style={{ paddingRight: '50px' }}
        >
          {/* 'We accept' टेक्स्ट */}
          <span
            style={{
              color: '#cccccc',
              fontSize: '13px',
              marginRight: '5px',
              fontFamily: 'sans-serif',
            }}
          >
            We accept :
          </span>

          {/* 1. UPI (कस्टम टेक्स्ट आइकॉन इमेज के अनुसार) */}
          <div style={badgeStyle}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '900',
                color: '#0f7540',
                letterSpacing: '0.5px',
                fontFamily: 'sans-serif',
              }}
            >
              <span style={{ color: '#e67e22' }}>■</span> UPI
            </span>
          </div>

          {/* 2. G Pay (React Icon) */}
          <div style={badgeStyle}>
            <SiGooglepay size={26} style={{ color: '#4285F4' }} />
          </div>

          {/* 3. PhonePe (React Icon) */}
          <div style={badgeStyle}>
            <SiPhonepe size={18} style={{ color: '#5f259f' }} />
          </div>

          {/* 4. Paytm (React Icon) */}
          <div style={badgeStyle}>
            <SiPaytm size={28} style={{ color: '#00baf2' }} />
          </div>

          {/* 5. Visa (React Icon) */}
          <div style={badgeStyle}>
            <SiVisa size={24} style={{ color: '#1A1F71' }} />
          </div>

          {/* 6. Mastercard (React Icon) */}
          <div style={badgeStyle}>
            <SiMastercard size={20} style={{ color: '#eb001b' }} />
          </div>

          {/* 7. RuPay (कस्टम टेक्स्ट आइकॉन इमेज के अनुसार) */}
          <div style={badgeStyle}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#0d5d41',
                fontStyle: 'italic',
                fontFamily: 'sans-serif',
              }}
            >
              RuPay
            </span>
          </div>

          {/* 🚀 'Scroll to Top' गोल्ड बटन (React Icon - FaArrowUp के साथ) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='rounded-circle border-0 d-flex align-items-center justify-content-center'
            style={{
              background: 'linear-gradient(135deg, #bfa15f 0%, #9a7f43 100%)', // गोल्डन ग्रेडिएंट लुक
              color: '#ffffff',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              position: 'absolute',
              right: '0px',
              top: '50%',
              transform: 'translateY(-50%)', // वर्टिकली सेंटर एलाइन करने के लिए
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <FaArrowUp size={16} />
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default FooterBottom;
