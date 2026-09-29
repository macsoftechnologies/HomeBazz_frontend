// Mock data for HomeBazz application
import Food1 from '../assets/images/Food/Food1.jpg';
import Food2 from '../assets/images/Food/Food2.jpg';
import Food3 from '../assets/images/Food/Food3.jpg';
import Handmade1 from '../assets/images/handmade/handmade1.jpg';
import Handmade2 from '../assets/images/handmade/handmade2.jpg';
import Handmade3 from '../assets/images/handmade/handmade3.jpg';
import Handmade4 from '../assets/images/handmade/handmade4.jpg';
import Handmade5 from '../assets/images/handmade/handmade5.jpg';
import Decor1 from '../assets/images/art-decor/decor1.jpg';
import Decor2 from '../assets/images/art-decor/decor2.jpg';
import Decor3 from '../assets/images/art-decor/decor3.jpg';
import Decor4 from '../assets/images/art-decor/decor4.jpg';
import Jewellery1 from '../assets/images/jewellery/jewellery1.jpg';
import Jewellery2 from '../assets/images/jewellery/jewellery2.jpg';
import Jewellery3 from '../assets/images/jewellery/jewellery3.jpg';
import Jewellery4 from '../assets/images/jewellery/jewellery4.jpg';
export const categories = [
  { id: 'c1', name: 'Food', icon: 'BiFoodMenu', image: '/assets/images/category-food.jpg', count: 120 },
  { id: 'c2', name: 'Handmade', icon: 'BiGift', image: '/assets/images/category-handmade.jpg', count: 85 },
  { id: 'c3', name: 'Art & Decor', icon: 'BiHomeHeart', image: '/assets/images/category-art.jpg', count: 64 },
  { id: 'c4', name: 'Clothing', icon: 'BiCloset', image: '/assets/images/category-clothing.jpg', count: 42 },
  { id: 'c5', name: 'Jewellery', icon: 'BiDiamond', image: '/assets/images/category-jewellery.jpg', count: 56 },
  { id: 'c6', name: 'Home Accessories', icon: 'BiShoppingBag', image: '/assets/images/category-accessories.jpg', count: 91 },
];

export const featuredCategories = [
  { id: 'fc1', name: 'Pickles', image: '/categories/pickles.jpg' },
  { id: 'fc2', name: 'Sweets', image: '/categories/sweets.jpg' },
  { id: 'fc3', name: 'Handicrafts', image: '/categories/handicrafts.jpg' },
  { id: 'fc4', name: 'Clothing', image: '/categories/clothing.jpg' },
  { id: 'fc5', name: 'Home Decor', image: '/categories/homedecor.jpg' },
];

export const trustFeatures = [
  { id: 'tf1', icon: 'BiLeaf',       label: 'Authentic Products', bg: '#E8F5E9', color: '#2E7D32' },
  { id: 'tf2', icon: 'BiHome',       label: 'Home Makers',        bg: '#FFF3E0', color: '#E65100' },
  { id: 'tf3', icon: 'BiShieldAlt2', label: 'Quality Assured',    bg: '#E3F2FD', color: '#1565C0' },
  { id: 'tf4', icon: 'BiCreditCard', label: 'Secure Payments',    bg: '#E0F2F1', color: '#00695C' },
  { id: 'tf5', icon: 'BiPackage',    label: 'Fast Shipping',      bg: '#F3E5F5', color: '#6A1B9A' },
  { id: 'tf6', icon: 'BiSupport',    label: 'Support 24/7',       bg: '#FCE4EC', color: '#880E4F' },
];

export const makers = [
  {
    id: 'm1',
    name: 'Lakshmi',
    storeName: "Lakshmi's Home Kitchen",
    location: 'Visakhapatnam, AP',
    speciality: 'Traditional Andhra recipes',
    experience: '18 years',
    rating: 4.8,
    reviews: 120,
    followers: '2.3K',
    avatar: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=200&auto=format&fit=crop',
    story: "I started from my kitchen. Today, people across India enjoy my pickles. What began as a small experiment in my kitchen has now become a way to share the flavours of my home with families across India. Every jar is made with love and tradition."
  },
  {
    id: 'm2',
    name: 'Crafty Nisha',
    storeName: "Nisha's Ceramics",
    location: 'Visakhapatnam, AP',
    speciality: 'Handcrafted ceramics',
    experience: '5 years',
    rating: 4.9,
    reviews: 85,
    followers: '1.1K',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    story: "Pottery is my meditation. Each piece I create is unique and tells its own story."
  }
];

