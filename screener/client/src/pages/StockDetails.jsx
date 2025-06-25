import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChartDisplay from '../components/ChartDisplay';
import axios from 'axios';

const StockDetails = () => {
  const { symbol } = useParams();
  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStock = async () => {
      const res = await axios.get(`http://localhost:5000/api/stocks/${symbol}`);
      setStock(res.data.stock);
      setChartData(res.data.history); // Assume array of { date, price }
    };
    fetchStock();
  }, [symbol]);

  if (!stock) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{stock.name} ({stock.symbol})</h2>
      <p className="text-gray-700 mb-4">Industry: {stock.sector}</p>
      <ul className="mb-6">
        <li><strong>Price:</strong> ₹{stock.price}</li>
        <li><strong>P/E Ratio:</strong> {stock.pe}</li>
        <li><strong>ROE:</strong> {stock.roe}%</li>
        <li><strong>Debt/Equity:</strong> {stock.de_ratio}</li>
      </ul>
      <ChartDisplay data={chartData} />
    </div>
  );
};

export default StockDetails;
