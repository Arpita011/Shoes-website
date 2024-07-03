import React from 'react';
import './ShoeList.css';

const ShoeList = ({ shoes, onShoeClick }) => {
  return (
    <section className="shoe-list">
      {shoes.map((shoe, index) => (
        <div className="shoe-item" key={index} onClick={() => onShoeClick(shoe)}>
          <img src={shoe.src} alt={shoe.name} />
          <h2>{shoe.name}</h2>
          <p>Brand: {shoe.brand}</p>
          <p>Size: {shoe.size}</p>
          <p>Price: {shoe.price}</p>
          <p>Description: {shoe.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ShoeList;
