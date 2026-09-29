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
        <div className="container-fluid px-3 px-lg-4 d-flex align-items-center py-2 gap-3" style={{minHeight: '70px'}}>
          
          {/* Logo */}
          <Link to="/" className="text-decoration-none flex-shrink-0 d-flex align-items-center me-md-2 pt-1">
            <Logo width={115} />
          </Link>

          {/* Location details */}
          <div className="d-none d-xl-flex flex-column lh-1 text-dark cursor-pointer ms-2" style={{maxWidth: '120px'}}>
            <span className="text-muted" style={{fontSize: '11px', paddingLeft: '18px'}}>Deliver to Sankar</span>
            <span className="fw-bold d-flex align-items-center gap-1" style={{fontSize: '13px', color: '#0F1111'}}>
              <BiMap size={16} className="flex-shrink-0" /> Visakhapatnam 530...
            </span>
          </div>

          {/* Search Bar - Amazon style */}
          <div className="flex-grow-1 d-none d-md-flex align-items-center mx-3">
            <div className="d-flex w-100 border rounded" style={{borderColor: '#cdcdcd', overflow: 'hidden'}}>
              <select className="bg-light border-0 px-2 text-muted" style={{outline: 'none', borderRight: '1px solid #cdcdcd', fontSize: '12px', width: 'auto', backgroundColor: '#f3f3f3'}}>
                <option>All</option>
                <option>Food</option>
                <option>Handmade</option>
              </select>
              <input type="text" className="form-control border-0 px-3 py-2" placeholder="Search HomeBazz" style={{boxShadow: 'none', fontSize: '15px'}} />
              <button className="border-0 px-3 d-flex align-items-center justify-content-center cursor-pointer" style={{backgroundColor: '#febd69', color: '#0F1111', width: '45px'}}>
                <BiSearch size={22} />
              </button>
            </div>
          </div>
          
          {/* Mobile Search Icon */}
          <div className="d-flex d-md-none ms-auto text-dark cursor-pointer">
            <BiSearch size={24} />
          </div>

          {/* Right Actions Container */}
          <div className="d-flex align-items-center gap-3 gap-lg-4 ms-auto ms-md-0">

            {/* My Account / Login */}
            <div className="d-none d-sm-flex flex-column lh-1 text-dark cursor-pointer" onClick={openLogin}>
              <span style={{fontSize: '11px'}}>Hello, sign in</span>
              <span className="fw-bold d-flex align-items-center gap-1" style={{fontSize: '13px', color: '#0F1111'}}>
                Account & Lists <BiCaretDown size={12} />
              </span>
            </div>

            {/* Orders / Wishlist */}
            <Link to="/wishlist" className="d-none d-lg-flex flex-column lh-1 text-dark text-decoration-none">
              <span style={{fontSize: '11px'}}>Returns</span>
              <span className="fw-bold" style={{fontSize: '13px', color: '#0F1111'}}>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="text-decoration-none d-flex align-items-center text-dark position-relative">
              <div className="position-relative d-flex align-items-end pt-1">
                <BiCart size={38} color="#0F1111" />
                <span className="position-absolute text-warning fw-bold d-flex justify-content-center w-100" style={{fontSize: '14px', top: '-1px', left: '-2px'}}>{cartCount}</span>
              </div>
              <span className="fw-bold d-none d-md-block pb-1" style={{fontSize: '13px', marginTop: 'auto', color: '#0F1111'}}>Cart</span>
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

