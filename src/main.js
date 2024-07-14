import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const calculateFinalPrice = () => {
    const discountedPrice = price - (price * discount / 100);
    const totalPrice = discountedPrice + (discountedPrice * vat / 100);
    setFinalPrice(totalPrice);
  };

  return (
    <div className="App">
      <h1>Discount and VAT Calculator</h1>
      <div>
        <label>Price: </label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Discount (%): </label>
        <input 
          type="number" 
          value={discount} 
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>VAT (%): </label>
        <input 
          type="number" 
          value={vat} 
          onChange={(e) => setVat(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateFinalPrice}>Calculate</button>
      <h2>Final Price: {finalPrice.toFixed(2)}</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
