import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Adsection() {
  return (
    <Container className='my-5'>
      <Card
        className='border-0 rounded-4 overflow-hidden position-relative'
        style={{
          backgroundImage: "url('assets/merge.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          minHeight: '280px',
        }}
      >
        <div
          className='position-absolute top-0 start-0 h-100 w-100'
          style={{
            background:
              'linear-gradient(90deg, #f5ede4 50%, rgba(245, 237, 228, 0.6) 55%, transparent 100%)',
            zIndex: 1,
          }}
        />

        <Card.Body
          className='position-relative h-100 d-flex flex-column justify-content-center p-4 p-md-5'
          style={{
            zIndex: 2,
            maxWidth: '550px',
          }}
        >
          <span
            className='text-uppercase text-secondary fw-semibold mb-2'
            style={{
              letterSpacing: '1.5px',
              fontSize: '11px',
            }}
          >
            Flexible EMI Plans
          </span>

          <h2
            className='text-uppercase text-dark fw-normal mb-3'
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '24px',
              letterSpacing: '0.5px',
              lineHeight: '1.3',
            }}
          >
            Own it in easy monthly EMIs
          </h2>

          <p
            className='text-muted mb-4 small'
            style={{
              lineHeight: '1.6',
              maxWidth: '360px',
            }}
          >
            Pay for eligible jewellery in monthly instalments. See the plans and
            monthly amount before you start.
          </p>

          <a
            href='#emi-plans'
            className='text-dark fw-semibold text-decoration-none small d-inline-flex align-items-center'
          >
            See EMI plans <span className='ms-2'>→</span>
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Adsection;
