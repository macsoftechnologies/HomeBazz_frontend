import React from 'react';
import { Link } from 'react-router-dom';
import { BiHeart, BiStar, BiCartAdd } from 'react-icons/bi';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card shadow-hover position-relative">
      {/* Wishlist Button */}
      <button className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center p-0" style={{ width: '36px', height: '36px', zIndex: 10 }}>
        <BiHeart size={20} className="text-muted" />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="position-relative bg-light" style={{ height: '220px' }}>
          <img loading="lazy" src={product.images[0]} alt={product.name} className="w-100 h-100 object-fit-cover" />
        </div>
      </Link>

      <div className="card-body p-3 d-flex flex-column">
        {/* Category & Rating */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-primary fw-semibold">{product.subCategory || product.category}</small>
          <div className="d-flex align-items-center text-warning small fw-bold">
            <BiStar size={14} className="me-1" />
            <span className="text-dark">{product.rating}</span>
            <span className="text-muted fw-normal ms-1">({product.reviews})</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
          <h5 className="card-title fw-bold mb-1 fs-6 text-truncate" title={product.name}>{product.name}</h5>
        </Link>
        
        {/* Maker */}
        <p className="text-muted small mb-3 text-truncate">By {product.maker.name}</p>

        {/* Badges */}
        <div className="d-flex gap-1 mb-3 flex-wrap">
          {product.badges?.map((badge, idx) => (
            <span key={idx} className="badge bg-soft-lavender text-primary rounded-pill fw-normal" style={{ fontSize: '0.7rem' }}>
              {badge}
            </span>
          ))}
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold text-dark">₹{product.price}</h5>
          <button className="btn btn-primary rounded-pill px-3 py-1 btn-sm d-flex align-items-center gap-1">
            <BiCartAdd size={18} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
