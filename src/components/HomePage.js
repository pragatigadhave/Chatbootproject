import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';

const products = [
  { 
    id: 1, 
    name: 'Laptop', 
    price: 50000, 
    image: img1, 
    description: 'Experience cutting-edge performance with our latest laptop, featuring a high-resolution display, powerful processor, and long-lasting battery life. Perfect for both work and play.' 
  },
  { 
    id: 2, 
    name: 'Headphone', 
    price: 1000, 
    image: img2, 
    description: 'Immerse yourself in crystal-clear sound with our comfortable, noise-cancelling headphones. Ideal for music lovers and gamers alike.' 
  },
  { 
    id: 3, 
    name: 'Mobile', 
    price: 17000, 
    image: img3, 
    description: 'Stay connected with the latest in mobile technology. Our smartphones offer sleek designs, superior camera quality, and lightning-fast performance.' 
  },
  { 
    id: 4, 
    name: 'Mouse', 
    price: 500, 
    image: img4, 
    description: 'Enhance your productivity with our precision mouse. Ergonomically designed for comfort and equipped with responsive buttons for seamless operation.' 
  },
];

const HomePage = () => {
  let navigate = useNavigate();

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const goToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <div className="products">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product" 
            onClick={() => goToProductDetail(product.id)}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <h2>{product.name}</h2>
            <p>Rs{product.price}</p>
            {hoveredProduct === product.id && <p className="description">{product.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
