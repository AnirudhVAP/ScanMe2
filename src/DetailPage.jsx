// DetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Slider from 'react-slick';
import './DetailPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dishes = [
  { id: '1', name: 'Spinach Salad', calories: '460 Cal', price: '$18.49', image: '/public/spinach-salad.jpg', description: 'Asparagus and tomatoes with herbs.' },
  { id: '2', name: 'Mongolian Beef', calories: '750 Cal', price: '$15.49', image: '/public/mongolian-beef.jpg', description: 'Beef with vegetables and herbs.' },
  { id: '3', name: 'Baked Salmon', calories: '260 Cal', price: '$20.49', image: '/public/baked-salmon.jpg', description: 'Fillet grilled to perfection and topped with garlic herb butter. Served with parmesan garlic broccoli.' },
  { id: '4', name: 'Fruit Salad', calories: '185 Cal', price: '$15.49', image: '/public/fruit-salad.jpg', description: 'Fresh fruit salad with a mix of seasonal fruits.' },
];

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const selectedDish = dishes.find(dish => dish.id === id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!selectedDish) {
    return <div>Dish not found</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <div className="logo">FoodPointe Restaurant</div>
      </div>
      <div className="selected-dish">
        <div className="selected-dish-header">
          <div>
            <div className="name">{selectedDish.name}</div>
            <div className="calories">{selectedDish.calories}</div>
            <div className="price">{selectedDish.price}</div>
          </div>
          <div className="heart-icon">❤️</div>
        </div>
        <img src={selectedDish.image} alt={selectedDish.name} className="selected-image" />
        <div className="description">{selectedDish.description}</div>
        <button className="order-button">Order Now</button>
      </div>
      <div className="more-dishes">More Dishes</div>
      <Slider {...settings}>
        {dishes.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} className="image" />
            <div className="text-container">
              <div className="name">{item.name}</div>
              <div className="calories">{item.calories}</div>
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DetailPage;
