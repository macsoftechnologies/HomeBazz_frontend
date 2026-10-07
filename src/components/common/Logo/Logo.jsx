import React from 'react';
import homebazzLogo from '../../../assets/logos/homebazz_logo-removebg.png';

const Logo = ({ className = '', width = 100 }) => {
  return (
    <div className={`d-inline-flex align-items-center ${className}`}>
      <img loading="lazy"
        src={homebazzLogo}
        alt="HomeBazz Logo"
        style={{ width: `${width}px`, height: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};

export default Logo;
