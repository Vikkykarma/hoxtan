import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiGridAlt } from 'react-icons/bi'; // More box indicator icon ke liye
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Category() {
  // Items array grid mapping ko loop logic se clean dynamic handle karne ke liye
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
      {/* ======================================================== */}
      {/* HEADER SECTION (IMAGE LOOK & FEEL ACCORDINGLY)          */}
      {/* ======================================================== */}
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

        {/* Subtle Horizontal Border Lines Layout Subtitle Divider */}
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

      {/* ======================================================== */}
      {/* GRID CONTAINER ITEMS SECTION                             */}
      {/* ======================================================== */}
      {/* row-cols classes automatically responsive handle karti hain: 
          Mobile pe 2 boxes, tablet pe 4 boxes, aur desktop laptop pe pure 8 boxes inline */}
      {/* 
  FIX CHANGES:
  - flex-nowrap: Yeh cards ko tod kar niche aane se rokega aur hamesha 1 line me rakhega.
  - overflow-x-auto: Mobile par automatic ek premium touch-swipe scroll bar dega taaki screen fatne se bache.
  - pb-2: Scrollbar aur card ke beech halka sa space dene ke liye.
*/}
      <Row
        className='flex-nowrap g-3 justify-content-start justify-content-md-center pb-2'
        style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Loop Mapping array cards items (Saare 7 Cards) */}
        {collectionItems.map((item, index) => (
          <Col
            key={index}
            className='flex-shrink-0' // Isse cards ek line me rahne par pichkenge (squeeze) nahi
            style={{ width: '135px' }} // Har ek card ki fixed chaudaai jo image ke hisab se perfect hai
          >
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
              {/* Jewellery Product Image */}
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

              {/* Card Title Label */}
              <span
                className='text-white fw-bold tracking-wide mt-2 text-nowrap'
                style={{ fontSize: '11px', letterSpacing: '1px' }}
              >
                {item.name}
              </span>
            </a>
          </Col>
        ))}

        {/* 8th Final Box: "MORE" Category Column Card */}
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
