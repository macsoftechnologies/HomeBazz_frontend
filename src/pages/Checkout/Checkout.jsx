import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCheckCircle, BiLockAlt } from 'react-icons/bi';
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
      <header className="bg-white border-bottom shadow-sm py-3 mb-4 sticky-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none d-flex align-items-center">
              <h2 className="m-0 fw-bolder text-primary me-3" style={{letterSpacing: '-0.5px'}}>HomeBazz</h2>
              <span className="fw-semibold text-muted border-start ps-3 fs-5 d-flex align-items-center gap-1">
                <BiLockAlt size={22} className="text-success" /> Secure Checkout
              </span>
            </Link>
            <BiCheckCircle size={32} className="text-primary d-none d-sm-block" />
          </div>
        </div>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            
            {/* Left Steps */}
            <div className="col-12 col-lg-8">
              
              {/* Step 1 */}
              <div className="d-flex mb-4 bg-white p-4 rounded-4 shadow-sm border-0">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '32px', height: '32px', fontSize: '16px', fontWeight: 'bold'}}>1</div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h3 className="fw-bold mb-0" style={{fontSize: '18px', color: '#333'}}>Delivery address</h3>
                    <Link to="#" className="text-decoration-none fw-semibold text-primary" style={{fontSize: '13px'}}>Change</Link>
                  </div>
                  <div className="p-3 bg-light rounded-3 border">
                    <div className="fw-bold mb-1" style={{fontSize: '14px', color: '#111'}}>Sankar Rao</div>
                    <div className="text-muted" style={{fontSize: '14px'}}>
                      12-4-45, Beach Road<br/>Visakhapatnam, ANDHRA PRADESH 530016
                    </div>
                    <div className="mt-2 pt-2 border-top">
                      <Link to="#" className="text-decoration-none text-primary" style={{fontSize: '13px'}}>Add delivery instructions</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="d-flex mb-4 bg-white p-4 rounded-4 shadow-sm border-0">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '32px', height: '32px', fontSize: '16px', fontWeight: 'bold'}}>2</div>
                <div className="w-100">
                  <h3 className="fw-bold mb-3" style={{fontSize: '18px', color: '#333'}}>Select a payment method</h3>
                  
                  <div className="border rounded-3 p-3 mb-2 bg-light">
                    <div className="form-check d-flex align-items-center gap-2 mb-3">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay1" defaultChecked />
                      <label className="form-check-label fw-bold text-dark" htmlFor="pay1" style={{fontSize: '14px'}}>
                        Credit or Debit Card
                      </label>
                    </div>
                    
                    <div className="form-check d-flex align-items-center gap-2 mb-3">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay2" />
                      <label className="form-check-label fw-bold text-dark" htmlFor="pay2" style={{fontSize: '14px'}}>
                        Net Banking
                      </label>
                    </div>

                    <div className="form-check d-flex align-items-center gap-2 mb-3">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay3" />
                      <label className="form-check-label fw-bold text-dark" htmlFor="pay3" style={{fontSize: '14px'}}>
                        UPI Apps (GPay, PhonePe)
                      </label>
                    </div>

                    <div className="form-check d-flex align-items-center gap-2 mb-0">
                      <input className="form-check-input mt-0" type="radio" name="payment" id="pay4" />
                      <label className="form-check-label fw-bold text-dark" htmlFor="pay4" style={{fontSize: '14px'}}>
                        Cash On Delivery
                      </label>
                    </div>
                  </div>

                </div>
              </div>

              {/* Step 3 */}
              <div className="d-flex mb-3 bg-white p-4 rounded-4 shadow-sm border-0">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '32px', height: '32px', fontSize: '16px', fontWeight: 'bold'}}>3</div>
                <div className="w-100">
                  <h3 className="fw-bold mb-3" style={{fontSize: '18px', color: '#333'}}>Items and delivery</h3>
                  
                  <div className="border rounded-3 p-3 mb-3 bg-light">
                    <h5 className="fw-bold text-success mb-3" style={{fontSize: '15px'}}>Estimated Delivery: Tomorrow</h5>
                    
                    {items.map(item => (
                      <div key={item.id} className="d-flex gap-3 mb-3 pb-3 border-bottom">
                        <div className="bg-white p-1 rounded border flex-shrink-0">
                          <img src={item.image} alt="item" className="object-fit-contain rounded" style={{width: '60px', height: '60px'}} />
                        </div>
                        <div>
                          <div className="fw-bold mb-1" style={{fontSize: '14px', color: '#111'}}>{item.title}</div>
                          <div className="fw-bold text-primary mb-1" style={{fontSize: '14px'}}>₹{item.price}.00</div>
                          <div className="text-muted fw-semibold" style={{fontSize: '12px'}}>Qty: {item.qty}</div>
                        </div>
                      </div>
                    ))}
                    
                    <button type="submit" className="btn btn-primary shadow-sm py-2 px-4 rounded-pill mt-2 fw-bold w-100 w-sm-auto">
                      Confirm & Place Order
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Summary */}
            <div className="col-12 col-lg-4">
              <div className="bg-white border-0 rounded-4 p-4 shadow-sm mb-3" style={{position: 'sticky', top: '100px'}}>
                <h3 className="fw-bold mb-3 pb-2 border-bottom" style={{fontSize: '16px', color: '#333'}}>Order Summary</h3>
                <div className="d-flex justify-content-between mb-2 text-muted" style={{fontSize: '14px'}}>
                  <span>Items:</span>
                  <span className="fw-semibold text-dark">₹{subtotal}.00</span>
                </div>
                <div className="d-flex justify-content-between mb-2 text-muted" style={{fontSize: '14px'}}>
                  <span>Delivery:</span>
                  <span className="fw-semibold text-dark">₹40.00</span>
                </div>
                <div className="d-flex justify-content-between mb-3 pb-3 border-bottom text-muted" style={{fontSize: '14px'}}>
                  <span>Promotion Applied:</span>
                  <span className="fw-semibold text-success">-₹40.00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-bold fs-5 text-dark">Order Total:</span>
                  <span className="fw-bold fs-4 text-primary">₹{subtotal}.00</span>
                </div>

                <button type="submit" className="btn btn-primary w-100 shadow-sm py-2 mb-3 rounded-pill fw-bold" style={{fontSize: '15px'}}>
                  Place Your Order
                </button>
                <div className="text-center text-muted mb-4" style={{fontSize: '11px', lineHeight: '1.5'}}>
                  By placing your order, you agree to HomeBazz's <Link to="#" className="text-primary text-decoration-none">privacy notice</Link> and <Link to="#" className="text-primary text-decoration-none">conditions of use</Link>.
                </div>

                <div className="p-3 bg-light rounded-3 text-center" style={{fontSize: '12px'}}>
                  <Link to="#" className="text-decoration-none text-muted fw-semibold">How are delivery costs calculated?</Link>
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
