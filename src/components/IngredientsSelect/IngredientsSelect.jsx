import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Select from 'react-select';

const ingredients = [
  'Aubergine', 'Asparagus', 'Apple Cider Vinegar', 'Avocado',
  'Pork', 'Beef', 'Chicken', 'Salmon', 'chicken_breast',
  'Baby Plum Tomatoes', 'Bacon', 'Basil', 'Bay Leaves', 'Black Pepper',
  'Butter', 'Carrot', 'Cauliflower', 'Celery', 'Cheddar Cheese',
  'Chickpeas', 'Chives', 'Coconut Milk', 'Coriander', 'Cumin',
  'Cucumber', 'Egg',
];

const options = ingredients.map((ingredient) => ({
  value: ingredient,
  label: ingredient.replace(/_/g, ' '),
}));

const customStyles = {
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? '#f29724' : '#ccc',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(242, 151, 36, 0.4)' : 'none',
    '&:hover': {
      borderColor: '#f29724',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#f29724'
      : state.isFocused
      ? '#fde7cc'
      : 'white',
    color: state.isSelected ? 'white' : '#333',
    '&:hover': {
      backgroundColor: '#fde7cc',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#aaa',
  }),
};

export default function IngredientsSelect({ onIngredientsChange }) {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleChange = (selectedOption) => {
  setSelectedIngredient(selectedOption);

  if (!selectedOption) {
    onIngredientsChange?.('All');
  } else {
    onIngredientsChange?.(selectedOption.value);
  }
};


  return (
    <div className="mt-4">
      <Helmet>
        <title>Select Ingredient</title>
      </Helmet>

      <label
        htmlFor="ingredient-select"
        className="block text-sm font-lg text-gray-700 mb-2"
      >
        Select Ingredient
      </label>

      <div className="relative md:z-50">
        <Select
          inputId="ingredient-select"
          options={options}
          value={selectedIngredient}
          onChange={handleChange}
          isClearable
          placeholder="Choose a main ingredient..."
          styles={customStyles} 
          classNamePrefix="react-select"
          // menuPosition="absolute"
          menuPortalTarget={document.body}
        />
      </div>
    </div>
  );
}
