import axios from 'axios';

const API_URL = 'http://localhost:5000/api/stocks'; // Update if hosted elsewhere

// 🔍 Get all stocks
export const getAllStocks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Expecting: [{}, {}, ...]
  } catch (error) {
    console.error('Error fetching all stocks:', error);
    return [];
  }
};

// 📊 Get a single stock by symbol
export const getStockBySymbol = async (symbol) => {
  try {
    const response = await axios.get(`${API_URL}/${symbol}`);
    return response.data; // Expecting: { stock, history }
  } catch (error) {
    console.error(`Error fetching stock ${symbol}:`, error);
    return null;
  }
};

// 🧠 Filter stocks using custom criteria (P/E, ROE, etc.)
export const filterStocks = async (filters) => {
  try {
    const response = await axios.post(`${API_URL}/filter`, filters);
    return response.data; // Expecting: filtered stock array
  } catch (error) {
    console.error('Error filtering stocks:', error);
    return [];
  }
};
