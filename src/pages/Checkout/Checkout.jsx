import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <div className="amz-checkout-page" style={{backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '40px'}}>
      
      {/* Header */}
      <header className="border-bottom py-3 mb-4" style={{backgroundColor: '#f3f3f3'}}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none">
              <h2 className="m-0 fw-bold" style={{color: '#0F1111'}}>HomeBazz <span style={{fontWeight: 'normal', color: '#565959', fontSize: '18px'}}>Checkout</span></h2>
            </Link>
            <BiCheckCircle size={28} color="#007185" />
          </div>
        </div>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            
            {/* Left Steps */}
            <div className="col-12 col-lg-8">
              
              <div className="d-flex mb-3">
                <h3 className="fw-bold me-3" style={{fontSize: '22px', color: '#c45500'}}>1</h3>
                <div className="w-100">
                  <h3 className="fw-bold mb-3" style={{fontSize: '18px', color: '#c45500'}}>Delivery address</h3>
                  <div className="fw-bold" style={{fontSize: '14px', color: '#0F1111'}}>Sankar Rao</div>
                  <div style={{fontSize: '14px', color: '#0F1111'}}>12-4-45, Beach Road<br/>Visakhapatnam, ANDHRA PRADESH 530016<br/>Add delivery instructions</div>
                </div>
                <div className="text-end" style={{minWidth: '70px'}}>
                  <Link to="#" className="text-decoration-none" style={{color: '#007185', fontSize: '13px'}}>Change</Link>
                </div>
              </div>
              <hr />

              <div className="d-flex mb-3">
                <h3 className="fw-bold me-3" style={{fontSize: '22px', color: '#0F1111'}}>2</h3>
                <div className="w-100">
                  <h3 className="fw-bold mb-3" style={{fontSize: '18px', color: '#0F1111'}}>Select a payment method</h3>
                  
                  <div className="border rounded p-3 mb-2" style={{borderColor: '#d5d9d9', backgroundColor: '#fcfcfc'}}>
                    <div className="form-check d-flex align-items-center gap-2 mb-2">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay1" defaultChecked />
                      <label className="form-check-label fw-bold" htmlFor="pay1" style={{fontSize: '14px', color: '#0F1111'}}>
                        Credit or debit card
                      </label>
                    </div>
                    <div className="ms-4 mb-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" style={{height: '20px'}} className="me-2 border p-1 rounded bg-white" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" style={{height: '20px'}} className="border p-1 rounded bg-white" />
                    </div>
                    
                    <div className="form-check d-flex align-items-center gap-2 mb-2">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay2" />
                      <label className="form-check-label fw-bold" htmlFor="pay2" style={{fontSize: '14px', color: '#0F1111'}}>
                        Net Banking
                      </label>
                    </div>

                    <div className="form-check d-flex align-items-center gap-2 mb-2">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay3" />
                      <label className="form-check-label fw-bold" htmlFor="pay3" style={{fontSize: '14px', color: '#0F1111'}}>
                        Other UPI Apps
                      </label>
                    </div>

                    <div className="form-check d-flex align-items-center gap-2 mb-0">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay4" />
                      <label className="form-check-label fw-bold" htmlFor="pay4" style={{fontSize: '14px', color: '#0F1111'}}>
                        Cash On Delivery/Pay On Delivery
                      </label>
                    </div>
                  </div>

                </div>
              </div>
              <hr />

              <div className="d-flex mb-3">
                <h3 className="fw-bold me-3" style={{fontSize: '22px', color: '#0F1111'}}>3</h3>
                <div className="w-100">
                  <h3 className="fw-bold mb-3" style={{fontSize: '18px', color: '#0F1111'}}>Items and delivery</h3>
                  
                  <div className="border rounded p-3 mb-3" style={{borderColor: '#d5d9d9'}}>
                    <h5 className="fw-bold mb-3" style={{color: '#007185', fontSize: '16px'}}>Delivery date: Tomorrow</h5>
                    <div className="mb-2" style={{fontSize: '12px', color: '#565959'}}>Items dispatched by HomeBazz</div>
                    
                    {items.map(item => (
                      <div key={item.id} className="d-flex gap-3 mb-3 pb-3 border-bottom">
                        <img src={item.image} alt="item" className="object-fit-contain" style={{width: '60px', height: '60px'}} />
                        <div>
                          <div className="fw-bold mb-1" style={{fontSize: '14px', color: '#0F1111'}}>{item.title}</div>
                          <div className="fw-bold text-danger mb-1" style={{fontSize: '14px'}}>₹{item.price}.00</div>
                          <div className="fw-bold" style={{fontSize: '12px', color: '#0F1111'}}>Qty: {item.qty}</div>
                        </div>
                      </div>
                    ))}
                    
                    <button type="submit" className="btn shadow-sm py-2 px-4 rounded-pill mt-2 fw-bold" style={{backgroundColor: '#FFD814', color: '#0F1111', fontSize: '13px', border: '1px solid #FCD200'}}>
                      Place Your Order
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Summary */}
            <div className="col-12 col-lg-4">
              <div className="border rounded p-3 shadow-sm mb-3" style={{borderColor: '#d5d9d9', backgroundColor: '#fff', position: 'sticky', top: '20px'}}>
                <button type="submit" className="btn w-100 shadow-sm py-2 mb-3 rounded-pill fw-bold" style={{backgroundColor: '#FFD814', color: '#0F1111', fontSize: '13px', border: '1px solid #FCD200'}}>
                  Place Your Order
                </button>
                <div className="text-center text-muted mb-3" style={{fontSize: '11px', lineHeight: '1.4'}}>
                  By placing your order, you agree to HomeBazz's <Link to="#" style={{color: '#007185', textDecoration: 'none'}}>privacy notice</Link> and <Link to="#" style={{color: '#007185', textDecoration: 'none'}}>conditions of use</Link>.
                </div>

                <h3 className="fw-bold mb-2 pb-1 border-bottom" style={{fontSize: '16px', color: '#0F1111'}}>Order Summary</h3>
                <div className="d-flex justify-content-between mb-1" style={{fontSize: '13px', color: '#0F1111'}}>
                  <span>Items:</span>
                  <span>₹{subtotal}.00</span>
                </div>
                <div className="d-flex justify-content-between mb-1" style={{fontSize: '13px', color: '#0F1111'}}>
                  <span>Delivery:</span>
                  <span>₹40.00</span>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom pb-2" style={{fontSize: '13px', color: '#0F1111'}}>
                  <span>Promotion Applied:</span>
                  <span>-₹40.00</span>
                </div>
                <div className="d-flex justify-content-between mb-3 fw-bold" style={{fontSize: '18px', color: '#b12704'}}>
                  <span>Order Total:</span>
                  <span>₹{subtotal}.00</span>
                </div>

                <div className="p-2 border rounded" style={{backgroundColor: '#f3f3f3', fontSize: '12px', color: '#0F1111'}}>
                  <Link to="#" className="text-decoration-none" style={{color: '#007185'}}>How are delivery costs calculated?</Link>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
