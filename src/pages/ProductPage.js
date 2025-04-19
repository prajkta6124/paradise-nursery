import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext'; // Adjust the path if needed

const products = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Indoor', image: '/images/snake.jpg' },
  { id: 2, name: 'Aloe Vera', price: 10, category: 'Outdoor', image: '/images/aloe.jpg' },
  { id: 3, name: 'Peace Lily', price: 18, category: 'Indoor', image: '/images/lily.jpg' },
  { id: 4, name: 'Cactus', price: 12, category: 'Outdoor', image: '/images/cactus.jpg' },
  { id: 5, name: 'Sunflower', price: 8, category: 'Flowering', image: '/images/sunflower.jpg' },
  { id: 6, name: 'Rose', price: 20, category: 'Flowering', image: '/images/rose.jpg' },
];

const ProductPage = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setDisabledButtons([...disabledButtons, product.id]);
  };

  const renderCategory = (category) => (
    <div key={category}>
      <h3>{category} Plants</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products
          .filter((p) => p.category === category)
          .map((plant) => (
            <div key={plant.id} style={{ border: '1px solid gray', padding: '10px' }}>
              <img src={plant.image} alt={plant.name} width="100" />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>
              <button
                onClick={() => handleAddToCart(plant)}
                disabled={disabledButtons.includes(plant.id)}
              >
                {disabledButtons.includes(plant.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Plants</h2>
      {['Indoor', 'Outdoor', 'Flowering'].map(renderCategory)}
    </div>
  );
};

export default ProductPage;
