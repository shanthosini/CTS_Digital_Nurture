import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {
    const conversionRate = 0.011; // approx INR to EUR rate
    const convertedValue = (rupees * conversionRate).toFixed(2);
    setEuro(convertedValue);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <label>Enter amount in Rupees: </label>
      <input type="number" value={rupees} onChange={handleChange} />
      <button onClick={handleSubmit}>Convert</button>

      {euro !== null && (
        <h3>Converted Amount: € {euro}</h3>
      )}
    </div>
  );
}

export default CurrencyConvertor;