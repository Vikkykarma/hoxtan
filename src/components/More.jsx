import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function More() {
  // आपके कैटलॉग के अनुसार सभी कलेक्शन्स और उनकी कैटेगरीज का डेटा
  const collections = [
    {
      title: 'Antique Collections',
      link: '/all-antique',
      categories: [
        { name: 'KIDS', img: 'assets/c1.webp' },
        { name: 'MEN', img: 'assets/c2.webp' },
        { name: 'WOMEN', img: 'assets/c3.webp' },
      ],
    },
    {
      title: 'Bridal Collection',
      link: '/all-bridal',
      categories: [{ name: 'WOMEN', img: 'assets/c4.webp' }],
    },
    {
      title: 'Daily Wear Collection',
      link: '/all-daily',
      categories: [
        { name: 'KIDS', img: 'assets/c5.webp' },
        { name: 'MEN', img: 'assets/c6.webp' },
        { name: 'WOMEN', img: 'assets/c7.webp' },
      ],
    },
    {
      title: 'Diamond Collection',
      link: '/all-diamond',
      categories: [
        { name: 'KIDS', img: 'assets/c8.webp' },
        { name: 'MEN', img: 'assets/c9.webp' },
        { name: 'WOMEN', img: 'assets/c10.webp' },
      ],
    },
  ];

  return (
    <Container className='my-5' style={{ fontFamily: 'sans-serif' }}>
      {/* मुख्य कैटलॉग हेडर */}
      <div className='mb-4'>
        <span style={{ fontSize: '12px', color: '#888', letterSpacing: '1px' }}>
          CATALOGUE / ALL CATEGORIES
        </span>
        <p className='text-muted small mt-1'>
          Browse every collection and find the piece that tells your story.
        </p>
      </div>

      {/* सभी कलेक्शन्स का लूप */}
      {collections.map((collection, index) => (
        <div key={index} className='mb-5'>
          {/* कलेक्शन का टाइटल बार */}
          <div
            className='d-flex justify-content-between align-items-center mb-3 pb-2'
            style={{ borderBottom: '1px solid #f0ede9' }}
          >
            <h5
              style={{
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: 0,
                fontSize: '16px',
              }}
            >
              {collection.title}
            </h5>
            <Link
              to={collection.link}
              style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '11px',
                letterSpacing: '0.5px',
              }}
            >
              View all {collection.title} →
            </Link>
          </div>

          {/* कैटेगरीज ग्रिड (किड्स, मेन, वीमेन) */}
          <Row className='g-3'>
            {collection.categories.map((cat, catIdx) => (
              <Col
                key={catIdx}
                xs={4}
                sm={3}
                md={2}
                lg={1.5}
                style={{ maxWidth: '120px' }}
              >
                <Link
                  to={`${collection.link}/${cat.name.toLowerCase()}`}
                  className='text-decoration-none'
                >
                  <Card
                    className='border-0 bg-transparent text-center'
                    style={{ cursor: 'pointer' }}
                  >
                    {/* 🚀 इमेज का बाहरी डिब्बा (स्क्वेयर ब्लैक बॉक्स) */}
                    <div
                      className='overflow-hidden mb-2 d-flex align-items-center justify-content-center'
                      style={{
                        backgroundColor: '#000000',
                        aspectRatio: '1/1', // परफेक्ट स्क्वायर बनाने के लिए
                        borderRadius: '12px', // इमेज के अनुसार कोनों को हल्का राउंड किया
                        padding: '12px',
                        transition: 'transform 0.3s ease',
                      }}
                      // ❌ यहाँ से scale(1.4) वाला इफ़ेक्ट हटा दिया गया है
                      // इसके बजाय माउस ले जाने पर पूरा बॉक्स हल्का सा ऊपर उठेगा जो प्रीमियम लुक देगा
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = 'translateY(-4px)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = 'translateY(0)')
                      }
                    >
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className='img-fluid'
                        style={{
                          maxHeight: '100%',
                          objectFit: 'contain',
                          // यहाँ कोई scale एनीमेशन नहीं है, इसलिए इमेज बिल्कुल स्थिर और साफ़ रहेगी
                        }}
                      />
                    </div>

                    {/* कैटेगरी का नाम (KIDS, MEN, WOMEN) */}
                    <span
                      style={{
                        fontSize: '10px',
                        color: '#666',
                        fontWeight: '500',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {cat.name}
                    </span>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default More;
