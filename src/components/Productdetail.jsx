import React from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Filterproduct from './Filterproduct';

import Products from '../Products';

function ProductDetail() {
  const { id } = useParams();

  const product = Products.find((p) => p.id === parseInt(id));

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
          <Col lg={6}>
            <div
              className='overflow-hidden rounded-3 d-flex align-items-center justify-content-center position-relative'
              style={{
                backgroundColor: '#000000',
                padding: '0px',
                height: '600px',
                cursor: 'zoom-in',
              }}
              onMouseMove={(e) => {
                const { left, top, width, height } =
                  e.currentTarget.getBoundingClientRect();

                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;

                const img = e.currentTarget.querySelector('.zoom-img');
                if (img) {
                  img.style.transformOrigin = `${x}% ${y}%`;
                  img.style.transform = 'scale(2)';
                }
              }}
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
                className='img-fluid zoom-img'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.1s ease-out',
                }}
              />
            </div>
          </Col>

          <Col lg={6}>
            <h2
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.5px' }}
            >
              {product.title}
            </h2>

            <h3 className='fw-bold my-3' style={{ color: '#1a1a1a' }}>
              {product.price}
            </h3>

            <span className='badge bg-success mb-3 px-2 py-1'>In Stock</span>

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
