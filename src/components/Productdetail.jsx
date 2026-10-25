import React from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Filterproduct from './Filterproduct';

import Products from '../Products';

function ProductDetail() {
  // यूआरएल (URL) से आईडी पकड़ी
  const { id } = useParams();

  // 🚀 स्टेप 2: इम्पोर्ट किए गए डेटा में से सही प्रोडक्ट ढूंढा
  const product = Products.find((p) => p.id === parseInt(id));

  // अगर कोई गलत आईडी यूआरएल में डाल दे तो सेफ्टी मैसेज
  if (!product) {
    return (
      <Container className='text-center my-5'>
        <h4>Product not found!</h4>
        <Link to='/' className='btn btn-dark mt-3'>
          Back to Home
        </Link>
      </Container>
    );
  }

  return (
    <>
      <Container className='my-5' style={{ fontFamily: 'sans-serif' }}>
        <Row className='g-5'>
          {/* ================= बायाँ हिस्सा: आसान इमेज ज़ूम इफ़ेक्ट ================= */}
          {/* ================= बायाँ हिस्सा: माउस मूव ज़ूम इफ़ेक्ट ================= */}
          <Col lg={6}>
            {/* इमेज का बाहरी बॉक्स (काले बैकग्राउंड वाला) */}
            <div
              className='overflow-hidden rounded-3 d-flex align-items-center justify-content-center position-relative'
              style={{
                backgroundColor: '#000000',
                padding: '0px', // मूव इफ़ेक्ट के लिए पैडिंग 0px रखें
                height: '600px',
                cursor: 'zoom-in',
              }}
              // 🚀 जादू यहाँ है: माउस मूव होने पर इमेज को खिसकाने का लॉजिक
              onMouseMove={(e) => {
                const { left, top, width, height } =
                  e.currentTarget.getBoundingClientRect();

                // माउस की पोजीशन का प्रतिशत (Percentage) निकालना
                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;

                // माउस जहाँ जाएगा, इमेज का ओरिजिन (Origin) वहाँ सेट होगा और इमेज 1.8 गुना ज़ूम होगी
                const img = e.currentTarget.querySelector('.zoom-img');
                if (img) {
                  img.style.transformOrigin = `${x}% ${y}%`;
                  img.style.transform = 'scale(2)'; // आप ज़ूम बढ़ाने के लिए 1.8 को 2 भी कर सकते हैं
                }
              }}
              // माउस हटने पर इमेज को वापस नॉर्मल पोजीशन में लाना
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.zoom-img');
                if (img) {
                  img.style.transform = 'scale(1)';
                  img.style.transformOrigin = 'center center';
                }
              }}
            >
              <img
                src={`/${product.img}`}
                alt={product.title}
                className='img-fluid zoom-img' // पहचान के लिए 'zoom-img' क्लास दी
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.1s ease-out', // थोड़ा सा ट्रांजिशन ताकि मूवमेंट झटका न मारे
                }}
              />
            </div>
          </Col>

          {/* ================= दायाँ हिस्सा: डायनेमिक प्रोडक्ट डिटेल्स ================= */}
          <Col lg={6}>
            {/* डायनेमिक टाइटल */}
            <h2
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.5px' }}
            >
              {product.title}
            </h2>

            {/* डायनेमिक प्राइस */}
            <h3 className='fw-bold my-3' style={{ color: '#1a1a1a' }}>
              {product.price}
            </h3>

            <span className='badge bg-success mb-3 px-2 py-1'>In Stock</span>

            {/* सोने की शुद्धता की जानकारी */}
            <div
              className='p-3 mb-4 rounded-3'
              style={{
                backgroundColor: '#faf9f7',
                border: '1px solid #f0ede9',
              }}
            >
              <p
                className='mb-2 fw-semibold text-secondary'
                style={{ fontSize: '14px' }}
              >
                ✨ {product.details}
              </p>
              <p className='mb-0 text-muted small'>
                Daily Wear Collection | Authentic Quality
              </p>
            </div>

            {/* बटन ग्रुप: Add to Bag & Buy Now */}
            <div className='d-flex gap-3 mb-4'>
              <Button
                variant='outline-dark'
                className='w-50 py-2 fw-semibold text-uppercase'
                style={{ borderRadius: '4px', borderColor: '#222' }}
              >
                ♡ Add to Bag
              </Button>
              <Button
                className='w-50 py-2 fw-semibold border-0'
                style={{
                  backgroundColor: '#bfa15f',
                  color: '#fff',
                  borderRadius: '4px',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#a3874c')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = '#bfa15f')
                }
              >
                Buy Now
              </Button>
            </div>

            {/* डिलीवरी पिनकोड चेक */}
            <div className='mb-4'>
              <h6
                className='fw-bold mb-2 text-uppercase small'
                style={{ letterSpacing: '1px' }}
              >
                Delivery Details
              </h6>
              <Form className='d-flex gap-2' style={{ maxWidth: '350px' }}>
                <Form.Control
                  type='text'
                  placeholder='Enter PIN Code'
                  className='rounded-1'
                />
                <Button variant='dark' className='px-4 rounded-1'>
                  Check
                </Button>
              </Form>
            </div>

            {/* प्रोडक्ट इनफार्मेशन टेबल */}
            <div className='mt-4'>
              <h6
                className='fw-bold mb-3 text-uppercase small'
                style={{ letterSpacing: '1px' }}
              >
                Product Information
              </h6>
              <Table
                bordered
                hover
                responsive
                size='sm'
                style={{ fontSize: '14px' }}
              >
                <tbody>
                  <tr>
                    <td className='text-muted p-2' style={{ width: '40%' }}>
                      Product Type
                    </td>
                    <td className='p-2 fw-medium'>Chains</td>
                  </tr>
                  <tr>
                    <td className='text-muted p-2'>Material Details</td>
                    <td className='p-2 fw-medium'>{product.details}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <Filterproduct />
    </>
  );
}

export default ProductDetail;
