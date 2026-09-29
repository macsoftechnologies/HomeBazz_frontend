import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../../data/dummyData';
import { BiStar, BiShareAlt, BiMap, BiLockAlt, BiChevronRight, BiLocationPlus, BiPlus } from 'react-icons/bi';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  
  const product = products.find(p => p.id === id) || products[0];
  const mrp = product.price + 500;
  const discount = Math.round(((mrp - product.price) / mrp) * 100);

  const handleAddToCart = (redirect = false) => {
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
        discount: '-'+discount+'%'
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    if (redirect) {
      navigate('/cart');
    }
  };

  // Generate an array of 5 images for the Amazon look
  const galleryImages = [
    product.images[0],
    product.images[0],
    product.images[0],
    product.images[0],
    product.images[0]
  ];

  return (
    <div className="amz-detail-page bg-white min-vh-100 pb-5" style={{fontFamily: 'Arial, sans-serif', color: '#0F1111'}}>
      
      {/* Top Bar / Breadcrumb */}
      <div className="container-fluid px-3 px-xl-4 py-2" style={{fontSize: '12px'}}>
        <div className="d-flex justify-content-between">
          <div className="text-muted">
            <Link to="/" className="text-decoration-none" style={{color: '#565959'}}>Home</Link> <BiChevronRight size={14} /> 
            <Link to="/shop" className="text-decoration-none" style={{color: '#565959'}}>{product.category}</Link> <BiChevronRight size={14} /> 
            <span style={{color: '#565959'}}>{product.name}</span>
          </div>
          <div className="text-muted">Sponsored <span style={{fontSize: '10px'}} className="border rounded px-1">i</span></div>
        </div>
      </div>

      <div className="container-fluid px-3 px-xl-4 pt-2">
        <div className="row">
          
          {/* ─── LEFT COLUMN: IMAGES ─── */}
          <div className="col-12 col-lg-5 mb-4 position-relative">
            <div className="d-flex gap-2">
              <div className="d-flex flex-column gap-2" style={{width: '50px'}}>
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`border rounded cursor-pointer overflow-hidden ${activeImage === idx ? 'border-primary shadow-sm' : 'border-secondary'}`} 
                    style={{height: '50px', width: '50px', borderColor: activeImage === idx ? '#007185' : '#e7e7e7', borderWidth: activeImage === idx ? '2px' : '1px'}}
                    onMouseEnter={() => setActiveImage(idx)}
                  >
                    <img src={img} alt="thumbnail" className="w-100 h-100 object-fit-cover mix-blend-multiply" />
                  </div>
                ))}
              </div>
              <div className="flex-grow-1 text-center position-relative bg-light rounded" style={{height: '500px'}}>
                <button className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center p-2 border" style={{width: '35px', height: '35px'}}>
                  <BiShareAlt size={18} />
                </button>
                <img src={galleryImages[activeImage]} alt={product.name} className="w-100 h-100 object-fit-contain p-3 mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* ─── MIDDLE COLUMN: DETAILS ─── */}
          <div className="col-12 col-lg-4 col-xl-5 mb-4 px-lg-4">
            <Link to={`/store/${product.makerId}`} className="text-decoration-none" style={{color: '#007185', fontSize: '14px'}}>
              Visit the {product.maker.storeName} Store
            </Link>
            
            <h1 className="fw-bold mb-2 mt-1" style={{fontSize: '24px', lineHeight: '1.3', color: '#0F1111'}}>
              {product.maker.storeName} {product.name} {product.description}
            </h1>
            
            <div className="d-flex align-items-center gap-1 mb-1">
              <span style={{fontSize: '14px'}}>{product.rating}</span>
              <div className="d-flex text-warning">
                <BiStar size={16} /> <BiStar size={16} /> <BiStar size={16} /> <BiStar size={16} /> <BiStar size={16} />
              </div>
              <span className="ms-2 text-decoration-none" style={{color: '#007185', fontSize: '14px'}}>({product.reviews} ratings)</span>
            </div>
            
            <div className="text-muted mb-3 pb-2 border-bottom" style={{fontSize: '14px'}}>
              <span className="fw-bold text-dark">800+ bought</span> in past month
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-baseline gap-2">
                <span className="text-danger" style={{fontSize: '28px', fontWeight: '300'}}>-{discount}%</span>
                <span className="fw-bold" style={{fontSize: '28px'}}><span style={{fontSize: '14px', position: 'relative', top: '-10px'}}>₹</span>{product.price}</span>
              </div>
              <div className="text-muted" style={{fontSize: '12px'}}>
                M.R.P.: <span className="text-decoration-line-through">₹{mrp}</span>
              </div>
              <div className="fw-bold mt-1" style={{fontSize: '14px'}}>Inclusive of all taxes</div>
            </div>

            {/* Offers Box */}
            <div className="mb-4">
              <h6 className="fw-bold d-flex align-items-center gap-2 mb-2" style={{fontSize: '14px'}}><span className="border border-dark rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '18px', height: '18px'}}>%</span> Offers</h6>
              <div className="d-flex gap-2 overflow-auto pb-2 amz-scrollbar">
                <div className="border rounded p-2 flex-shrink-0 shadow-sm" style={{width: '140px'}}>
                  <div className="fw-bold" style={{fontSize: '13px'}}>Cashback</div>
                  <div style={{fontSize: '12px'}}>Upto ₹5.00 cashback as Amazon Pay Balance when you...</div>
                </div>
                <div className="border rounded p-2 flex-shrink-0 shadow-sm" style={{width: '140px'}}>
                  <div className="fw-bold" style={{fontSize: '13px'}}>Bank Offer</div>
                  <div style={{fontSize: '12px'}}>Upto ₹1,250.00 discount on select Credit Cards</div>
                </div>
                <div className="border rounded p-2 flex-shrink-0 shadow-sm" style={{width: '140px'}}>
                  <div className="fw-bold" style={{fontSize: '13px'}}>Partner Offers</div>
                  <div style={{fontSize: '12px'}}>Get GST invoice and save up to 28% on business...</div>
                </div>
              </div>
            </div>

            {/* Color variants (Dummy) */}
            <div className="mb-4">
              <div style={{fontSize: '14px'}} className="mb-2">Colour: <strong>Default</strong></div>
              <div className="d-flex gap-2">
                <div className="border border-warning rounded p-1 text-center" style={{width: '70px', backgroundColor: '#fafafa', cursor: 'pointer'}}>
                  <img src={product.images[0]} alt="color 1" className="w-100 object-fit-contain mix-blend-multiply mb-1" style={{height: '50px'}} />
                  <div style={{fontSize: '12px'}}>₹{product.price}</div>
                </div>
                <div className="border rounded p-1 text-center" style={{width: '70px', backgroundColor: '#fff', cursor: 'pointer'}}>
                  <img src={product.images[0]} alt="color 2" className="w-100 object-fit-contain mix-blend-multiply mb-1" style={{height: '50px', filter: 'hue-rotate(90deg)'}} />
                  <div style={{fontSize: '12px'}}>₹{product.price + 50}</div>
                </div>
                <div className="border rounded p-1 text-center" style={{width: '70px', backgroundColor: '#fff', cursor: 'pointer'}}>
                  <img src={product.images[0]} alt="color 3" className="w-100 object-fit-contain mix-blend-multiply mb-1" style={{height: '50px', filter: 'hue-rotate(180deg)'}} />
                  <div style={{fontSize: '12px'}}>₹{product.price + 10}</div>
                </div>
              </div>
            </div>

            <hr />

            {/* Product Details Highlights */}
            <div className="mb-4">
              <h3 className="fw-bold mb-3" style={{fontSize: '18px'}}>Product details</h3>
              <table className="table table-borderless table-sm mb-0" style={{fontSize: '14px'}}>
                <tbody>
                  <tr><td className="fw-bold text-dark" style={{width: '35%'}}>Category</td><td>{product.category}</td></tr>
                  <tr><td className="fw-bold text-dark">Brand</td><td>{product.maker.storeName}</td></tr>
                  <tr><td className="fw-bold text-dark">Item Weight</td><td>200 Grams</td></tr>
                  <tr><td className="fw-bold text-dark">Origin</td><td>India</td></tr>
                </tbody>
              </table>
            </div>
            
            <hr />

            {/* About this item */}
            <div className="mb-4">
              <h3 className="fw-bold mb-3" style={{fontSize: '16px'}}>About this item</h3>
              <ul style={{fontSize: '14px', lineHeight: '1.5'}}>
                <li className="mb-1">{product.description}</li>
                <li className="mb-1">Recommended for customers looking for authentic quality.</li>
                <li className="mb-1">Made with premium ingredients and materials.</li>
                <li className="mb-1">100% genuine product from {product.maker.storeName}.</li>
              </ul>
              <Link to="#" className="text-decoration-none d-flex align-items-center gap-1" style={{color: '#007185', fontSize: '14px'}}>
                <BiChevronDown size={18} /> See more
              </Link>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: BUY BOX ─── */}
          <div className="col-12 col-lg-3 col-xl-2">
            <div className="border rounded p-3 mb-3 shadow-sm bg-white" style={{position: 'sticky', top: '20px'}}>
              <div className="mb-2">
                <span className="fw-bold" style={{fontSize: '22px'}}><span style={{fontSize: '12px', verticalAlign: 'top', position: 'relative', top: '3px'}}>₹</span>{product.price}<span style={{fontSize: '12px', verticalAlign: 'top', position: 'relative', top: '3px'}}>00</span></span>
              </div>
              
              <div className="mb-3" style={{fontSize: '14px'}}>
                <span className="text-dark">FREE delivery <strong>Wednesday, 30 September</strong></span>
                <br/>
                <span className="text-muted">Order within 5 hrs. <Link to="#" style={{color: '#007185'}}>Details</Link></span>
              </div>

              <div className="mb-3 d-flex align-items-start gap-1" style={{fontSize: '13px', color: '#007185'}}>
                <BiLocationPlus size={16} className="mt-1" />
                <span>Delivering to Visakhapatnam 530001 - Update location</span>
              </div>

              <h5 className="mb-3 fw-bold" style={{color: '#007600', fontSize: '18px'}}>In stock</h5>

              <div className="mb-3">
                <button onClick={() => handleAddToCart(false)} className="btn w-100 rounded-pill fw-bold border-0 shadow-sm mb-2" style={{backgroundColor: '#5742e8', color: '#fff', fontSize: '14px', padding: '10px 0'}}>
                  Add to cart
                </button>
                <button onClick={() => handleAddToCart(true)} className="btn w-100 rounded-pill fw-bold border-0 shadow-sm" style={{backgroundColor: '#FFA41C', color: '#0F1111', fontSize: '14px', padding: '10px 0'}}>
                  Buy Now
                </button>
              </div>

              <div className="d-flex align-items-center gap-2 mb-3 text-muted" style={{fontSize: '13px'}}>
                <BiLockAlt size={16} /> Secure transaction
              </div>

              <table className="table table-borderless table-sm mb-3" style={{fontSize: '12px'}}>
                <tbody>
                  <tr><td className="text-muted p-0 pb-1" style={{width: '70px'}}>Ships from</td><td className="p-0 pb-1 text-dark">HomeBazz</td></tr>
                  <tr><td className="text-muted p-0 pb-1">Sold by</td><td className="p-0 pb-1"><Link to="#" style={{color: '#007185'}}>{product.maker.storeName}</Link></td></tr>
                  <tr><td className="text-muted p-0 pb-1">Gift options</td><td className="p-0 pb-1"><Link to="#" style={{color: '#007185'}}>Available at checkout</Link></td></tr>
                </tbody>
              </table>

              <hr />

              <div className="mb-3" style={{fontSize: '13px'}}>
                <strong>Add a Protection Plan:</strong>
                <div className="form-check mt-1">
                  <input className="form-check-input" type="checkbox" id="warranty1" />
                  <label className="form-check-label text-muted" htmlFor="warranty1">
                    <Link to="#" style={{color: '#007185'}}>1 Year Extended Warranty</Link> for <strong>₹79.00</strong>
                  </label>
                </div>
              </div>

              <button className="btn btn-outline-secondary w-100 rounded shadow-sm bg-white text-dark py-1" style={{fontSize: '13px', borderColor: '#D5D9D9'}}>
                Add to Wish List
              </button>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM SECTION: FREQUENTLY BOUGHT TOGETHER ─── */}
        <div className="row mt-5 border-top pt-4">
          <div className="col-12">
            <h2 className="fw-bold mb-4" style={{fontSize: '20px', color: '#c45500'}}>Frequently bought together</h2>
            
            <div className="d-flex flex-wrap align-items-center gap-3">
              <div className="position-relative">
                <input type="checkbox" className="position-absolute" style={{top: '10px', right: '10px'}} defaultChecked />
                <img src={product.images[0]} alt={product.name} style={{width: '150px', height: '150px'}} className="object-fit-contain mix-blend-multiply border rounded p-2" />
              </div>
              <BiPlus size={24} className="text-muted" />
              <div className="position-relative">
                <input type="checkbox" className="position-absolute" style={{top: '10px', right: '10px'}} defaultChecked />
                <img src={product.images[0]} alt={product.name} style={{width: '150px', height: '150px', filter: 'hue-rotate(90deg)'}} className="object-fit-contain mix-blend-multiply border rounded p-2" />
              </div>
              <BiPlus size={24} className="text-muted" />
              <div className="position-relative">
                <input type="checkbox" className="position-absolute" style={{top: '10px', right: '10px'}} defaultChecked />
                <img src={product.images[0]} alt={product.name} style={{width: '150px', height: '150px', filter: 'hue-rotate(180deg)'}} className="object-fit-contain mix-blend-multiply border rounded p-2" />
              </div>

              <div className="ms-4 p-3 border rounded shadow-sm bg-white">
                <div style={{fontSize: '14px'}} className="mb-2">Total price: <span className="fw-bold" style={{color: '#B12704'}}>₹{(product.price * 3) - 100}</span></div>
                <button className="btn rounded-pill fw-bold border-0 shadow-sm px-4 py-1" style={{backgroundColor: '#FFD814', color: '#0F1111', fontSize: '13px'}}>
                  Add all 3 to Cart
                </button>
              </div>
            </div>

            <div className="mt-4" style={{fontSize: '14px', lineHeight: '1.6'}}>
              <div className="d-flex align-items-center gap-1 mb-1">
                <span className="fw-bold">This item:</span> {product.name} - <span style={{color: '#B12704'}}>₹{product.price}</span>
              </div>
              <div className="d-flex align-items-center gap-1 mb-1 text-primary" style={{color: '#007185 !important'}}>
                Other Product 1 - <span style={{color: '#B12704'}}>₹{product.price + 50}</span>
              </div>
              <div className="d-flex align-items-center gap-1 text-primary" style={{color: '#007185 !important'}}>
                Other Product 2 - <span style={{color: '#B12704'}}>₹{product.price + 10}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Simple down chevron icon since we can't do multiple imports in this write
const BiChevronDown = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
  </svg>
);

export default PropertyDetails;
