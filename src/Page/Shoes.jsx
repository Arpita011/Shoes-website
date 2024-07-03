import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ShoeList from '../Components/ShoeList';
import CategoryButton from '../Components/CategoryButton';
import shoeData from '../Components/ShoeData';
import './Shoes.css';

const Shoes = () => {
  const [category, setCategory] = useState('men');
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSelectedShoe(null);
  };

  const handleShoeClick = (shoe) => {
    setSelectedShoe(shoe);
  };

  const getSuggestions = (shoe) => {
    const suggestions = [];
    const randomCategory = Math.random() < 0.5 ? 'men' : 'women';
    const shoes = shoeData[randomCategory];

    for (let i = 0; i < 4; i++) {
      suggestions.push(shoes[Math.floor(Math.random() * shoes.length)]);
    }

    return suggestions;
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section className="categories">
          <CategoryButton category="men" onClick={handleCategoryClick} />
          <CategoryButton category="women" onClick={handleCategoryClick} />
          <CategoryButton category="kids" onClick={handleCategoryClick} />
        </section>
        <ShoeList shoes={shoeData[category]} onShoeClick={handleShoeClick} />
        {selectedShoe && (
          <section className="suggestions">
            <h2>Related Shoes</h2>
            <ShoeList shoes={getSuggestions(selectedShoe)} onShoeClick={handleShoeClick} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Shoes;
