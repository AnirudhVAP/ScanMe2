import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Menu.css';

const dishes = {
  veg: [
    { id: 1, name: 'Paneer Butter Masala', image: '/paneer.jpg', price: 200 },
    { id: 2, name: 'Aloo Gobi', image: '/aloogobi.jpg', price: 150 },
  ],
  'non-veg': [
    { id: 3, name: 'Chicken Curry', image: '/chickencurry.jpg', price: 250 },
    { id: 4, name: 'Mutton Biryani', image: '/biryani.jpg', price: 300 },
  ],
  desserts: [
    { id: 5, name: 'Gulab Jamun', image: '/gulabjamun.jpg', price: 100 },
    { id: 6, name: 'Ice Cream', image: '/icecream.jpg', price: 120 },
  ],
};

const Menu = () => {
  const { category } = useParams();
  const items = dishes[category] || [];

  return (
    <div className="menu-container">
      <h1 className="menu-title">{category.toUpperCase()}</h1>
      <ul className="dish-list">
        {items.map(dish => (
          <li key={dish.id} className="dish-item">
            <Link to={`/dish/${dish.id}`}>
              <img src={dish.image} alt={dish.name} />
              <div>
                <h2>{dish.name}</h2>
                <p>Price: ₹{dish.price}</p>
              </div>
            </Link>
            <button className="add-button">Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
