import React from 'react';

const CategoryButton = ({ category, onClick }) => {
  return (
    <button onClick={() => onClick(category)}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  );
};

export default CategoryButton;
