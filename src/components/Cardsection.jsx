import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Cardsection.css';
import Products from '../Products.js';
import { Link } from 'react-router-dom';

function Cardsection() {
  return (
    <Container className='my-5'>
      <Row xs={1} sm={2} md={3} lg={5} className='g-4'>
        {Products.map((product) => (
          <Col key={product.id}>
            {/* 'custom-hover-card' क्लास यहाँ जादू करेगी */}
            <Link
              className='text-decoration-none'
              to={`/product/${product.id}`}
            >
              <Card className='h-100 border-0 custom-hover-card col'>
                <div className='bg-black p-3 text-center position-relative'>
                  <Card.Img
                    variant='top'
                    src={product.img}
                    alt={product.title}
                  />
                  <button
                    className='btn btn-light rounded-circle position-absolute top-0 end-0 m-2 p-1 border-0 shadow-sm'
                    style={{
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ♡
                  </button>
                </div>
                <Card.Body className='px-0 pt-3'>
                  <Card.Title className='fs-6 fw-normal text-secondary mb-1 text-uppercase'>
                    {product.title}
                  </Card.Title>
                  <Card.Text className='text-muted small mb-1'>
                    {product.details}
                  </Card.Text>
                  <Card.Text className='fw-bold text-dark'>
                    {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cardsection;
