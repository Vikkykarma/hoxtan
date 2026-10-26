import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sample.css';

function Sample() {
  return (
    <Container className='py-5 bg-white hoxtan-collections-section'>
      <Row className='g-4 mb-4'>
        <Col
          xs={12}
          md={4}
          className='d-flex flex-column justify-content-center text-start pe-md-5'
        >
          <h2 className='section-main-title mb-3'>
            LATEST JEWELRY <br className='d-none d-md-block' /> COLLECTIONS
          </h2>
          <p className='section-sub-desc text-muted text-uppercase'>
            From weddings to every moments, <br className='d-none d-lg-block' />{' '}
            our jewellery shines with you
          </p>
        </Col>

        <Col xs={12} md={8}>
          <div
            className='collection-card large-banner rounded-4 p-4 p-md-5 d-flex flex-column justify-content-end align-items-start'
            style={{ backgroundImage: `url('assets/16.webp')` }}
          >
            <div className='card-text-wrapper'>
              <h3 className='card-title-text mb-3'>
                LUXURY BRIDAL <br /> COLLECTIONS
              </h3>
              <span className='custom-arrow-trigger'>&rarr;</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className='g-4'>
        <Col xs={12} sm={6} md={4}>
          <div
            className='collection-card square-card rounded-4 p-4 d-flex flex-column justify-content-end align-items-start'
            style={{ backgroundImage: `url('assets/17.webp')` }}
          >
            <div className='card-text-wrapper'>
              <h4 className='card-title-text small-card mb-2'>
                STATEMENT <br /> PIECES
              </h4>
              <span className='custom-arrow-trigger'>&rarr;</span>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <div
            className='collection-card square-card rounded-4 p-4 d-flex flex-column justify-content-end align-items-start'
            style={{ backgroundImage: `url('assets/18.webp')` }}
          >
            <div className='card-text-wrapper'>
              <h4 className='card-title-text small-card mb-2'>
                MEN'S <br /> ESSENTIALS
              </h4>
              <span className='custom-arrow-trigger'>&rarr;</span>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={4}>
          <div
            className='collection-card square-card rounded-4 p-4 d-flex flex-column justify-content-end align-items-start'
            style={{ backgroundImage: `url('assets/1.webp')` }}
          >
            <div className='card-text-wrapper'>
              <h4 className='card-title-text small-card mb-2'>
                EVERYDAY <br /> GOLD
              </h4>
              <span className='custom-arrow-trigger'>&rarr;</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Sample;
