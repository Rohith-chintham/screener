import React, { useState } from 'react';
import ScreenerForm from '../components/ScreenerForm';
import StockCard from '../components/StockCard';
import axios from 'axios';

const Screener = () => {
  const [filteredStocks, setFilteredStocks] = useState([]);

  const handleFilter = async (filters) => {
    try {
      const res = await axios.post('http://localhost:5000/api/stocks/filter', filters);
      setFilteredStocks(res.data);
    } catch (error) {
      console.error('Error filtering stocks', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Custom Screener</h2>
      <ScreenerForm onFilter={handleFilter} />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredStocks.map(stock => (
          <StockCard key={stock._id} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default Screener;