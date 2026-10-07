import React from 'react';
import { Link } from 'react-router-dom';
import { BiX, BiUserCircle, BiChevronRight } from 'react-icons/bi';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
      <div className={`sidebar-container bg-white ${isOpen ? 'open' : ''}`}>
        
        {/* Sidebar Header */}
        <div className="sidebar-header d-flex align-items-center p-3 text-white" style={{backgroundColor: 'rgb(154, 140, 209)'}}>
          <BiUserCircle size={32} className="me-2" />
          <h5 className="mb-0 fw-bold">Hello, sign in</h5>
          <button className="btn-close btn-close-white ms-auto" onClick={onClose} aria-label="Close"></button>
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content overflow-auto" style={{height: 'calc(100vh - 65px)'}}>
          
          <div className="sidebar-section py-3">
            <h6 className="px-4 mb-3 fw-bold text-dark fs-5">Trending</h6>
            <Link to="/shop" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Bestsellers
            </Link>
            <Link to="/shop" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              New Releases
            </Link>
          </div>
          
          <hr className="my-1 text-muted" />

          <div className="sidebar-section py-3">
            <h6 className="px-4 mb-3 fw-bold text-dark fs-5">Shop by Category</h6>
            
            <Link to="/shop/food" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Food <BiChevronRight size={20} className="text-muted" />
            </Link>
            <Link to="/shop/handmade" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Handmade <BiChevronRight size={20} className="text-muted" />
            </Link>
            <Link to="/shop/art-decor" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Art & Decor <BiChevronRight size={20} className="text-muted" />
            </Link>
            <Link to="/shop/clothing" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Clothing <BiChevronRight size={20} className="text-muted" />
            </Link>
            <Link to="/shop/jewellery" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Jewellery <BiChevronRight size={20} className="text-muted" />
            </Link>
            <Link to="/shop/home-accessories" className="sidebar-link d-flex align-items-center justify-content-between px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Home Accessories <BiChevronRight size={20} className="text-muted" />
            </Link>
          </div>

          <hr className="my-1 text-muted" />

          <div className="sidebar-section py-3">
            <h6 className="px-4 mb-3 fw-bold text-dark fs-5">Help & Settings</h6>
            <Link to="/account" className="sidebar-link d-flex align-items-center px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Your Account
            </Link>
            <Link to="/support" className="sidebar-link d-flex align-items-center px-4 py-2 text-decoration-none text-dark" onClick={onClose}>
              Customer Service
            </Link>
            <div className="sidebar-link d-flex align-items-center px-4 py-2 text-dark cursor-pointer" onClick={onClose}>
              Sign in
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
