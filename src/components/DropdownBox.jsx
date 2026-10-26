function DropdownBox() {
  return (
    <div
      className='position-absolute start-0 w-100 bg-white border-bottom shadow-sm py-5'
      style={{
        top: '100%',
        zIndex: 9999,
        borderTop: '1px solid #F0F0F0',
        marginTop: '-4px',
        paddingTop: '4px',
        transform: 'translateY(-10px)',
      }}
    >
      <div className='container-fluid px-3 px-md-5'>
        <div className='row g-4 justify-content-between'>
          <div className='col-lg-2'>
            <h6
              className='text-uppercase fw-bold mb-4'
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#AA7C33',
              }}
            >
              Antique Collections
            </h6>
            <div className='d-flex flex-column gap-3 mb-4'>
              <a
                href='#kids'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Kids
                </span>
              </a>
              <a
                href='#men'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                >
                  <img
                    className='img-fluid object-fit-contain h-100'
                    src='assets/12.webp'
                    alt='men'
                  />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Men</span>
              </a>
              <a
                href='#women'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Women
                </span>
              </a>
            </div>

            <h6
              className='text-uppercase fw-bold mb-3 mt-4 pt-3 border-top'
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#AA7C33',
              }}
            >
              Temple Collection
            </h6>
            <div className='d-flex flex-column gap-3'>
              <a
                href='#women-temple'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Women
                </span>
              </a>
            </div>
          </div>

          <div className='col-lg-2'>
            <h6
              className='text-uppercase fw-bold mb-4'
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#AA7C33',
              }}
            >
              Bridal Collection
            </h6>
            <div className='d-flex flex-column gap-3'>
              <a
                href='#bridal-women'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Women
                </span>
              </a>
            </div>
          </div>

          <div className='col-lg-2'>
            <h6
              className='text-uppercase fw-bold mb-4'
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#AA7C33',
              }}
            >
              Daily Wear Collection
            </h6>
            <div className='d-flex flex-column gap-3'>
              <a
                href='#daily-kids'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Kids
                </span>
              </a>
              <a
                href='#daily-men'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Men</span>
              </a>
              <a
                href='#daily-women'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Women
                </span>
              </a>
            </div>
          </div>

          <div className='col-lg-2'>
            <h6
              className='text-uppercase fw-bold mb-4'
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#AA7C33',
              }}
            >
              Diamond Collection
            </h6>
            <div className='d-flex flex-column gap-3'>
              <a
                href='#diamond-kids'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Kids
                </span>
              </a>
              <a
                href='#diamond-men'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark menu-item-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Men</span>
              </a>
              <a
                href='#diamond-women'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Women
                </span>
              </a>
            </div>
          </div>

          <div className='col-lg-2'>
            <h6
              className='text-uppercase fw-bold mb-4'
              style={{
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: '#AA7C33',
              }}
            >
              Gold and Silver Coins
            </h6>
            <div className='d-flex flex-column gap-3'>
              <a
                href='#gold-coins'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Gold Coins
                </span>
              </a>
              <a
                href='#silver-coins'
                className='d-flex align-items-center gap-3 text-decoration-none text-dark custom-nav-link'
              >
                <div
                  className='rounded-3 d-flex align-items-center justify-content-center'
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                  }}
                ></div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Silver Coins
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className='d-flex justify-content-end gap-4 mt-5 pt-3 border-top'
          style={{ fontSize: '13.5px' }}
        >
          <a
            href='#shop-all'
            className='text-decoration-none fw-semibold'
            style={{ color: '#AA7C33' }}
          >
            Shop all jewellery &rarr;
          </a>
          <a
            href='#browse-all'
            className='text-decoration-none fw-semibold'
            style={{ color: '#AA7C33' }}
          >
            Browse every category &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropdownBox;
