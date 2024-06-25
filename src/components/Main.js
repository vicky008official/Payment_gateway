import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home'; // Ensure this import is correct based on your project structure

const Main = () => {
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <h1>Main Component</h1>
      <button onClick={goToPayment}>Go to Payment</button>
      <Home /> {/* Ensure Home is defined and correctly imported */}
    </div>
  );
}

export default Main;
