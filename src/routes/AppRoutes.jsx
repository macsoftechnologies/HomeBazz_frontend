import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Properties from '../pages/Properties/Properties';
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import OrderConfirmation from '../pages/OrderConfirmation/OrderConfirmation';
import AllCategories from '../pages/Categories/AllCategories';

// Placeholder components until actual pages are built
const Placeholder = ({ title }) => (
  <div className="container py-5 text-center min-vh-50">
    <h2 className="mb-4">{title}</h2>
    <div className="p-5 bg-light rounded-4 d-inline-block">
      <p className="text-muted mb-0">This page is under construction. dummy static screen.</p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="shop" element={<Properties />} />
          <Route path="shop/:category" element={<Properties />} />
          <Route path="shop/:category/:subcategory" element={<Properties />} />
          <Route path="categories" element={<AllCategories />} />
          <Route path="product/:id" element={<PropertyDetails />} />

          <Route path="about" element={<Placeholder title="About HomeBazz" />} />
          <Route path="contact" element={<Placeholder title="Contact Us" />} />

          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Protected/User Routes */}
          <Route path="profile" element={<Placeholder title="User Profile Dashboard" />} />
          <Route path="maker/:id" element={<Placeholder title="Maker Profile View" />} />
          <Route path="wishlist" element={<Placeholder title="My Wishlist" />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />

          {/* 404 Not Found */}
          <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
