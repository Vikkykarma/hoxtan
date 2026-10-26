import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import Products from '../Products.js';

function ProductCarousel() {
  const { id } = useParams();
  const currentProductId = parseInt(id);

  const filteredProducts = Products.filter(
    (product) => product.id !== currentProductId
  );

  const arrowBtnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '36px',
    height: '36px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 10,
    cursor: 'pointer',
    color: '#333',
    '@media (maxWidth: 767px)': { display: 'none' },
  };

  return (
    <Container className='my-5 position-relative px-4'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h4
          style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            letterSpacing: '1px',
            color: '#1a1a1a',
            margin: 0,
            textTransform: 'uppercase',
            fontSize: '20px',
          }}
        >
          You May Also Like
        </h4>
        <Link
          to='/all-products'
          style={{
            color: '#bfa15f',
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          VIEW ALL →
        </Link>
      </div>

      <div
        style={{ ...arrowBtnStyle, left: '-5px' }}
        className='d-none d-md-flex'
      >
        <FaChevronLeft size={12} />
      </div>
      <div
        style={{ ...arrowBtnStyle, right: '-5px' }}
        className='d-none d-md-flex'
      >
        <FaChevronRight size={12} />
      </div>

      <div
        className='d-flex gap-3 pb-3 custom-scrollbar'
        style={{
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ minWidth: '220px', flex: '0 0 auto' }}>
            <Link
              to={`/product/${product.id}`}
              className='text-decoration-none'
            >
              <Card
                className='h-100 border-0 position-relative overflow-hidden'
                style={{
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 20px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 2px 6px rgba(0,0,0,0.04)';
                }}
              >
                <div
                  style={{
                    backgroundColor: '#000000',
                    padding: '25px 15px',
                    height: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Card.Img
                    variant='top'
                    src={`/${product.img}`}
                    alt={product.title}
                    style={{
                      maxHeight: '100%',
                      objectFit: 'contain',
                      width: 'auto',
                    }}
                  />

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Added to wishlist!');
                    }}
                    className='border-0 d-flex align-items-center justify-content-center'
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '28px',
                      height: '28px',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      borderRadius: '50%',
                      color: '#333',
                      zIndex: 3,
                    }}
                  >
                    <FiHeart size={14} />
                  </button>
                </div>

                <Card.Body
                  className='p-3 text-start bg-white d-flex flex-column justify-content-between'
                  style={{ minHeight: '105px' }}
                >
                  <div>
                    <Card.Title
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: '13px',
                        color: '#222222',
                        fontWeight: '500',
                        marginBottom: '6px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {product.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: '11px',
                        color: '#bfa15f',
                        fontWeight: '500',
                        marginBottom: '6px',
                      }}
                    >
                      {product.details}
                    </Card.Text>
                  </div>
                  <Card.Text
                    className='fw-bold text-dark mb-0'
                    style={{ fontSize: '14px' }}
                  >
                    {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductCarousel;
