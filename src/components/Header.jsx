import React, { useState } from 'react';
import './styles/header.css'; // Import CSS file for styling

const Header = () => {
  const [showCityBar, setShowCityBar] = useState(true);

  const toggleCityBar = () => {
    setShowCityBar(!showCityBar);
  };

  // List of cities in Karnataka state
  const citiesInKarnataka = [
    'Bangalore',
    'Mysore',
    'Hubli',
    'Mangalore',
    'Belgaum',
    // Add more cities as needed
  ];

  return (
    <header>
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
        <h1>Crime Prediction</h1>
      </div>
      <div className={`city-bar ${showCityBar ? '' : 'hidden'}`}>
        <h3>Cities in Karnataka</h3>
        <ul>
          {citiesInKarnataka.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
      <button className="toggle-city-bar" onClick={toggleCityBar}>
        {showCityBar ? 'Hide City Bar' : 'Show City Bar'}
      </button>
    </header>
  );
};

export default Header;
