import Stock from '../models/Stock.js';

// GET /api/stocks - Get all stocks
export const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find({});
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stocks' });
  }
};

// GET /api/stocks/:symbol - Get stock by symbol with mock history
export const getStockBySymbol = async (req, res) => {
  const { symbol } = req.params;
  try {
    const stock = await Stock.findOne({ symbol: symbol.toUpperCase() });

    if (!stock) {
      return res.status(404).json({ error: 'Stock not found' });
    }

    // Mock chart data
    const history = [
      { date: '2024-06-01', price: stock.price * 0.95 },
      { date: '2024-06-08', price: stock.price * 0.98 },
      { date: '2024-06-15', price: stock.price * 1.02 },
      { date: '2024-06-22', price: stock.price * 1.05 },
      { date: '2024-06-29', price: stock.price },
    ];

    res.status(200).json({ stock, history });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock' });
  }
};

// POST /api/stocks/filter - Filter stocks based on user input
export const filterStocks = async (req, res) => {
  const { pe, roe, de } = req.body;

  const query = {};

  if (pe) query.pe = { $lt: Number(pe) };
  if (roe) query.roe = { $gt: Number(roe) };
  if (de) query.de_ratio = { $lt: Number(de) };

  try {
    const filtered = await Stock.find(query);
    res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Failed to filter stocks' });
  }
};
