import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronLeft, BiChevronRight, BiPackage, BiShieldQuarter, BiSupport } from 'react-icons/bi';
import Food1 from '../../assets/images/Food/Food1.jpg';
import Food2 from '../../assets/images/Food/Food2.jpg';
import Food3 from '../../assets/images/Food/Food3.jpg';
import Food4 from '../../assets/images/Food/Food4.jpg';
import Food5 from '../../assets/images/Food/Food5.jpg';
import Food6 from '../../assets/images/Food/Food6.jpg';
import Food7 from '../../assets/images/Food/Food7.jpg';
import Food8 from '../../assets/images/Food/Food8.jpg';
import Food9 from '../../assets/images/Food/Food9.jpg';
import Food10 from '../../assets/images/Food/Food10.jpg';
import Food11 from '../../assets/images/Food/Food11.jpg';
import Food12 from '../../assets/images/Food/Food12.jpg';
import Handmade1 from '../../assets/images/handmade/handmade1.jpg';
import Handmade2 from '../../assets/images/handmade/handmade2.jpg';
import Handmade3 from '../../assets/images/handmade/handmade3.jpg';
import Handmade4 from '../../assets/images/handmade/handmade4.jpg';
import Handmade5 from '../../assets/images/handmade/handmade5.jpg';
import Handmade6 from '../../assets/images/handmade/handmade6.jpg';
import Handmade7 from '../../assets/images/handmade/handmade7.jpg';
import Handmade8 from '../../assets/images/handmade/handmade8.jpg';
import Decor1 from '../../assets/images/art-decor/decor1.jpg';
import Decor2 from '../../assets/images/art-decor/decor2.jpg';
import Decor3 from '../../assets/images/art-decor/decor3.jpg';
import Decor4 from '../../assets/images/art-decor/decor4.jpg';
import Decor5 from '../../assets/images/art-decor/decor5.jpg';
import Decor6 from '../../assets/images/art-decor/decor6.jpg';
import Decor7 from '../../assets/images/art-decor/decor7.jpg';
import Decor8 from '../../assets/images/art-decor/decor8.jpg';
import Jewellery1 from '../../assets/images/jewellery/jewellery1.jpg';
import Jewellery2 from '../../assets/images/jewellery/jewellery2.jpg';
import Jewellery3 from '../../assets/images/jewellery/jewellery3.jpg';
import Jewellery4 from '../../assets/images/jewellery/jewellery4.jpg';
import Jewellery5 from '../../assets/images/jewellery/jewellery5.jpg';
import Jewellery6 from '../../assets/images/jewellery/jewellery6.jpg';
import Jewellery7 from '../../assets/images/jewellery/jewellery7.jpg';
import Jewellery8 from '../../assets/images/jewellery/jewellery8.jpg';
import './Home.css';

