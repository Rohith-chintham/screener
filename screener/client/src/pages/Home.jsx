import React, { useEffect, useState } from 'react';
import StockCard from '../components/StockCard';
import axios from 'axios';

const Home = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stocks')
      .then(res => setStocks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Stocks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stocks.map(stock => (
          <StockCard key={stock._id} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default Home;
