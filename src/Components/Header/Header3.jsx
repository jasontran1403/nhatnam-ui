import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import AuthModal from './AuthModal';

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <header className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${variant ? variant : ''} cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${isSticky ? isSticky : ''}`}>
        <div className="cs_main_header header-area-3">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding header-logo-3" to="/">
                  <img src="/assets/img/logo/logo3.svg" alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'} onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <button onClick={() => setSearchToggle(!searchToggle)} className="header-icon-btn search-icon-btn">
                    <i className="bi bi-search"></i>
                  </button>
                  <Link to="/contact" className="header-icon-btn cart-icon-btn">
                    <i className="bi bi-cart3"></i>
                    <span className="cart-badge">3</span>
                  </Link>
                  <button onClick={() => setAuthModalOpen(true)} className="header-icon-btn login-icon-btn">
                    <i className="bi bi-person-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
        <div className="search-inner">
          <i onClick={() => setSearchToggle(!searchToggle)} className="bi bi-x-lg search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}