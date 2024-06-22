import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DishDetails.css';

const dishes = [
  { id: 1, name: 'Paneer Butter Masala', image: '/paneer.jpg', price: 200 },
  { id: 2, name: 'Aloo Gobi', image: '/aloogobi.jpg', price: 150 },
  { id: 3, name: 'Chicken Curry', image: '/chickencurry.jpg', price: 250 },
  { id: 4, name: 'Mutton Biryani', image: '/biryani.jpg', price: 300 },
  { id: 5, name: 'Gulab Jamun', image: '/gulabjamun.jpg', price: 100 },
  { id: 6, name: 'Ice Cream', image: '/icecream.jpg', price: 120 },
];

const DishDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dishIndex = dishes.findIndex(dish => dish.id == id);
  const dish = dishes[dishIndex];
  const [startY, setStartY] = useState(null);
  const [transition, setTransition] = useState('none');

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!startY) return;
    const currentY = e.touches[0].clientY;
    const diffY = startY - currentY;

    if (diffY > 50) {
      setTransition('next');
    } else if (diffY < -50) {
      setTransition('prev');
    }
  };

  const handleTouchEnd = () => {
    if (transition === 'next') {
      navigate(`/dish/${dishes[(dishIndex + 1) % dishes.length].id}`);
    } else if (transition === 'prev') {
      navigate(`/dish/${dishes[(dishIndex - 1 + dishes.length) % dishes.length].id}`);
    }
    setStartY(null);
    setTransition('none');
  };

  useEffect(() => {
    setTransition('none');
  }, [id]);

  return (
    <div
      className={`dish-detail-container ${transition}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="dish-image-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className="dish-info">
          <h1 className="dish-name">{dish.name}</h1>
          <p className="dish-price">Price: ₹{dish.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
