import React from 'react';
import { Link } from 'react-router-dom';
import './AllCategories.css';

const categoriesData = [
  {
    id: 'c1',
    name: 'Food',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c2',
    name: 'Handmade',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c3',
    name: 'Art & Decor',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c4',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c5',
    name: 'Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c6',
    name: 'Home Accessories',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
  },
];

const AllCategories = () => {
  return (
    <div className="allcat-page">
      <div className="container">
        <h1 className="allcat-page-title">All Categories</h1>
        <p className="allcat-page-subtitle">Explore our wide range of homemade delicacies</p>

        <div className="row g-4">
          {categoriesData.map(cat => (
            <div className="col-12 col-sm-6 col-lg-4" key={cat.id}>
              <Link to={`/shop/${cat.id}`} className="allcat-card">
                <div className="allcat-card-img-wrap">
                  <img loading="lazy" src={cat.image} alt={cat.name} className="allcat-card-img" />
                </div>
                <span className="allcat-card-name">{cat.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
