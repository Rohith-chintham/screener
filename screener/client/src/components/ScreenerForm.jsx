// src/components/ScreenerForm.jsx
import React, { useState } from 'react';

const ScreenerForm = ({ onFilter }) => {
  const [pe, setPe] = useState('');
  const [roe, setRoe] = useState('');
  const [de, setDe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ pe, roe, de });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h2>Stock Filter</h2>
      <input type="number" placeholder="P/E" value={pe} onChange={(e) => setPe(e.target.value)} />
      <input type="number" placeholder="ROE" value={roe} onChange={(e) => setRoe(e.target.value)} />
      <input type="number" placeholder="Debt/Equity" value={de} onChange={(e) => setDe(e.target.value)} />
      <button type="submit">Apply</button>
    </form>
  );
};

export default ScreenerForm;
