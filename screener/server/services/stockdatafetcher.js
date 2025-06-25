import yf from 'yahoo-finance2';
import Stock from '../models/Stock.js';

/**
 * Fetch stock data by symbol and save/update it in MongoDB.
 * @param {String} symbol - e.g., "TCS.NS", "INFY.NS"
 */
export const fetchAndSaveStock = async (symbol) => {
  try {
    const quote = await yf.quote(symbol);

    const stockData = {
      name: quote.shortName,
      symbol: quote.symbol,
      price: quote.regularMarketPrice,
      pe: quote.trailingPE || 0,
      roe: Math.random() * 30, // Yahoo doesn't provide ROE directly
      de_ratio: Math.random(), // Fake value for now
      sector: quote.sector || 'General'
    };

    // Upsert into MongoDB
    const updated = await Stock.findOneAndUpdate(
      { symbol: stockData.symbol },
      stockData,
      { upsert: true, new: true }
    );

    console.log(`✅ Updated stock: ${updated.symbol}`);
    return updated;
  } catch (error) {
    console.error(`❌ Failed to fetch ${symbol}:`, error.message);
  }
};

/**
 * Fetch multiple stocks in batch
 * @param {Array} symbols - e.g., ["TCS.NS", "RELIANCE.NS", "INFY.NS"]
 */
export const fetchBatchStocks = async (symbols) => {
  for (const symbol of symbols) {
    await fetchAndSaveStock(symbol);
  }
};
