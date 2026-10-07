import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, categories } from '../../data/dummyData';
import { BiStar, BiChevronDown } from 'react-icons/bi';
import './Properties.css';

const Properties = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  
  // Filter products by category if present
  let filteredProducts = products;
  if (category) {
    const normCategory = category.replace('-', ' ').toLowerCase();
    filteredProducts = products.filter(p => {
      const pCat = p.category ? p.category.toLowerCase() : '';
      return pCat.includes(normCategory) || normCategory.includes(pCat);
    });
  }

  // Duplicate dummy products to fill the grid (makes it look like a real shop)
  const displayedProducts = filteredProducts.length > 0 
    ? [...filteredProducts, ...filteredProducts, ...filteredProducts, ...filteredProducts] 
    : [...products, ...products, ...products];

  const handleAddToCart = (product) => {
    let cart = [];
    try {
      const saved = localStorage.getItem('cart');
      if (saved) cart = JSON.parse(saved);
    } catch (e) {}

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.name + " " + product.description,
        image: product.images[0],
        inStock: true,
        delivery: 'Wed, 30 Sept',
        gift: false,
        color: 'Default',
        qty: 1,
        price: product.price,
        mrp: product.price + 500,
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    // Removed navigate('/cart') as per user request
  };

  return (
    <div className="amz-shop-page pb-5" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>


      {/* Top Banner / Results Info */}
      <div className="amz-results-bar border-bottom py-2 shadow-sm mb-3">
        <div className="container-fluid px-3 px-md-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold" style={{ fontSize: '14px', color: '#0F1111' }}>1-48 of over 10,000 results</span>
            <div className="amz-sort-dropdown border rounded px-2 py-1 shadow-sm" style={{ fontSize: '13px', backgroundColor: '#F0F2F2', cursor: 'pointer' }}>
              Sort by: <span className="fw-bold">Featured</span> <BiChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-4">
        <div className="row">
          
          {/* ─── LEFT SIDEBAR (FILTERS) ─── */}
          <div className="col-12 col-md-3 col-xl-2 d-none d-md-block amz-sidebar border-end pe-4">
            
            <div className="filter-group mb-4">
              <h6 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Eligible for Free Shipping</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="freeShipping" />
                <label className="form-check-label" htmlFor="freeShipping" style={{fontSize: '14px', color: '#0F1111'}}>
                  Free Shipping
                </label>
              </div>
            </div>

            <div className="filter-group mb-4">
              <h6 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Category</h6>
              <ul className="list-unstyled ms-2" style={{fontSize: '14px', color: '#0F1111', lineHeight: '1.8'}}>
                <li>&lt; Any Category</li>
                <li className="fw-bold ms-2">Products</li>
                <li className="ms-3">Food & Snacks</li>
                <li className="ms-3">Handmade Crafts</li>
                <li className="ms-3">Art & Decor</li>
                <li className="ms-3">Clothing</li>
                <li className="ms-3">Jewellery</li>
              </ul>
            </div>

            <div className="filter-group mb-4">
              <h6 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Brands</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="brand1" />
                <label className="form-check-label" htmlFor="brand1" style={{fontSize: '14px'}}>HomeBazz</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="brand2" />
                <label className="form-check-label" htmlFor="brand2" style={{fontSize: '14px'}}>Local Makers</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="brand3" />
                <label className="form-check-label" htmlFor="brand3" style={{fontSize: '14px'}}>Artisans</label>
              </div>
            </div>

            <div className="filter-group mb-4">
              <h6 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Price</h6>
              <ul className="list-unstyled" style={{fontSize: '14px', color: '#0F1111', lineHeight: '1.8'}}>
                <li>Under ₹250</li>
                <li>₹250 - ₹500</li>
                <li>₹500 - ₹1,000</li>
                <li>Over ₹1,000</li>
              </ul>
            </div>

            <div className="filter-group mb-4">
              <h6 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Pay On Delivery</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="cod" />
                <label className="form-check-label" htmlFor="cod" style={{fontSize: '14px'}}>Eligible for Pay On Delivery</label>
              </div>
            </div>

            <div className="filter-group mb-4">
              <h6 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Discount</h6>
              <ul className="list-unstyled" style={{fontSize: '14px', color: '#0F1111', lineHeight: '1.8'}}>
                <li>10% Off or more</li>
                <li>25% Off or more</li>
                <li>50% Off or more</li>
              </ul>
            </div>

          </div>

          {/* ─── MAIN CONTENT (RESULTS GRID) ─── */}
          <div className="col-12 col-md-9 col-xl-10">
            <h3 className="fw-bold mb-3 text-capitalize" style={{fontSize: '20px', color: '#0F1111'}}>{category ? `${category.replace('-', ' ')} Results` : 'Results'}</h3>
            <p className="text-muted mb-4" style={{fontSize: '14px'}}>Check each product page for other buying options. Price and other details may vary based on product size and colour.</p>
            
            <div className="row g-3">
              {displayedProducts.map((product, idx) => {
                // Adjusting the dummy data to fit the exact screenshot layout perfectly
                const boughtCount = "10K+ bought in past month";
                const mrp = product.price + 150;
                const discount = Math.round(((mrp - product.price) / mrp) * 100);
                const volumePrice = (product.price / 2).toFixed(2); // Dummy calculation for /100ml

                return (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" key={`${product.id}-${idx}`}>
                    <div className="amz-product-card h-100 p-2 position-relative d-flex flex-column" style={{border: '1px solid #e7e7e7', borderRadius: '4px', backgroundColor: '#fff'}}>
                      
                      {/* Image */}
                      <Link to={`/product/${product.id}`} className="text-center rounded mb-2 d-flex justify-content-center w-100 overflow-hidden" style={{height: '240px'}}>
                        <img loading="lazy" src={product.images[0]} alt={product.name} className="w-100 h-100" style={{objectFit: 'cover'}} />
                      </Link>

                      {/* Details */}
                      <div className="amz-product-details d-flex flex-column flex-grow-1 px-1">
                        
                        {/* Title */}
                        <Link to={`/product/${product.id}`} className="text-decoration-none">
                          <h2 className="amz-product-title text-dark mb-1" style={{fontSize: '15px', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title={product.name}>
                            {product.name} | {product.description} | High Quality Enriched
                          </h2>
                        </Link>

                        {/* Variant Badge */}
                        <div className="mb-1">
                          <span className="bg-light border text-dark px-1 py-1 d-inline-block" style={{fontSize: '11px'}}>{product.category || 'Variant'}</span>
                        </div>

                        {/* Rating */}
                        <div className="amz-rating d-flex align-items-center mb-1 gap-1 flex-wrap" style={{fontSize: '13px'}}>
                          <span style={{color: '#0F1111'}}>{product.rating}</span>
                          <div className="d-flex text-warning">
                            <BiStar size={14} />
                            <BiStar size={14} />
                            <BiStar size={14} />
                            <BiStar size={14} />
                            <BiStar size={14} style={{opacity: 0.5}} />
                          </div>
                          <BiChevronDown size={14} className="text-muted ms-n1" />
                          <span className="text-decoration-none ms-1" style={{color: '#007185'}}>({product.reviews}K)</span>
                        </div>

                        <div className="text-muted mb-2 text-truncate" style={{fontSize: '12px'}}>{boughtCount}</div>

                        {/* Price Block */}
                        <div className="amz-price mb-1 d-flex flex-wrap align-items-baseline gap-1" style={{lineHeight: '1.2'}}>
                          <span className="fw-bold" style={{fontSize: '22px', color: '#0F1111'}}><span style={{fontSize: '11px', verticalAlign: 'top', position: 'relative', top: '4px'}}>₹</span>{product.price}</span>
                          <span className="text-dark" style={{fontSize: '11px'}}>(₹{volumePrice}/100 ml)</span>
                          <span className="text-muted text-decoration-line-through ms-1" style={{fontSize: '11px'}}>M.R.P: ₹{mrp}</span>
                        </div>
                        
                        <div className="text-dark mb-1" style={{fontSize: '11px'}}>
                          ({discount}% off)
                        </div>

                        <div className="mb-2" style={{fontSize: '12px', color: '#0F1111'}}>
                          Up to 5% back with Amazon Pay ICICI card
                        </div>

                        <div className="mb-3" style={{fontSize: '12px', color: '#0F1111'}}>
                          <span className="fw-bold text-truncate d-block">FREE delivery <span className="fw-bold">Sat, 3 Oct</span></span>
                          <span className="text-dark">Or fastest delivery <strong>Today 5 pm - 7 pm</strong></span>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="mt-auto pt-2">
                          <button onClick={(e) => { e.preventDefault(); handleAddToCart(product); }} className="amz-add-btn w-100 rounded-pill fw-bold border-0 shadow-sm py-2" style={{backgroundColor: '#5742e8', color: '#fff', fontSize: '13px'}}>
                            Add to cart
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Properties;
