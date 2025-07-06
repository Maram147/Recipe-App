import React, { useState } from 'react';
import Select from 'react-select';

const countries = {
  'American': 'us',
  'British': 'gb',
  'Canadian': 'ca',
  'Chinese': 'cn',
  'Croatian': 'hr',
  'Dutch': 'nl',
  'Egyptian': 'eg',
  'French': 'fr',
  'Greek': 'gr',
  'Indian': 'in',
  'Irish': 'ie',
  'Italian': 'it',
  'Jamaican': 'jm',
  'Japanese': 'jp',
  'Malaysian': 'my',
  'Mexican': 'mx',
  'Moroccan': 'ma',
  'Russian': 'ru',
  'Spanish': 'es',
  'Thai': 'th',
  'Tunisian': 'tn',
  'Turkish': 'tr',
  'Polish': 'pl',
  'Vietnamese': 'vn',
  'Portuguese': 'pt',
  'Korean': 'kr',
  'Filipino': 'ph',
  'Uruguayan': 'uy',
  'Kenyan': 'ke',
  'Ukrainian': 'ua',
};

const options = Object.keys(countries).map((area) => ({
  value: area,
  label: area,
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

export default function AreaSelect({ onAreaChange }) {
  const [selectedArea, setSelectedArea] = useState(null); 

  const handleChange = (selectedOption) => {
    setSelectedArea(selectedOption);
    if (!selectedOption) {
      onAreaChange?.('All'); 
    } else {
      onAreaChange?.(selectedOption.value); 
    }
  };

  return (
    <div className="mt-4 relative md:z-50 ">
      <label htmlFor="area-select" className="block text-sm font-lg text-gray-700 mb-2">
        Select Area
      </label>

      <Select
        inputId="area-select"
        options={options}
        value={selectedArea}
        onChange={handleChange}
        isClearable
        placeholder="Choose an area..."
        className="text-sm"
        styles={customStyles}
        classNamePrefix="react-select"
        // menuPosition="absolute"
        menuPortalTarget={document.body}
      />
    </div>
  );
}
