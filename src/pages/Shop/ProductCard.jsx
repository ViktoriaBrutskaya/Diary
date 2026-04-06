import React from 'react';
import kIcon from '../../images/k.svg';
import './ProductCard.css';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      
      <h3 className="product-title">{title}</h3>
      
      <div className="product-price-badge">
        <span className="price-value">{price}</span>
        <img src={kIcon} alt="k" className="price-k-icon" />
      </div>
    </div>
  );
};

export default ProductCard;