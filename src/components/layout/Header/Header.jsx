import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHeart, BiCart, BiSearch, BiMap, BiUser, BiCaretDown, BiMenu } from 'react-icons/bi';
import Logo from '../../common/Logo/Logo';
import AuthModal from '../../common/AuthModal/AuthModal';
import './Header.css';

const Header = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      try {
        const saved = localStorage.getItem('cart');
        if (saved) {
          const items = JSON.parse(saved);
          const count = items.reduce((acc, item) => acc + item.qty, 0);
          setCartCount(count);
        } else {
          setCartCount(0);
        }
      } catch (e) {}
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('cartUpdated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('cartUpdated', updateCount);
    };
  }, [location]);

  const openLogin  = () => { setAuthTab('login');  setAuthOpen(true); };
  const openSignup = () => { setAuthTab('signup'); setAuthOpen(true); };

  return (
    <>
      <header className="bg-white border-bottom shadow-sm position-sticky top-0" style={{zIndex: 1000}}>
        <div className="container-fluid px-2 px-md-3 px-lg-4 d-flex align-items-center py-2 gap-1 gap-md-3 justify-content-between" style={{minHeight: '70px'}}>
          
          {/* Logo */}
          <Link to="/" className="text-decoration-none flex-shrink-0 d-flex align-items-center me-md-2 pt-1">
            <Logo width={115} />
          </Link>

          {/* Location details */}
          <div className="d-none d-xl-flex align-items-center text-dark cursor-pointer ms-2 gap-1">
            <BiMap size={22} className="text-muted" />
            <div className="d-flex flex-column lh-sm">
              <span className="text-muted" style={{fontSize: '11px'}}>Deliver to Sankar</span>
              <span className="fw-bold" style={{fontSize: '13px', color: '#333'}}>Visakhapatnam 530...</span>
            </div>
          </div>

          {/* Search Bar - Modern Rounded */}
          <div className="flex-grow-1 d-none d-md-flex align-items-center mx-3 mx-lg-4">
            <div className="d-flex w-100 border rounded-pill shadow-sm" style={{borderColor: '#e2e2e2', overflow: 'hidden', height: '44px'}}>
              <select className="bg-light border-0 px-3 text-muted" style={{outline: 'none', borderRight: '1px solid #e2e2e2', fontSize: '13px', width: 'auto', cursor: 'pointer'}}>
                <option>All Categories</option>
                <option>Food</option>
                <option>Handmade</option>
              </select>
              <input type="text" className="form-control border-0 px-3 h-100" placeholder="Search HomeBazz..." style={{boxShadow: 'none', fontSize: '14px', backgroundColor: '#fff'}} />
              <button className="border-0 px-4 h-100 d-flex align-items-center justify-content-center cursor-pointer text-white" style={{backgroundColor: 'rgb(154, 140, 209)', transition: 'background-color 0.2s'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(134, 120, 189)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(154, 140, 209)'}>
                <BiSearch size={20} />
              </button>
            </div>
          </div>
          {/* Right Side Items */}
          <div className="d-flex align-items-center gap-2 gap-md-3 ms-auto">
            
            {/* Mobile Search Icon */}
            <div className="d-flex d-md-none text-dark cursor-pointer p-1">
              <BiSearch size={22} />
            </div>

            {/* Login / Signup */}
            <div className="d-flex align-items-center gap-1 gap-md-2">
              <button className="btn btn-outline-primary btn-sm rounded-pill px-2 px-md-3 fw-bold border-2 text-nowrap" style={{fontSize: '11px'}} onClick={openLogin}>Login</button>
              <button className="btn btn-primary btn-sm rounded-pill px-2 px-md-3 fw-bold shadow-sm text-nowrap" style={{fontSize: '11px'}} onClick={openSignup}>Sign Up</button>
            </div>

            {/* Orders / Wishlist */}
            <Link to="/wishlist" className="d-none d-lg-flex flex-column lh-sm text-dark text-decoration-none align-items-start">
              <span className="text-muted" style={{fontSize: '11px'}}>Returns</span>
              <span className="fw-bold" style={{fontSize: '13px', color: '#333'}}>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="text-decoration-none d-flex align-items-center gap-1 gap-md-2 text-dark ms-1 ms-md-0">
              <div className="position-relative d-flex align-items-center">
                <BiCart size={28} className="d-md-none" color="#333" />
                <BiCart size={32} className="d-none d-md-block" color="#333" />
                <span className="position-absolute bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{fontSize: '10px', top: '-4px', right: '-6px', width: '16px', height: '16px'}}>{cartCount}</span>
              </div>
              <span className="fw-bold d-none d-md-block" style={{fontSize: '14px', color: '#333'}}>Cart</span>
            </Link>
          </div>
        </div>

        {/* Secondary Sub-Nav */}
        <nav className="px-3 px-lg-4" style={{backgroundColor: 'rgb(154, 140, 209)', color: '#fff', fontSize: '13px'}}>
          <div className="d-flex align-items-center py-2">
            
            {/* Mobile Menu Toggle Button */}
            <div 
              className="d-md-none d-flex align-items-center gap-2 cursor-pointer fw-semibold" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <BiMenu size={22} />
              <span>Categories</span>
            </div>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className="d-none d-md-flex align-items-center gap-4 flex-grow-1 overflow-auto justify-content-center" style={{whiteSpace: 'nowrap'}}>
              <Link to="/shop/food" className={`text-decoration-none fw-bold px-2 py-1 rounded ${location.pathname.includes('/food') ? 'active-nav-link' : 'text-white hover-text-light'}`}>Food</Link>
              <Link to="/shop/handmade" className={`text-decoration-none fw-bold px-2 py-1 rounded ${location.pathname.includes('/handmade') ? 'active-nav-link' : 'text-white hover-text-light'}`}>Handmade</Link>
              <Link to="/shop/art-decor" className={`text-decoration-none fw-bold px-2 py-1 rounded ${location.pathname.includes('/art-decor') ? 'active-nav-link' : 'text-white hover-text-light'}`}>Art & Decor</Link>
              <Link to="/shop/clothing" className={`text-decoration-none fw-bold px-2 py-1 rounded ${location.pathname.includes('/clothing') ? 'active-nav-link' : 'text-white hover-text-light'}`}>Clothing</Link>
              <Link to="/shop/jewellery" className={`text-decoration-none fw-bold px-2 py-1 rounded ${location.pathname.includes('/jewellery') ? 'active-nav-link' : 'text-white hover-text-light'}`}>Jewellery</Link>
              <Link to="/shop/home-accessories" className={`text-decoration-none fw-bold px-2 py-1 rounded ${location.pathname.includes('/home-accessories') ? 'active-nav-link' : 'text-white hover-text-light'}`}>Home Accessories</Link>
            </div>
          </div>

          {/* Mobile Dropdown Content */}
          {isMobileMenuOpen && (
            <div className="d-md-none d-flex flex-column gap-3 pb-3 pt-2" style={{borderTop: '1px solid rgba(255,255,255,0.1)'}}>
              <Link to="/shop/food" onClick={() => setIsMobileMenuOpen(false)} className={`text-decoration-none fw-semibold ps-2 py-1 rounded ${location.pathname.includes('/food') ? 'active-nav-link' : 'text-white'}`}>Food</Link>
              <Link to="/shop/handmade" onClick={() => setIsMobileMenuOpen(false)} className={`text-decoration-none fw-semibold ps-2 py-1 rounded ${location.pathname.includes('/handmade') ? 'active-nav-link' : 'text-white'}`}>Handmade</Link>
              <Link to="/shop/art-decor" onClick={() => setIsMobileMenuOpen(false)} className={`text-decoration-none fw-semibold ps-2 py-1 rounded ${location.pathname.includes('/art-decor') ? 'active-nav-link' : 'text-white'}`}>Art & Decor</Link>
              <Link to="/shop/clothing" onClick={() => setIsMobileMenuOpen(false)} className={`text-decoration-none fw-semibold ps-2 py-1 rounded ${location.pathname.includes('/clothing') ? 'active-nav-link' : 'text-white'}`}>Clothing</Link>
              <Link to="/shop/jewellery" onClick={() => setIsMobileMenuOpen(false)} className={`text-decoration-none fw-semibold ps-2 py-1 rounded ${location.pathname.includes('/jewellery') ? 'active-nav-link' : 'text-white'}`}>Jewellery</Link>
              <Link to="/shop/home-accessories" onClick={() => setIsMobileMenuOpen(false)} className={`text-decoration-none fw-semibold ps-2 py-1 rounded ${location.pathname.includes('/home-accessories') ? 'active-nav-link' : 'text-white'}`}>Home Accessories</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab={authTab}
      />
    </>
  );
};

export default Header;

