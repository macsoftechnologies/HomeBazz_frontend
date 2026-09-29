import React from 'react';
import { Link } from 'react-router-dom';
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoYoutube,
  BiLogoPlayStore,
  BiLogoApple,
  BiMapPin,
  BiEnvelope,
  BiPhone,
  BiHome
} from 'react-icons/bi';
import Logo from '../../common/Logo/Logo';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="amz-footer">
      {/* Back to top button */}
      <div className="amz-back-to-top" onClick={scrollToTop}>
        Back to top
      </div>

      {/* Main Links */}
      <div className="amz-footer-main">
        <div className="container">
          <div className="row py-5">
            {/* Column 1: Brand & Socials */}
            <div className="col-12 col-lg-4 mb-4 mb-lg-0 pe-lg-4">
              <div className="mb-4" style={{ filter: 'brightness(0) invert(1)' }}>
                <Link to="/" className="text-decoration-none">
                  <Logo width={160} />
                </Link>
              </div>
              <p className="mb-4" style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
                Every Home Has Something Worth Sharing.
                Discover authentic, handmade and home-made
                products from talented home makers.
              </p>
              
              <div className="d-flex gap-3 mb-4">
                <a href="#" className="text-white"><BiLogoFacebook size={22} /></a>
                <a href="#" className="text-white"><BiLogoTwitter size={22} /></a>
                <a href="#" className="text-white"><BiLogoInstagram size={22} /></a>
                <a href="#" className="text-white"><BiLogoPinterest size={22} /></a>
                <a href="#" className="text-white"><BiLogoYoutube size={22} /></a>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <a href="#" className="btn btn-dark border d-flex align-items-center gap-2" style={{borderColor: '#3a4553', backgroundColor: '#131A22', padding: '6px 12px'}}>
                  <BiLogoPlayStore size={20} />
                  <div className="text-start lh-1">
                    <span className="d-block" style={{fontSize: '9px', color: '#ccc'}}>GET IT ON</span>
                    <strong style={{fontSize: '13px'}}>Google Play</strong>
                  </div>
                </a>
                <a href="#" className="btn btn-dark border d-flex align-items-center gap-2" style={{borderColor: '#3a4553', backgroundColor: '#131A22', padding: '6px 12px'}}>
                  <BiLogoApple size={20} />
                  <div className="text-start lh-1">
                    <span className="d-block" style={{fontSize: '9px', color: '#ccc'}}>Download on the</span>
                    <strong style={{fontSize: '13px'}}>App Store</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div className="col-6 col-lg-3 mb-4 mb-lg-0">
              <h5>Categories</h5>
              <ul className="list-unstyled">
                <li><Link to="/shop/food">Food & Pickles</Link></li>
                <li><Link to="/shop/handmade">Handmade Crafts</Link></li>
                <li><Link to="/shop/decor">Art & Decor</Link></li>
                <li><Link to="/shop/clothing">Clothing</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="col-12 col-lg-3">
              <h5>Contact Info</h5>
              <ul className="list-unstyled" style={{ color: '#ccc', fontSize: '14px' }}>
                <li className="d-flex gap-2 mb-3">
                  <BiMapPin size={18} className="flex-shrink-0 mt-1 text-white" />
                  <span>Visakhapatnam, Andhra Pradesh, India</span>
                </li>
                <li className="d-flex gap-2 mb-3">
                  <BiEnvelope size={18} className="flex-shrink-0 mt-1 text-white" />
                  <span>hello@homebazz.com</span>
                </li>
                <li className="d-flex gap-2 mb-3">
                  <BiPhone size={18} className="flex-shrink-0 mt-1 text-white" />
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="amz-footer-bottom border-top" style={{borderColor: '#3a4553 !important'}}>
        <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          
          <div className="d-flex align-items-center gap-2 text-white" style={{fontSize: '13px'}}>
            <BiHome size={18} />
            <span>&copy; {new Date().getFullYear()} HomeBazz. All rights reserved.</span>
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-3" style={{fontSize: '13px'}}>
            <Link to="/privacy" className="text-white text-decoration-none hover-underline">Privacy Policy</Link>
            <span className="text-secondary">|</span>
            <Link to="/terms" className="text-white text-decoration-none hover-underline">Terms of Service</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
