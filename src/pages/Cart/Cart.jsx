import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiChevronDown, BiStar, BiCheckCircle, BiTrash } from 'react-icons/bi';
import Food1 from '../../assets/images/Food/Food1.jpg';
import Food2 from '../../assets/images/Food/Food2.jpg';
import Food3 from '../../assets/images/Food/Food3.jpg';
import Food4 from '../../assets/images/Food/Food4.jpg';
import './Cart.css';

const defaultItems = [
  {
    id: 'p1',
    title: 'Lakshmi\'s Home Kitchen Gongura Pickle Traditional Andhra style gongura pickle made with fresh ingredients',
    image: Food1,
    inStock: true,
    delivery: 'Wed, 30 Sept',
    gift: false,
    color: 'Default',
    qty: 1,
    price: 250,
    mrp: 750,
    discount: '-67%',
    saveText: 'Save 2%'
  },
  {
    id: 'p2',
    title: 'Homemade Sweet Mango Pickle 500g Authentic Taste',
    image: Food2,
    inStock: true,
    delivery: 'Wed, 30 Sept',
    gift: false,
    color: 'Default',
    qty: 1,
    price: 220,
    mrp: 300,
    dealBadge: 'Sale Price Live',
    discount: '-27%'
  }
];

const recommendedItems = [
  {
    id: 'r1',
    title: 'Spicy Garlic Pickle 250g...',
    image: Food3,
    rating: 4.5,
    reviews: '1,182',
    price: 150,
    mrp: 200,
    discount: '-25%',
    delivery: 'Wednesday, September 30'
  },
  {
    id: 'r2',
    title: 'Andhra Style Tomato Pickle...',
    image: Food4,
    rating: 4,
    reviews: '598',
    price: 199,
    mrp: 299,
    discount: '-33%',
    delivery: 'Wednesday, September 30'
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaultItems;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    window.dispatchEvent(new Event('cartUpdated'));
  }, [items]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addToCart = (recItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === recItem.id);
      if (existingItem) {
        return prevItems.map(item => item.id === recItem.id ? { ...item, qty: item.qty + 1 } : item);
      } else {
        return [...prevItems, {
          id: recItem.id,
          title: recItem.title,
          image: recItem.image,
          inStock: true,
          delivery: 'Tomorrow',
          gift: false,
          color: 'Default',
          qty: 1,
          price: recItem.price,
          mrp: recItem.mrp,
          discount: recItem.discount
        }];
      }
    });
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="amz-cart-page" style={{backgroundColor: '#e3e6e6', minHeight: '100vh', padding: '20px 0'}}>
      <div className="container-fluid px-3 px-xl-4">
        <div className="row">
          
          {/* LEFT COLUMN: Shopping Cart */}
          <div className="col-12 col-lg-9 mb-4">
            <div className="bg-white p-4 shadow-sm h-100">
              <div className="d-flex justify-content-between align-items-end border-bottom pb-2 mb-3">
                <h1 className="fw-normal mb-0" style={{fontSize: '28px', color: '#0F1111'}}>Shopping Cart</h1>
                <span className="text-muted" style={{fontSize: '14px'}}>Price</span>
              </div>

              {items.map((item, index) => (
                <div key={item.id} className={`d-flex flex-wrap flex-md-nowrap gap-3 py-3 ${index !== items.length - 1 ? 'border-bottom' : ''}`}>
                  
                  {/* Image */}
                  <div className="flex-shrink-0" style={{width: '180px'}}>
                    <img loading="lazy" src={item.image} alt="product" className="w-100 object-fit-contain mix-blend-multiply" style={{maxHeight: '180px'}} />
                  </div>

                  {/* Details */}
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between mb-1">
                      <h4 className="mb-1 fw-normal lh-sm pe-3" style={{fontSize: '18px', color: '#0F1111', maxWidth: '600px'}}>
                        {item.title}
                      </h4>
                      <div className="text-end flex-shrink-0">
                        {item.dealBadge && <div className="text-danger fw-bold mb-1" style={{fontSize: '12px'}}>{item.dealBadge}</div>}
                        <div className="d-flex align-items-baseline justify-content-end gap-1">
                          {item.discount && <span className="text-white px-1 rounded" style={{backgroundColor: '#cc0c39', fontSize: '12px'}}>{item.discount}</span>}
                          <span className="fw-bold" style={{fontSize: '18px'}}><span style={{fontSize: '12px', verticalAlign: 'top', position: 'relative', top: '3px'}}>₹</span>{item.price}<span style={{fontSize: '12px', verticalAlign: 'top', position: 'relative', top: '3px'}}>00</span></span>
                        </div>
                        {item.mrp && <div className="text-muted" style={{fontSize: '12px'}}>M.R.P.: <span className="text-decoration-line-through">₹{item.mrp}.00</span></div>}
                        
                        {item.saveText && (
                          <div className="border rounded mt-1 d-inline-block px-2 py-1 text-center bg-light shadow-sm cursor-pointer" style={{fontSize: '11px', color: '#0F1111'}}>
                            {item.saveText} <BiChevronDown size={14} />
                            <div style={{color: '#007185', fontSize: '10px', marginTop: '2px'}}>Collect Coupon</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-1" style={{color: '#007600', fontSize: '12px'}}>In stock</div>
                    <div className="mb-1 text-dark" style={{fontSize: '12px'}}>
                      FREE delivery <strong>{item.delivery}</strong>
                    </div>
                    
                    <div className="mb-1">
                      <span className="bg-dark text-white fw-bold px-1 rounded d-inline-flex align-items-center" style={{fontSize: '10px', padding: '2px 4px'}}>
                        <span className="me-1">✓</span> Fulfilled
                      </span>
                    </div>

                    <div className="mb-2 d-flex align-items-center gap-1">
                      <input type="checkbox" id={`gift-${item.id}`} style={{width: '13px', height: '13px'}} />
                      <label htmlFor={`gift-${item.id}`} style={{fontSize: '12px', color: '#0F1111'}}>This will be a gift <Link to="#" style={{color: '#007185', textDecoration: 'none'}}>Learn more</Link></label>
                    </div>

                    <div className="fw-bold mb-3" style={{fontSize: '12px'}}>
                      Colour: <span className="fw-normal">{item.color}</span>
                    </div>

                    <div className="d-flex align-items-center flex-wrap gap-2 mt-3" style={{fontSize: '13px'}}>
                      
                      {/* Qty Box */}
                      <div className="d-flex align-items-center border rounded shadow-sm overflow-hidden" style={{borderColor: '#d5d9d9', height: '32px'}}>
                        <button className="btn btn-sm border-0 px-3 h-100 rounded-0 d-flex align-items-center justify-content-center" style={{backgroundColor: '#f0f2f2', fontWeight: 'bold', fontSize: '18px'}} onClick={() => updateQty(item.id, -1)}>-</button>
                        <span className="px-3 bg-white border-start border-end h-100 fw-bold d-inline-flex align-items-center justify-content-center" style={{minWidth: '45px', fontSize: '14px', borderColor: '#d5d9d9'}}>{item.qty}</span>
                        <button className="btn btn-sm border-0 px-3 h-100 rounded-0 d-flex align-items-center justify-content-center" style={{backgroundColor: '#f0f2f2', fontWeight: 'bold', fontSize: '16px'}} onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>

                      <div className="ms-3 d-flex gap-2">
                        <button className="btn btn-danger btn-sm shadow-sm d-flex align-items-center gap-1 px-3 fw-bold border-0" style={{fontSize: '12px', borderRadius: '20px', height: '32px'}} onClick={() => removeItem(item.id)}>
                          <BiTrash size={16} /> Delete
                        </button>
                        <button className="btn btn-outline-secondary btn-sm shadow-sm px-3 fw-bold" style={{fontSize: '12px', borderRadius: '20px', height: '32px', color: '#0F1111', borderColor: '#d5d9d9'}}>Save for later</button>
                        <button className="btn btn-outline-secondary btn-sm shadow-sm px-3 fw-bold" style={{fontSize: '12px', borderRadius: '20px', height: '32px', color: '#0F1111', borderColor: '#d5d9d9'}}>Share</button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
              
              <div className="text-end pt-3">
                <h5 className="fw-normal" style={{fontSize: '18px', color: '#0F1111'}}>
                  Subtotal ({totalItems} items): <span className="fw-bold">₹{subtotal}.00</span>
                </h5>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Buy Box & Recommendations */}
          <div className="col-12 col-lg-3">
            
            {/* Proceed to buy box */}
            <div className="bg-white p-3 mb-4 shadow-sm">
              <div className="mb-2 d-flex align-items-center gap-2">
                <div className="progress flex-grow-1 rounded-pill" style={{height: '8px', backgroundColor: '#e3e6e6'}}>
                  <div className="progress-bar bg-success rounded-pill" style={{width: '70%'}}></div>
                </div>
                <span className="fw-bold" style={{fontSize: '12px'}}>₹499</span>
              </div>
              <div className="d-flex align-items-start gap-1 mb-3 text-success" style={{fontSize: '12px', lineHeight: '1.4'}}>
                <BiCheckCircle size={16} className="mt-1 flex-shrink-0" />
                <span>
                  <strong>Your order is eligible for FREE Delivery.</strong><br/>
                  <span className="text-muted">Choose <Link to="#" style={{color: '#007185', textDecoration: 'none'}}>FREE Delivery</Link> option at checkout.</span>
                </span>
              </div>

              <h5 className="fw-normal mb-2" style={{fontSize: '18px', color: '#0F1111'}}>
                Subtotal ({totalItems} items): <span className="fw-bold">₹{subtotal}.00</span>
              </h5>
              
              <div className="mb-3 d-flex align-items-center gap-1">
                <input type="checkbox" id="orderGift" style={{width: '13px', height: '13px'}} />
                <label htmlFor="orderGift" style={{fontSize: '12px', color: '#0F1111'}}>This order contains a gift</label>
              </div>

              <button onClick={() => navigate('/checkout')} className="btn w-100 rounded-pill shadow-sm py-2 mb-2" style={{backgroundColor: '#5742e8', border: '1px solid #4a38c9', color: '#fff', fontSize: '13px', fontWeight: 'bold'}}>
                Proceed to Buy
              </button>
            </div>

            {/* Recommendations */}
            <div className="bg-white p-3 shadow-sm border border-light">
              <h6 className="fw-bold mb-3" style={{fontSize: '14px', lineHeight: '1.4'}}>
                Customers who bought items in your Recent History also bought
              </h6>

              <div className="d-flex flex-column gap-3">
                {recommendedItems.map(item => (
                  <div key={item.id} className="d-flex gap-2">
                    <img loading="lazy" src={item.image} alt={item.title} className="object-fit-contain mix-blend-multiply flex-shrink-0" style={{width: '80px', height: '80px'}} />
                    <div>
                      <Link to="#" className="text-decoration-none text-truncate d-block" style={{color: '#007185', fontSize: '13px', maxWidth: '140px'}}>
                        {item.title}
                      </Link>
                      <div className="d-flex align-items-center text-warning" style={{fontSize: '14px'}}>
                        <BiStar className="text-warning" />
                        <BiStar className="text-warning" />
                        <BiStar className="text-warning" />
                        <BiStar className="text-warning" />
                        <BiStar className="text-warning" style={{opacity: 0.5}} />
                        <Link to="#" className="ms-1 text-decoration-none" style={{color: '#007185', fontSize: '12px'}}>{item.reviews}</Link>
                      </div>
                      
                      <div className="d-flex align-items-baseline gap-1 mt-1 lh-1">
                        <span className="text-danger fw-light" style={{fontSize: '12px'}}>{item.discount}</span>
                        <span className="fw-bold text-dark" style={{fontSize: '14px'}}>₹{item.price}<span style={{fontSize: '10px', verticalAlign: 'top', position: 'relative', top: '2px'}}>00</span></span>
                      </div>
                      <div className="text-muted mt-1" style={{fontSize: '11px'}}>
                        M.R.P.: <span className="text-decoration-line-through">₹{item.mrp}.00</span>
                      </div>

                      <div className="text-dark mt-1" style={{fontSize: '11px', lineHeight: '1.2'}}>
                        Get it by <strong>{item.delivery}</strong><br/>
                        <span className="text-muted">FREE Delivery by Amazon</span>
                      </div>

                      <button 
                        className="btn rounded-pill mt-2 shadow-sm fw-bold" 
                        style={{backgroundColor: '#5742e8', border: '1px solid #4a38c9', color: '#fff', fontSize: '11px', padding: '3px 12px'}}
                        onClick={() => addToCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
