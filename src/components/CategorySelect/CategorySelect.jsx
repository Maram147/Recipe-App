import React, { useState } from 'react';

const categories = [
  'All', 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb',
  'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'
];

export default function CategorySelector({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <>
      {/* Select box for small screens */}
      <div className="sm:hidden mt-4">
        <label htmlFor="category-select" className="sr-only">Select Category</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => handleChange(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Horizontal tabs for larger screens */}
      <div className="hidden sm:flex flex-wrap gap-2 mt-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleChange(cat)}
            className={`px-4 py-1.5 rounded-full border text-sm transition
              ${
                selectedCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}
