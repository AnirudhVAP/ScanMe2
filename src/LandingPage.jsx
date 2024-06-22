import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import searchIcon from './assets/search-icon.jpg';
import moreOptionsIcon from './assets/more-options-icon.png';
import spinachSalad from './assets/spinach-salad.jpg';
import mongolianBeef from './assets/mongolian-beef.jpg';
import bakedSalmon from './assets/baked-salmon.jpg';
import fruitSalad from './assets/fruit-salad.jpg';

const dishes = [
  { id: '1', name: 'Spinach Salad', calories: '460 Cal', price: '$18.49', image: spinachSalad },
  { id: '2', name: 'Mongolian Beef', calories: '750 Cal', price: '$15.49', image: mongolianBeef },
  { id: '3', name: 'Baked Salmon', calories: '260 Cal', price: '$20.49', image: bakedSalmon },
  { id: '4', name: 'Fruit Salad', calories: '185 Cal', price: '$15.49', image: fruitSalad },
];

function LandingPage() {
  const navigate = useNavigate();
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleItemClick = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <div className="logo">FoodPointe Restaurant</div>
      </div>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <img src={moreOptionsIcon} alt="More Options" className="more-options-icon" />
      </div>
      <div className="list">
        {filteredDishes.map(item => (
          <div
            key={item.id}
            className={`item ${hoveredItemId === item.id ? 'item-hovered' : ''}`}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt={item.name} className="image" />
            <div className="text-container">
              <div className="name">{item.name}</div>
              <div className="calories">{item.calories}</div>
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage; 