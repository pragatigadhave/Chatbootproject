import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail'; // Import the new component
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetail />} /> {/* New route for product details */}
        </Routes>
      </div>
    </Router>
  );
  }

// const App = () => {
//   const imageUrl = 'img1.jpg';

//   return (
//     <div>
//       <ImageWithOverlay imageUrl={imag1} />
//     </div>
//   );
// };

export default App;


