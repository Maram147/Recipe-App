import React, { useState } from 'react';
import Select from 'react-select';

const categories = [
  'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb',
  'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side',
  'Starter', 'Vegan', 'Vegetarian'
];

// ضيفي All كبداية
const options = [{ value: 'All', label: 'All' }, ...categories.map(cat => ({
  value: cat,
  label: cat
}))];

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

export default function CategorySelector({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState({ value: 'All', label: 'All' });

  const handleChange = (selectedOption) => {
    setSelectedCategory(selectedOption);

    if (!selectedOption) {
      onCategoryChange?.('All'); // رجّع كل البيانات لما يدوس X
    } else {
      onCategoryChange?.(selectedOption.value);
    }
  };

  return (
    <>
      {/* Select box for small screens */}
      <div className="sm:hidden mt-4">
        <label htmlFor="category-select" className="sr-only">Select Category</label>
        <Select
          inputId="category-select"
          options={options}
          value={selectedCategory}
          onChange={handleChange}
          isClearable
          placeholder="Choose a category..."
          styles={customStyles}
          menuPortalTarget={document.body}
        />
      </div>

      {/* Horizontal tabs for larger screens */}
      <div className="hidden sm:flex flex-wrap gap-2 mt-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleChange(opt)}
            className={`px-4 py-1.5 rounded-full border text-sm transition
              ${
                selectedCategory?.value === opt.value
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </>
  );
}
