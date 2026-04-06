import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import waveSvg from '../../images/wave.svg';
import ProductCard from './ProductCard';

import "./Shop.css"

import prod1 from '../../images/products/pr1.svg';
import prod2 from '../../images/products/pr1.svg';
import prod3 from '../../images/products/pr1.svg';

const Shop = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const products = [
    { id: 1, title: "Игровая мышь RGB", price: 1350, image: prod1 },
    { id: 2, title: "Механическая клавиатура", price: 2500, image: prod2 },
    { id: 3, title: "Фирменная футболка K1", price: 800, image: prod3 },
    { id: 4, title: "Коврик для мыши", price: 450, image: prod1 }, // Для примера 4-й
  ];
  
  const containerStyle = {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    overflowY: "auto"
  };

  const contentWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  };

  const waveImageStyle = {
    width: "100%",
    display: "block"
  };

  const titleStyle = {
    marginTop: "20px",
    fontSize: "clamp(2rem, 10vw, 4rem)",
    fontWeight: "900"
  };

  return (
    <div style={containerStyle}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div style={mainContentStyle}>
        <Header onMenuClick={() => setMenuOpen(true)} />

        <div style={contentWrapperStyle}>
          <img 
            src={waveSvg} 
            alt="wave" 
            style={waveImageStyle} 
          />
          <h1 style={titleStyle}>КИБЕРШОП</h1>
        </div>

        <div className="shop-products-container">
          <div className="products-grid">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;