export const products = [
  {
    id: 'p1',
    name: 'Traditional Assorted Snacks',
    makerId: 'm1',
    maker: makers[0],
    price: 250,
    rating: 4.8,
    reviews: 124,
    category: 'Food',
    subCategory: 'Snacks',
    images: [Food1],
    badges: ['HomeMade', 'Organic', 'Bestseller'],
    description: 'A delicious variety of traditional savouries and mixtures served fresh.',
    delivery: '3-5 days'
  },
  {
    id: 'p2',
    name: 'Handcrafted Ceramic Mug',
    makerId: 'm2',
    maker: makers[1],
    price: 450,
    rating: 4.8,
    reviews: 120,
    category: 'Handmade',
    subCategory: 'Home Decor',
    images: [Handmade1],
    badges: ['Handcrafted', 'Unique'],
    description: 'Beautifully handcrafted ceramic mug, made with love at home. Each piece is unique.',
    delivery: '5-7 days'
  },
  {
    id: 'p3',
    name: 'South Indian Banana Leaf Thali',
    makerId: 'm1',
    maker: makers[0],
    price: 220,
    rating: 4.7,
    reviews: 89,
    category: 'Food',
    subCategory: 'Meals',
    images: [Food2],
    badges: ['HomeMade'],
    description: 'Authentic traditional South Indian full meal served on a fresh banana leaf.',
    delivery: '3-5 days'
  },
  {
    id: 'p4',
    name: 'Delicious Dahi Vada',
    makerId: 'm1',
    maker: makers[0],
    price: 200,
    rating: 4.6,
    reviews: 56,
    category: 'Food',
    subCategory: 'Snacks',
    images: [Food3],
    badges: ['HomeMade', 'Organic'],
    description: 'Soft and fluffy dahi vada topped with creamy yogurt and sweet-tangy chutney.',
    delivery: '3-5 days'
  },
  {
    id: 'p5',
    name: 'Handcrafted Beaded Necklace',
    makerId: 'm2',
    maker: makers[1],
    price: 350,
    rating: 4.9,
    reviews: 210,
    category: 'Handmade Jewellery',
    subCategory: 'Necklace',
    images: [Jewellery1],
    badges: ['Handmade', 'Bestseller'],
    description: 'A beautiful handcrafted beaded necklace to match any traditional or modern outfit.',
    delivery: '2-4 days'
  },
  {
    id: 'p6',
    name: 'Silver Plated Earrings',
    makerId: 'm2',
    maker: makers[1],
    price: 199,
    rating: 4.5,
    reviews: 80,
    category: 'Handmade Jewellery',
    subCategory: 'Earrings',
    images: [Jewellery2],
    badges: ['Trending'],
    description: 'Elegant silver-plated earrings perfect for parties.',
    delivery: '2-4 days'
  },
  {
    id: 'p7',
    name: 'Cotton Ethnic Kurti',
    makerId: 'm2',
    maker: makers[1],
    price: 599,
    rating: 4.7,
    reviews: 150,
    category: 'Handmade Clothing',
    subCategory: 'Kurtis',
    images: [Handmade4],
    badges: ['Premium', 'Comfort'],
    description: 'Comfortable pure cotton kurti with traditional prints.',
    delivery: '3-5 days'
  },
  {
    id: 'p8',
    name: 'Handwoven Silk Saree',
    makerId: 'm2',
    maker: makers[1],
    price: 1499,
    rating: 4.9,
    reviews: 320,
    category: 'Handmade Clothing',
    subCategory: 'Sarees',
    images: [Handmade5],
    badges: ['Handwoven', 'Luxury'],
    description: 'Authentic handwoven silk saree directly from the weavers.',
    delivery: '5-7 days'
  },
  {
    id: 'p9',
    name: 'Vintage Wall Art',
    makerId: 'm2',
    maker: makers[1],
    price: 1200,
    rating: 4.8,
    reviews: 145,
    category: 'Art & Decor',
    subCategory: 'Wall Art',
    images: [Decor1],
    badges: ['Vintage', 'Premium'],
    description: 'Beautiful vintage-style wall art to enhance your living space.',
    delivery: '4-6 days'
  },
  {
    id: 'p10',
    name: 'Handcrafted Clay Vase',
    makerId: 'm2',
    maker: makers[1],
    price: 850,
    rating: 4.6,
    reviews: 90,
    category: 'Art & Decor',
    subCategory: 'Vases',
    images: [Decor2],
    badges: ['Handcrafted', 'Unique'],
    description: 'Elegant handcrafted clay vase perfect for modern home decor.',
    delivery: '3-5 days'
  },
  {
    id: 'p11',
    name: 'Antique Showpiece',
    makerId: 'm2',
    maker: makers[1],
    price: 2500,
    rating: 4.9,
    reviews: 65,
    category: 'Art & Decor',
    subCategory: 'Showpieces',
    images: [Decor3],
    badges: ['Antique', 'Bestseller'],
    description: 'A stunning antique showpiece that adds elegance to any room.',
    delivery: '5-7 days'
  },
  {
    id: 'p12',
    name: 'Abstract Canvas Painting',
    makerId: 'm2',
    maker: makers[1],
    price: 3200,
    rating: 4.7,
    reviews: 110,
    category: 'Art & Decor',
    subCategory: 'Paintings',
    images: [Decor4],
    badges: ['Original', 'Premium'],
    description: 'Original abstract canvas painting by a renowned local artist.',
    delivery: '5-7 days'
  },
  {
    id: 'p13',
    name: 'Gold Plated Bracelet',
    makerId: 'm2',
    maker: makers[1],
    price: 499,
    rating: 4.8,
    reviews: 130,
    category: 'Handmade Jewellery',
    subCategory: 'Bracelets',
    images: [Jewellery3],
    badges: ['Handmade', 'Premium'],
    description: 'Beautiful gold plated bracelet to match traditional attire.',
    delivery: '2-4 days'
  },
  {
    id: 'p14',
    name: 'Handcrafted Gemstone Ring',
    makerId: 'm2',
    maker: makers[1],
    price: 399,
    rating: 4.6,
    reviews: 75,
    category: 'Handmade Jewellery',
    subCategory: 'Rings',
    images: [Jewellery4],
    badges: ['Handcrafted', 'Unique'],
    description: 'Stunning gemstone ring handcrafted with intricate details.',
    delivery: '2-4 days'
  }
];
