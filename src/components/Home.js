import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  const navigateToPayment = () => {
    navigate('/payment');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToPayment}>Go to Payment</button>
    </div>
  );
}

export default Home;
