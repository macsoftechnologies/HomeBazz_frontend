import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCheck, BiEnvelope, BiPackage, BiCalendar, BiCar, BiReceipt, BiInfoCircle, BiHeadphone, BiCheckCircle } from 'react-icons/bi';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const orderNumber = '406-1234567-8901234';

  useEffect(() => {
    // Clear the cart on successful order
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('storage'));
  }, []);

  return (
    <div className="order-conf-page">
      <div className="container py-4" style={{ maxWidth: '1200px' }}>

        {/* Top Banner */}
        <div className="oc-banner mb-4">
          <div className="oc-banner-content d-flex flex-column flex-md-row align-items-center justify-content-between p-4 px-md-5">

            <div className="d-flex align-items-center gap-4 mb-4 mb-md-0">
              <div className="oc-success-icon-wrapper">
                <div className="oc-success-icon">
                  <BiCheck size={48} />
                </div>
                {/* Decorative dashes around the circle */}
                <span className="oc-dash d1"></span>
                <span className="oc-dash d2"></span>
                <span className="oc-dash d3"></span>
                <span className="oc-dash d4"></span>
                <span className="oc-dash d5"></span>
                <span className="oc-dash d6"></span>
              </div>

              <div>
                <h1 className="oc-title mb-2">Order placed, thank you!</h1>
                <p className="oc-subtitle mb-2">Your order has been successfully placed. A confirmation will be sent to your email shortly.</p>
                <Link to="#" className="oc-link d-flex align-items-center gap-2">
                  <BiEnvelope size={18} />
                  Review or edit your recent orders
                </Link>
              </div>
            </div>

            <div className="oc-banner-image d-none d-md-block">
              <img src="/grocery_bag_thank_you.jpg" alt="Thank you for shopping" style={{ width: '260px', mixBlendMode: 'multiply' }} />
            </div>

          </div>
        </div>

        {/* Content Section */}
        <div className="row g-4">

          {/* Left Column: Order Details */}
          <div className="col-12 col-lg-8">
            <div className="oc-card p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="oc-icon-box">
                  <BiPackage size={24} />
                </div>
                <h3 className="oc-section-title m-0">Order Details</h3>
                <span className="oc-badge-confirmed"><BiCheckCircle size={14} /> Confirmed</span>
              </div>

              <hr className="oc-divider mb-4" />

              <div className="row g-4 mb-5">
                <div className="col-sm-4">
                  <div className="d-flex gap-3">
                    <div className="oc-icon-box-light">
                      <BiCalendar size={20} />
                    </div>
                    <div>
                      <div className="oc-label">Order Date</div>
                      <div className="oc-value fw-bold">Tomorrow</div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="d-flex gap-3">
                    <div className="oc-icon-box-light">
                      <BiCar size={20} />
                    </div>
                    <div>
                      <div className="oc-label">Delivery to</div>
                      <div className="oc-value">
                        Sankar Rao, 12-4-45, Beach Road,<br />
                        Visakhapatnam, ANDHRA PRADESH 530016
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="d-flex gap-3">
                    <div className="oc-icon-box-light">
                      <BiReceipt size={20} />
                    </div>
                    <div>
                      <div className="oc-label">Order #</div>
                      <div className="oc-value fw-bold" style={{ color: '#007185' }}>{orderNumber}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help Banner */}
              <div className="oc-help-banner p-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div className="oc-info-icon">
                    <BiInfoCircle size={22} />
                  </div>
                  <div>
                    <h5 className="oc-help-title mb-1">Need help?</h5>
                    <p className="oc-help-text mb-0">If you have any questions about your order, feel free to contact our support team.</p>
                  </div>
                </div>
                <button className="btn oc-btn-support d-flex align-items-center gap-2 px-4 flex-shrink-0">
                  <BiHeadphone size={20} />
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Action */}
          <div className="col-12 col-lg-4">
            <div className="oc-card oc-card-grey p-4 h-100 d-flex flex-column">

              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="oc-icon-box-purple">
                  <BiCar size={24} />
                </div>
                <h3 className="oc-section-title m-0">What happens next?</h3>
              </div>
              <p className="oc-subtitle mb-4">We are currently processing your order.</p>

              <div className="oc-timeline flex-grow-1 mb-4">

                {/* Step 1 */}
                <div className="oc-timeline-step active">
                  <div className="oc-step-indicator">
                    <div className="oc-step-dot">1</div>
                    <div className="oc-step-line"></div>
                  </div>
                  <div className="oc-step-content w-100">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h5 className="oc-step-title mb-0">Order Confirmed</h5>
                      <span className="oc-step-time text-success" style={{ fontSize: '11px', fontWeight: '500' }}>Today, 12:45 PM <BiCheckCircle /></span>
                    </div>
                    <p className="oc-step-desc">Your order has been placed successfully.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="oc-timeline-step">
                  <div className="oc-step-indicator">
                    <div className="oc-step-dot">2</div>
                    <div className="oc-step-line"></div>
                  </div>
                  <div className="oc-step-content w-100">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h5 className="oc-step-title mb-0">Preparing for Dispatch</h5>
                      <span className="oc-step-time">Pending</span>
                    </div>
                    <p className="oc-step-desc">We will update you once it's packed.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="oc-timeline-step">
                  <div className="oc-step-indicator">
                    <div className="oc-step-dot">3</div>
                  </div>
                  <div className="oc-step-content w-100">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h5 className="oc-step-title mb-0">Out for Delivery</h5>
                      <span className="oc-step-time">Pending</span>
                    </div>
                    <p className="oc-step-desc">Track your order in real-time.</p>
                  </div>
                </div>

              </div>

              <Link to="/shop" className="btn oc-btn-continue w-100 fw-bold d-flex align-items-center justify-content-center gap-2">
                <BiPackage size={20} />
                Continue Shopping &gt;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