const carouselItems = [
  { 
    id: 'c7', 
    type: 'banner', 
    title: 'Up to 20% Off', 
    subtitle: 'Homemade Sweets', 
    bgColor: '#ffe6f2', 
    img: Food10, 
    features: [
      { icon: <BiPackage size={20}/>, title: 'Fresh Delivery', desc: 'Straight to you' },
      { icon: <BiShieldQuarter size={20}/>, title: 'Premium Quality', desc: 'No Preservatives' }
    ]
  },
  { 
    id: 'c8', 
    type: 'banner', 
    title: 'Under ₹999', 
    subtitle: 'Wooden Crafts', 
    bgColor: '#fdf5e6', 
    img: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=400&auto=format&fit=crop', 
    features: [
      { icon: <BiPackage size={20}/>, title: 'Free Shipping', desc: 'On orders over ₹499' },
      { icon: <BiShieldQuarter size={20}/>, title: 'Eco-Friendly', desc: 'Sustainable' }
    ]
  },
  { 
    id: 'c9', 
    type: 'banner', 
    title: 'Starting ₹99', 
    subtitle: 'Fresh Spices', 
    bgColor: '#ffebcc', 
    img: Food11, 
    features: [
      { icon: <BiShieldQuarter size={20}/>, title: 'Pure & Authentic', desc: 'Sourced Locally' },
      { icon: <BiSupport size={20}/>, title: 'Great Offers', desc: 'Combo deals' }
    ]
  },
  { 
    id: 'c1', 
    type: 'banner', 
    title: 'Starting ₹149', 
    subtitle: 'Home decor & essentials', 
    bgColor: '#f5e6d3', // Fallback color
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400&auto=format&fit=crop', // Decor
    features: [
      { icon: <BiPackage size={20}/>, title: 'Fast Delivery', desc: 'Across India' },
      { icon: <BiShieldQuarter size={20}/>, title: 'Quality', desc: 'Assured' },
      { icon: <BiSupport size={20}/>, title: 'Great', desc: 'Offers' }
    ]
  },
  { 
    id: 'c2', 
    type: 'grid', 
    title: 'Shop popular deals', 
    subtitle: 'Top picks. Best prices.', 
    bgColor: '#0066cc', 
    products: [
      { name: 'Pottery', price: '₹299', oldPrice: '₹599', off: '50% OFF', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=150&auto=format&fit=crop' },
      { name: 'Scented Candles', price: '₹99', oldPrice: '₹199', off: '50% OFF', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=150&auto=format&fit=crop' },
      { name: 'Ethnic Kurtis', price: '₹499', oldPrice: '₹999', off: '50% OFF', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=150&auto=format&fit=crop' },
      { name: 'Jewellery', price: '₹399', oldPrice: '₹799', off: '50% OFF', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=150&auto=format&fit=crop' }
    ],
    footer: 'Extra 10% Off with select payment methods'
  },
  { 
    id: 'c3', 
    type: 'banner', 
    title: 'Under ₹399', 
    subtitle: 'Handmade Bags & Totes', 
    bgColor: '#e6f0ff', 
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop', 
    features: [
      { icon: <BiPackage size={20}/>, title: 'Free Delivery', desc: 'on orders above ₹499' },
      { icon: <BiShieldQuarter size={20}/>, title: 'Premium Quality', desc: 'Everyday Comfort' }
    ]
  },
  { 
    id: 'c4', 
    type: 'banner', 
    title: 'Starting ₹149', 
    subtitle: 'Authentic Regional Snacks', 
    bgColor: '#fdf5e6', 
    img: Food9, 
    features: [
      { icon: <BiShieldQuarter size={20}/>, title: 'Freshly Made', desc: 'Local Traditions' },
      { icon: <BiPackage size={20}/>, title: 'Wide Range', desc: 'Sweets & Savouries' }
    ]
  },
  { 
    id: 'c5', 
    type: 'banner', 
    title: 'Under ₹499', 
    subtitle: 'Handwoven Sarees', 
    bgColor: '#1c449c', 
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop',
    textColor: 'white',
    features: [
      { icon: <BiPackage size={20}/>, title: 'Fast Delivery', desc: 'Across India' },
      { icon: <BiShieldQuarter size={20}/>, title: 'Best Quality', desc: 'Authentic Weaves' }
    ]
  },
  { 
    id: 'c6', 
    type: 'banner', 
    title: 'Starting ₹199', 
    subtitle: 'Handcrafted Jewellery', 
    bgColor: '#e6ffe6', 
    img: Jewellery1, 
    features: [
      { icon: <BiShieldQuarter size={20}/>, title: 'Authentic Design', desc: 'Made by Artisans' },
      { icon: <BiSupport size={20}/>, title: 'Secure Payment', desc: '100% Safe' }
    ]
  },
  { 
    id: 'c10', 
    type: 'banner', 
    title: 'Up to 30% Off', 
    subtitle: 'Fresh Bakery', 
    bgColor: '#fdf5e6', 
    img: Food12, 
    features: [
      { icon: <BiPackage size={20}/>, title: 'Same Day', desc: 'Delivery' },
      { icon: <BiShieldQuarter size={20}/>, title: 'Fresh Baked', desc: 'Everyday' }
    ]
  },
  { 
    id: 'c11', 
    type: 'banner', 
    title: 'Starting ₹299', 
    subtitle: 'Exquisite Wall Art', 
    bgColor: '#e6f0ff', 
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop', 
    features: [
      { icon: <BiShieldQuarter size={20}/>, title: 'Hand Painted', desc: 'Originals' },
      { icon: <BiPackage size={20}/>, title: 'Safe Shipping', desc: 'Across India' }
    ]
  },
  { 
    id: 'c12', 
    type: 'banner', 
    title: 'Under ₹499', 
    subtitle: 'Handmade Crafts', 
    bgColor: '#ffe6e6', 
    img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400&auto=format&fit=crop', 
    features: [
      { icon: <BiSupport size={20}/>, title: 'Artisan Made', desc: 'Local Talent' },
      { icon: <BiPackage size={20}/>, title: 'Fast Delivery', desc: 'Assured' }
    ]
  }
];

const shopByCategory = {
  food: [
    { name: 'Snacks Pickles', off: 'Up to 20% Off', img: Food1, icon: 'jar' },
    { name: 'Sweets', off: 'Up to 15% Off', img: Food2, icon: 'cupcake' },
    { name: 'Bakery', off: 'Up to 25% Off', img: Food3, icon: 'bread' },
    { name: 'Spice powders', off: 'Up to 20% Off', img: Food4, icon: 'chili' },
    { name: 'Ready-to-cook', off: 'Up to 18% Off', img: Food5, icon: 'pot' },
    { name: 'Dairy', off: 'Up to 15% Off', img: Food6, icon: 'milk' },
    { name: 'Beverages', off: 'Up to 20% Off', img: Food7, icon: 'drink' },
    { name: 'Regional', off: 'Up to 10% Off', img: Food8, icon: 'bowl' },
  ],
  handmade: [
    { name: 'Crafts', off: 'Up to 20% Off', img: Handmade1, icon: 'palette' },
    { name: 'Art', off: 'Up to 15% Off', img: Handmade2, icon: 'image' },
    { name: 'Décor', off: 'Up to 20% Off', img: Handmade3, icon: 'home' },
    { name: 'Gifts', off: 'Up to 15% Off', img: Handmade4, icon: 'gift' },
    { name: 'Jewellery', off: 'Up to 20% Off', img: Handmade5, icon: 'diamond' },
    { name: 'Clothing', off: 'Up to 18% Off', img: Handmade6, icon: 'shirt' },
    { name: 'Home accessories', off: 'Up to 15% Off', img: Handmade7, icon: 'flower' },
    { name: 'Toys', off: 'Up to 10% Off', img: Handmade8, icon: 'bear' },
  ],
  artDecor: [
    { name: 'Wall Art', off: 'Up to 20% Off', img: Decor1, icon: 'image' },
    { name: 'Paintings', off: 'Up to 15% Off', img: Decor2, icon: 'image' },
    { name: 'Vases', off: 'Up to 25% Off', img: Decor3, icon: 'home' },
    { name: 'Idols', off: 'Up to 20% Off', img: Decor4, icon: 'star' },
    { name: 'Showpieces', off: 'Up to 18% Off', img: Decor5, icon: 'star' },
    { name: 'Clocks', off: 'Up to 15% Off', img: Decor6, icon: 'time' },
    { name: 'Mirrors', off: 'Up to 20% Off', img: Decor7, icon: 'home' },
    { name: 'Frames', off: 'Up to 10% Off', img: Decor8, icon: 'image' },
  ],
  fashion: [
    { name: 'Sarees', off: 'Up to 20% Off', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=250&auto=format&fit=crop', icon: 'shirt' },
    { name: 'Kurtis', off: 'Up to 15% Off', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop', icon: 'shirt' },
    { name: 'Dresses', off: 'Up to 20% Off', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop', icon: 'shirt' },
    { name: 'Necklaces', off: 'Up to 15% Off', img: Jewellery2, icon: 'diamond' },
    { name: 'Earrings', off: 'Up to 20% Off', img: Jewellery3, icon: 'diamond' },
    { name: 'Bags', off: 'Up to 18% Off', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop', icon: 'bag' },
    { name: 'Footwear', off: 'Up to 15% Off', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop', icon: 'shoe' },
    { name: 'Watches', off: 'Up to 10% Off', img: Jewellery4, icon: 'time' },
  ]
};

const deals = [
  {
    title: 'Starting ₹99 | Kitchen deals | HomeBazz Brands & more',
    items: [
      { name: 'Starting ₹149 | Water bottles', tag: 'Starting ₹149', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=250&auto=format&fit=crop' },
      { name: 'Starting ₹299 | Cookware', tag: 'Starting ₹299', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=250&auto=format&fit=crop' },
      { name: 'Min. 40% off | Kitchen tools', tag: 'Min 40% off', img: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=250&auto=format&fit=crop' },
      { name: 'Starting ₹99 | Choppers', tag: 'Starting ₹99', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=250&auto=format&fit=crop' }
    ]
  },
  {
    title: 'Lowest prices on HomeBazz + Extra 15% cashback',
    items: [
      { name: 'Kurtis', tag: 'Starting ₹149', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop' },
      { name: 'Sarees', tag: 'Starting ₹159', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=250&auto=format&fit=crop' },
      { name: 'Beauty accessories', tag: 'Starting ₹99', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=250&auto=format&fit=crop' },
      { name: 'Shop all Bazaar', tag: 'Up to ₹100 Cashback', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=250&auto=format&fit=crop' }
    ]
  },
  {
    title: 'Starting ₹169 | Must-have home buys',
    items: [
      { name: 'Min. 50% off | Bedsheets', tag: 'Min 50% off', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=250&auto=format&fit=crop' },
      { name: 'Min. 50% off | Organizers', tag: 'Min 50% off', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=250&auto=format&fit=crop' },
      { name: 'Starting ₹199 | Lighting', tag: 'Starting ₹199', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=250&auto=format&fit=crop' },
      { name: 'Starting ₹129 | Idols', tag: 'Starting ₹129', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=250&auto=format&fit=crop' }
    ]
  },
  {
    title: 'Up to 75% off | Most loved handcrafted & more',
    items: [
      { name: 'Pottery', tag: 'Up to 50% off', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=250&auto=format&fit=crop' },
      { name: 'Wall art', tag: 'Up to 60% off', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=250&auto=format&fit=crop' },
      { name: 'Wooden toys', tag: 'Under ₹499', img: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=250&auto=format&fit=crop' },
      { name: 'Candles', tag: 'Starting ₹99', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=250&auto=format&fit=crop' }
    ]
  },
];

const moreDeals = [
  {
    title: 'Starting ₹149 | Authentic Regional Foods',
    items: [
      { name: 'Traditional Pickles', tag: 'Starting ₹149', img: Food9 },
      { name: 'Homemade Sweets', tag: 'Up to 20% off', img: Food10 },
      { name: 'Spicy Snacks', tag: 'Starting ₹99', img: Food11 },
      { name: 'Fresh Spices', tag: 'Starting ₹129', img: Food12 }
    ]
  },
  {
    title: 'Starting ₹199 | Beautiful Handcrafted Art',
    items: [
      { name: 'Wall Paintings', tag: 'Starting ₹199', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=250&auto=format&fit=crop' },
      { name: 'Pottery & Vases', tag: 'Up to 40% off', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=250&auto=format&fit=crop' },
      { name: 'Handmade Idols', tag: 'Starting ₹299', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=250&auto=format&fit=crop' },
      { name: 'Wooden Crafts', tag: 'Up to 30% off', img: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=250&auto=format&fit=crop' }
    ]
  },
  {
    title: 'Up to 50% off | Fashion & Accessories',
    items: [
      { name: 'Ethnic Kurtis', tag: 'Starting ₹299', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop' },
      { name: 'Handwoven Sarees', tag: 'Starting ₹499', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=250&auto=format&fit=crop' },
      { name: 'Jewellery', tag: 'Min 20% off', img: Jewellery5 },
      { name: 'Handbags & Totes', tag: 'Starting ₹399', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop' }
    ]
  },

  {
    title: 'Starting ₹299 | Home Decor Essentials',
    items: [
      { name: 'Wall Mirrors', tag: 'Starting ₹299', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=250&auto=format&fit=crop' },
      { name: 'Table Lamps', tag: 'Under ₹499', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=250&auto=format&fit=crop' },
      { name: 'Cushion Covers', tag: 'Starting ₹199', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=250&auto=format&fit=crop' },
      { name: 'Scented Candles', tag: 'Starting ₹99', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=250&auto=format&fit=crop' }
    ]
  },
];

const finalCategories = [
  {
    title: 'Up to 50% off | Stylish Clothing',
    items: [
      { name: 'Kurtis', tag: 'Under ₹499', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop' },
      { name: 'Sarees', tag: 'Starting ₹999', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=250&auto=format&fit=crop' },
      { name: 'Dresses', tag: 'Min 40% off', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=250&auto=format&fit=crop' },
      { name: 'Tops', tag: 'Starting ₹299', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop' }
    ]
  },
  {
    title: 'Starting ₹199 | Beautiful Jewellery',
    items: [
      { name: 'Necklaces', tag: 'Starting ₹199', img: Jewellery5 },
      { name: 'Earrings', tag: 'Under ₹299', img: Jewellery6 },
      { name: 'Bracelets', tag: 'Min 20% off', img: Jewellery7 },
      { name: 'Rings', tag: 'Starting ₹99', img: Jewellery8 }
    ]
  },
  {
    title: 'Up to 60% off | Home Accessories',
    items: [
      { name: 'Vases', tag: 'Starting ₹149', img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=250&auto=format&fit=crop' },
      { name: 'Mirrors', tag: 'Under ₹499', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=250&auto=format&fit=crop' },
      { name: 'Candles', tag: 'Starting ₹99', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=250&auto=format&fit=crop' },
      { name: 'Clocks', tag: 'Min 30% off', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop' }
    ]
  }
];

const Home = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const slideWidth = scrollWidth / carouselItems.length;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.scrollWidth / carouselItems.length;
      const index = Math.min(carouselItems.length - 1, Math.max(0, Math.round(scrollLeft / slideWidth)));
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / carouselItems.length;
      scrollRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / carouselItems.length;
      scrollRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="amz-home-page" style={{backgroundColor: '#e3e6e6', minHeight: '100vh', paddingBottom: '40px'}}>
      
      {/* ─── Category Carousel ─── */}
      <section className="amz-carousel-section pt-3 mb-3 pb-3" style={{backgroundColor: 'transparent'}}>
        <div className="container-fluid px-3 px-md-4 position-relative">
          <button className="amz-carousel-btn left shadow d-none d-md-flex" onClick={scrollLeft}>
            <BiChevronLeft size={30} />
          </button>
          
          <div className="amz-carousel-container" ref={scrollRef} onScroll={handleScroll}>
            {carouselItems.map(item => (
              <Link to="/shop" key={item.id} className="text-decoration-none flex-shrink-0 cursor-pointer mobile-single-slide amz-promo-wrapper d-flex flex-column" style={{scrollSnapAlign: 'start', color: 'inherit'}}>
                
                {item.type === 'banner' ? (
                  <div className="amz-promo-card shadow-sm d-flex flex-column position-relative overflow-hidden flex-grow-1" 
                       style={{backgroundColor: item.bgColor, backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '420px', width: '100%'}}>
                    
                    <div className="p-3 pb-5" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)', zIndex: 1}}>
                      <h4 className="fw-bold mb-1" style={{color: item.textColor || '#111', fontSize: '28px'}}>{item.title}</h4>
                      <p className="mb-0" style={{color: item.textColor || '#333', fontSize: '16px', fontWeight: '500'}}>{item.subtitle}</p>
                    </div>

                    <div className="mt-auto p-3 position-relative" style={{zIndex: 1}}>
                      <div className="bg-white rounded p-2 px-3 d-flex justify-content-between align-items-center shadow-sm">
                        {item.features.map((feat, idx) => (
                          <div key={idx} className="d-flex flex-column align-items-center text-center px-1" style={{flex: 1}}>
                            <div className="mb-1" style={{color: '#1c449c'}}>{feat.icon}</div>
                            <div className="fw-bold" style={{fontSize: '12px', color: '#111', lineHeight: '1'}}>{feat.title}</div>
                            <div className="text-muted" style={{fontSize: '10px', lineHeight: '1', marginTop: '2px'}}>{feat.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="amz-promo-card shadow-sm p-3 d-flex flex-column flex-grow-1" 
                       style={{backgroundColor: item.bgColor, minHeight: '420px', width: '100%'}}>
                    
                    <div className="mb-2">
                      <h4 className="fw-bold text-white mb-1" style={{fontSize: '28px'}}>{item.title}</h4>
                      <p className="text-white mb-0" style={{fontSize: '16px', opacity: 0.9}}>{item.subtitle}</p>
                    </div>

                    <div className="row g-2 flex-grow-1">
                      {item.products.map((prod, idx) => (
                        <div key={idx} className="col-6 d-flex flex-column">
                          <div className="bg-white rounded p-1 px-2 h-100 position-relative overflow-hidden d-flex flex-column justify-content-center">
                            <img src={prod.img} alt={prod.name} className="w-100 object-fit-cover rounded mb-1" style={{height: '75px'}} />
                            <div className="fw-bold" style={{fontSize: '14px', lineHeight: '1.1', color: '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{prod.name}</div>
                            <div className="d-flex align-items-center gap-1">
                              <span className="fw-bold text-dark" style={{fontSize: '14px'}}>{prod.price}</span>
                              <span className="text-muted text-decoration-line-through" style={{fontSize: '12px'}}>{prod.oldPrice}</span>
                            </div>
                            <div><span className="d-inline-block bg-primary text-white rounded px-1" style={{fontSize: '10px', padding: '2px 0'}}>{prod.off}</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>

          <button className="amz-carousel-btn right shadow d-none d-md-flex" onClick={scrollRight}>
            <BiChevronRight size={30} />
          </button>
        </div>
        
        {/* Mobile dots indicator */}
        <div className="d-flex d-md-none justify-content-center mt-3 gap-2">
          {carouselItems.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => {
                if (scrollRef.current) {
                  const slideWidth = scrollRef.current.scrollWidth / carouselItems.length;
                  scrollRef.current.scrollTo({ left: slideWidth * idx, behavior: 'smooth' });
                }
              }}
              style={{
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: activeIndex === idx ? '#ff7f50' : '#e0e0e0',
                transition: 'background-color 0.3s',
                cursor: 'pointer'
              }} 
            />
          ))}
        </div>
      </section>

      {/* ─── Shop by Category (NEW) ─── */}
      <section className="container-fluid px-3 px-md-4 mb-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="d-flex align-items-center mb-1">
            <div className="bg-primary rounded p-2 me-2" style={{backgroundColor: '#5742e8'}}>
              <BiPackage size={20} color="#fff" />
            </div>
            <h4 className="mb-0 fw-bold" style={{color: '#1a1a2e', fontSize: '20px'}}>Shop by <span style={{color: '#5742e8'}}>Category</span></h4>
          </div>
          <p className="text-muted mb-3" style={{fontSize: '13px'}}>Discover your favourite products from our wide range of categories.</p>

          <div className="row g-4">
            {/* Food Block */}
            <div className="col-12 col-xl-6">
              <div className="p-4 rounded border" style={{backgroundColor: '#fffaf5', borderColor: '#ffebe0'}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px', backgroundColor: '#f2994a'}}>
                      <span className="text-white fw-bold fs-6">🍲</span>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold" style={{color: '#1c449c', fontSize: '17px'}}>Food</h5>
                      <p className="mb-0 text-muted" style={{fontSize: '12px'}}>Fresh. Healthy. Homemade.</p>
                    </div>
                  </div>
                  <Link to="/shop" className="text-decoration-none fw-bold" style={{color: '#5742e8', fontSize: '13px'}}>View All &rarr;</Link>
                </div>
                
                <div className="row g-2">
                  {shopByCategory.food.map((cat, i) => (
                    <div key={i} className="col-6 col-sm-3">
                      <Link to="/product/p1" className="text-decoration-none d-block h-100">
                        <div className="bg-white rounded overflow-hidden shadow-sm position-relative cursor-pointer h-100 d-flex flex-column border border-light custom-hover-card">
                          <div className="position-absolute top-0 start-0 m-1 bg-danger text-white rounded px-1 fw-bold" style={{fontSize: '9px', zIndex: 2}}>
                            {cat.off}
                          </div>
                          <img src={cat.img} alt={cat.name} className="w-100 object-fit-cover" style={{height: '90px'}} />
                          <div className="p-2 text-center mt-auto d-flex align-items-center justify-content-center gap-1 border-top">
                            <span className="text-primary fw-bold" style={{color: '#5742e8', fontSize: '11px'}}>{cat.name} <BiChevronRight size={14}/></span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Handmade Block */}
            <div className="col-12 col-xl-6">
              <div className="p-4 rounded border" style={{backgroundColor: '#f8f8ff', borderColor: '#e6e6ff'}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px', backgroundColor: '#8a2be2'}}>
                      <span className="text-white fw-bold fs-6">🎨</span>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold" style={{color: '#1c449c', fontSize: '17px'}}>Handmade</h5>
                      <p className="mb-0 text-muted" style={{fontSize: '12px'}}>Crafted with Love. Made for You.</p>
                    </div>
                  </div>
                  <Link to="/shop" className="text-decoration-none fw-bold" style={{color: '#5742e8', fontSize: '13px'}}>View All &rarr;</Link>
                </div>
                
                <div className="row g-2">
                  {shopByCategory.handmade.map((cat, i) => (
                    <div key={i} className="col-6 col-sm-3">
                      <Link to="/product/p1" className="text-decoration-none d-block h-100">
                        <div className="bg-white rounded overflow-hidden shadow-sm position-relative cursor-pointer h-100 d-flex flex-column border border-light custom-hover-card">
                          <div className="position-absolute top-0 start-0 m-1 bg-danger text-white rounded px-1 fw-bold" style={{fontSize: '9px', zIndex: 2}}>
                            {cat.off}
                          </div>
                          <img src={cat.img} alt={cat.name} className="w-100 object-fit-cover" style={{height: '90px'}} />
                          <div className="p-2 text-center mt-auto d-flex align-items-center justify-content-center gap-1 border-top">
                            <span className="text-primary fw-bold" style={{color: '#5742e8', fontSize: '11px'}}>{cat.name} <BiChevronRight size={14}/></span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Banner */}
          <div className="mt-4 rounded p-3 d-flex flex-wrap justify-content-between align-items-center border" style={{backgroundColor: '#f8f5ff', borderColor: '#eeeaff'}}>
            <div className="d-flex align-items-center gap-2 border-end pe-4 my-2">
              <BiPackage size={28} color="#5742e8" />
              <div className="lh-1">
                <div className="fw-bold" style={{fontSize: '13px', color: '#1c449c'}}>Free Shipping</div>
                <div className="text-muted" style={{fontSize: '11px'}}>Above ₹499</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 border-end pe-4 my-2">
              <BiShieldQuarter size={28} color="#5742e8" />
              <div className="lh-1">
                <div className="fw-bold" style={{fontSize: '13px', color: '#1c449c'}}>Secure Payments</div>
                <div className="text-muted" style={{fontSize: '11px'}}>100% Secure</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 border-end pe-4 my-2">
              <BiSupport size={28} color="#5742e8" />
              <div className="lh-1">
                <div className="fw-bold" style={{fontSize: '13px', color: '#1c449c'}}>Support 24/7</div>
                <div className="text-muted" style={{fontSize: '11px'}}>We're here to help</div>
              </div>
            </div>
            <div className="ms-auto fw-bold fst-italic my-2 text-primary" style={{color: '#5742e8'}}>
              Small Homes <br/> Big Possibilities ✨
            </div>
          </div>
        </div>
      </section>

      {/* ─── Deals Grid (UPDATED) ─── */}
      <section className="amz-deals-section container-fluid px-3 px-md-4 pb-4">
        <div className="row g-3">
          {deals.map((deal, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-3">
              <div className="bg-white p-3 h-100 rounded shadow-sm d-flex flex-column cursor-pointer custom-hover-card">
                <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-between" style={{fontSize: '18px', lineHeight: '1.2'}}>
                  {deal.title} <BiChevronRight size={24} className="text-muted" />
                </h4>
                
                <div className="row g-2 mt-auto">
                  {deal.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="col-6">
                      <Link to="/product/p1" className="text-decoration-none d-block">
                        <div className="position-relative mb-1">
                          <img src={item.img} alt={item.name} className="w-100 rounded object-fit-cover" style={{height: '130px'}} />
                          <div className="position-absolute bottom-0 end-0 m-1 bg-warning text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center text-center shadow-sm" 
                               style={{width: '45px', height: '45px', fontSize: '10px', lineHeight: '1', zIndex: 2, padding: '4px'}}>
                            {item.tag}
                          </div>
                        </div>
                        <div className="text-muted mt-1" style={{fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#0F1111'}}>
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Additional Categories (NEW) ─── */}
      <section className="container-fluid px-3 px-md-4 pb-5 mb-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="d-flex align-items-center mb-1">
            <div className="bg-primary rounded p-2 me-2" style={{backgroundColor: '#5742e8'}}>
              <BiPackage size={20} color="#fff" />
            </div>
            <h4 className="mb-0 fw-bold" style={{color: '#1a1a2e', fontSize: '20px'}}>More to <span style={{color: '#5742e8'}}>Explore</span></h4>
          </div>
          <p className="text-muted mb-3" style={{fontSize: '13px'}}>Discover even more from our talented home creators.</p>

          <div className="row g-4">
            {/* Art & Decor Block */}
            <div className="col-12 col-xl-6">
              <div className="p-4 rounded border h-100" style={{backgroundColor: '#f5fffa', borderColor: '#e0fff0'}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px', backgroundColor: '#20b2aa'}}>
                      <span className="text-white fw-bold fs-6">🖼️</span>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold" style={{color: '#1c449c', fontSize: '17px'}}>Art & Decor</h5>
                      <p className="mb-0 text-muted" style={{fontSize: '12px'}}>Beautify your home.</p>
                    </div>
                  </div>
                  <Link to="/shop" className="text-decoration-none fw-bold" style={{color: '#5742e8', fontSize: '13px'}}>View All &rarr;</Link>
                </div>
                
                <div className="row g-2">
                  {shopByCategory.artDecor.map((cat, idx) => (
                    <div key={idx} className="col-6 col-sm-3">
                      <Link to="/product/p1" className="text-decoration-none d-block h-100">
                        <div className="bg-white rounded p-1 shadow-sm h-100 cursor-pointer custom-hover-card border">
                          <div className="position-relative">
                            <img src={cat.img} alt={cat.name} className="w-100 rounded object-fit-cover" style={{height: '80px'}} />
                            <div className="position-absolute top-0 start-0 m-1 bg-danger text-white px-1 rounded shadow-sm" style={{fontSize: '9px', fontWeight: 'bold'}}>
                              {cat.off}
                            </div>
                          </div>
                          <div className="text-center mt-2 pb-1">
                            <span className="text-primary fw-bold" style={{color: '#5742e8', fontSize: '11px'}}>{cat.name} <BiChevronRight size={14}/></span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fashion & Accessories Block */}
            <div className="col-12 col-xl-6">
              <div className="p-4 rounded border h-100" style={{backgroundColor: '#fff5f8', borderColor: '#ffe0eb'}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px', backgroundColor: '#ff69b4'}}>
                      <span className="text-white fw-bold fs-6">👗</span>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold" style={{color: '#1c449c', fontSize: '17px'}}>Fashion & Accessories</h5>
                      <p className="mb-0 text-muted" style={{fontSize: '12px'}}>Clothing, Jewellery & More.</p>
                    </div>
                  </div>
                  <Link to="/shop" className="text-decoration-none fw-bold" style={{color: '#5742e8', fontSize: '13px'}}>View All &rarr;</Link>
                </div>
                
                <div className="row g-2">
                  {shopByCategory.fashion.map((cat, idx) => (
                    <div key={idx} className="col-6 col-sm-3">
                      <Link to="/product/p1" className="text-decoration-none d-block h-100">
                        <div className="bg-white rounded p-1 shadow-sm h-100 cursor-pointer custom-hover-card border">
                          <div className="position-relative">
                            <img src={cat.img} alt={cat.name} className="w-100 rounded object-fit-cover" style={{height: '80px'}} />
                            <div className="position-absolute top-0 start-0 m-1 bg-danger text-white px-1 rounded shadow-sm" style={{fontSize: '9px', fontWeight: 'bold'}}>
                              {cat.off}
                            </div>
                          </div>
                          <div className="text-center mt-2 pb-1">
                            <span className="text-primary fw-bold" style={{color: '#5742e8', fontSize: '11px'}}>{cat.name} <BiChevronRight size={14}/></span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Additional Deals Grid (NEW) ─── */}
      <section className="amz-deals-section container-fluid px-3 px-md-4 pb-5">
        <div className="row g-3">
          {moreDeals.map((deal, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-3">
              <div className="bg-white p-3 h-100 rounded shadow-sm d-flex flex-column cursor-pointer custom-hover-card">
                <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-between" style={{fontSize: '18px', lineHeight: '1.2'}}>
                  {deal.title} <BiChevronRight size={24} className="text-muted" />
                </h4>
                
                <div className="row g-2 mt-auto">
                  {deal.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="col-6">
                      <Link to="/product/p1" className="text-decoration-none d-block">
                        <div className="position-relative mb-1">
                          <img src={item.img} alt={item.name} className="w-100 rounded object-fit-cover" style={{height: '130px'}} />
                          <div className="position-absolute bottom-0 end-0 m-1 bg-warning text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center text-center shadow-sm" 
                               style={{width: '45px', height: '45px', fontSize: '10px', lineHeight: '1', zIndex: 2, padding: '4px'}}>
                            {item.tag}
                          </div>
                        </div>
                        <div className="text-muted mt-1" style={{fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#0F1111'}}>
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Final Categories Grid (NEW) ─── */}
      <section className="amz-deals-section container-fluid px-3 px-md-4 pb-5">
        <div className="row g-3 justify-content-center">
          {finalCategories.map((deal, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="bg-white p-3 h-100 rounded shadow-sm d-flex flex-column cursor-pointer custom-hover-card">
                <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-between" style={{fontSize: '18px', lineHeight: '1.2'}}>
                  {deal.title} <BiChevronRight size={24} className="text-muted" />
                </h4>
                
                <div className="row g-2 mt-auto">
                  {deal.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="col-6">
                      <Link to="/product/p1" className="text-decoration-none d-block">
                        <div className="position-relative mb-1">
                          <img src={item.img} alt={item.name} className="w-100 rounded object-fit-cover" style={{height: '130px'}} />
                          <div className="position-absolute bottom-0 end-0 m-1 bg-warning text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center text-center shadow-sm" 
                               style={{width: '45px', height: '45px', fontSize: '10px', lineHeight: '1', zIndex: 2, padding: '4px'}}>
                            {item.tag}
                          </div>
                        </div>
                        <div className="text-muted mt-1" style={{fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#0F1111'}}>
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
