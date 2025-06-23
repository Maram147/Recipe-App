import React, { useState } from 'react';

const ingredients = [
  'Aubergine',
  'Asparagus',
  'Apple Cider Vinegar',
  'Avocado',
  'Pork',
  'Beef',
  'Chicken',
  'Salmon',
  'chicken_breast',
  'Baby Plum Tomatoes',
  'Bacon',
  'Basil',
  'Bay Leaves',   
  'Black Pepper',
  'Butter', 
  'Carrot',
  'Cauliflower',
  'Celery',
  'Cheddar Cheese',
  'Chickpeas',

  'Chives',
  'Coconut Milk',
  'Coriander',
  'Cumin',
  'Cucumber',
  'Egg',
  
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
        <option value="All">Main Ingredient</option>
        {ingredients.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
