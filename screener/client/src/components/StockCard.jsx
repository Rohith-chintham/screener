import React from 'react';

const StockCard = ({ stock }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-1">{stock.name} ({stock.symbol})</h2>
      <p className="text-sm text-gray-600">Price: ₹{stock.price}</p>
      <p className="text-sm text-gray-600">P/E Ratio: {stock.pe}</p>
      <p className="text-sm text-gray-600">ROE: {stock.roe}%</p>
      <p className="text-sm text-gray-600">Debt/Equity: {stock.de_ratio}</p>
    </div>
  );
};

export default StockCard;
