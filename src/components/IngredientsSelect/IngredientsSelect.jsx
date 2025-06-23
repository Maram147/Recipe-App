import React, { useState } from 'react';

const ingredients = [
  'Chick-Fil-A Sandwich',
  'Chicken Couscous',
  'Chicken Fajita Mac and Cheese',
  'Chicken Ham and Leek Pie',
  'Chicken Quinoa Greek Salad',
  'General Tsos Chicken',
  'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
  'Katsu Chicken curry',
  'chicken_breast',
];

export default function IngredientsSelect({ onIngredientsChange }) {
  const [selectedIngredients, setSelectedIngredients] = useState('All');

  const handleChange = (value) => {
    setSelectedIngredients(value);
    onIngredientsChange?.(value);
  };

  return (
    <div className="mt-4">
      <label htmlFor="Ingr-select" className="sr-only">Select Ingredients</label>
      <select
        id="Ingr-select"
        value={selectedIngredients}
        onChange={(e) => handleChange(e.target.value)}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-[#f29724] hover:focus:ring-[#f29724] focus:border-[#f29724] block w-full p-2.5"
      >
        <option value="All">All</option>
        {ingredients.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
