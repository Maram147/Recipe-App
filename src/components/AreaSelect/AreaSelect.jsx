import React, { useState } from 'react';

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

export default function AreaSelect({ onAreaChange }) {
  const [selectedArea, setSelectedArea] = useState('All');

  const handleChange = (area) => {
    setSelectedArea(area);
    onAreaChange?.(area);
  };

  return (
    <div className="mt-4">
      <label htmlFor="Area-select" className="sr-only">Select Area</label>
      <select
        id="Area-select"
        value={selectedArea}
        onChange={(e) => handleChange(e.target.value)}
        className="border border-[#f29724] text-gray-900 text-sm rounded-lg
                   focus:ring-[#f29724] hover:focus:ring-[#f29724] focus:border-[#f29724] block w-full p-2.5"
      >
        <option value="All">All Areas</option>
        {Object.keys(countries).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
