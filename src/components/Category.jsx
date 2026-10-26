import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiGridAlt } from 'react-icons/bi'; // More box indicator icon ke liye
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Category() {
  const collectionItems = [
    { name: 'NECKLACES', img: 'assets/5.webp' },
    { name: 'EARRINGS', img: 'assets/6.webp' },
    { name: 'BRACELETS', img: 'assets/7.webp' },
    { name: 'RINGS', img: 'assets/8.webp' },
    { name: 'CHAINS', img: 'assets/9.webp' },
    { name: 'BANGLES', img: 'assets/10.webp' },
    { name: 'ANKLETS', img: 'assets/11.webp' },
  ];

  return (
    <Container className='py-5 bg-white text-center'>
      <div className='mb-5 d-flex flex-column align-items-center'>
        <h2
          className='fw-normal text-dark text-uppercase m-0 text-muted'
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '28px',
            letterSpacing: '3px',
          }}
        >
          Find Your Signature
        </h2>

        <div
          className='d-flex align-items-center justify-content-center gap-3 mt-2 w-100'
          style={{ maxWidth: '400px' }}
        >
          <div
            className='flex-grow-1 border-bottom'
            style={{ borderColor: '#222', borderWidth: '1px' }}
          ></div>
          <span
            className='text-muted text-uppercase text-nowrap fw-semibold'
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Timeless Pieces, Made For Your Story
          </span>
          <div
            className='flex-grow-1 border-bottom'
            style={{ borderColor: '#222', borderWidth: '1px' }}
          ></div>
        </div>
      </div>

      <Row
        className='flex-nowrap g-3 justify-content-start justify-content-md-center pb-2'
        style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        {collectionItems.map((item, index) => (
          <Col key={index} className='flex-shrink-0' style={{ width: '135px' }}>
            <a
              href={`#${item.name.toLowerCase()}`}
              className='text-decoration-none d-flex flex-column align-items-center justify-content-between p-3 rounded-4 shadow-sm w-100'
              style={{
                backgroundColor: '#000000',
                height: '145px',
                transition: 'transform 0.2s ease-in-out, background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.backgroundColor = '#111111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#000000';
              }}
            >
              <div
                className='d-flex align-items-center justify-content-center flex-grow-1 w-100'
                style={{ height: '80px' }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className='img-fluid object-fit-contain h-100'
                  style={{ maxHeight: '75px' }}
                />
              </div>

              <span
                className='text-white fw-bold tracking-wide mt-2 text-nowrap'
                style={{ fontSize: '11px', letterSpacing: '1px' }}
              >
                {item.name}
              </span>
            </a>
          </Col>
        ))}

        <Col
          className='flex-shrink-0 custom-scrollbar overflow-hidden'
          style={{ width: '135px' }}
        >
          <Link
            to={'/more'}
            className='text-decoration-none d-flex flex-column align-items-center justify-content-between custom-scrollbar p-3 rounded-4 shadow-sm w-100'
            style={{
              backgroundColor: '#000000',
              height: '145px',
              transition: 'transform 0.2s ease-in-out, background-color 0.2s',
              display: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.backgroundColor = '#111111';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#000000';
            }}
          >
            <div
              className='d-flex align-items-center justify-content-center flex-grow-1 text-white'
              style={{ height: '80px' }}
            >
              <BiGridAlt size={34} style={{ color: '#EAEAEA', opacity: 0.9 }} />
            </div>

            <span
              className='text-white fw-bold tracking-wide mt-2'
              style={{ fontSize: '11px', letterSpacing: '1px' }}
            >
              MORE
            </span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Category;
