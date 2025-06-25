import express from 'express';
import {
  getAllStocks,
  getStockBySymbol,
  filterStocks,
} from '../controllers/stockController.js';

const router = express.Router();

// GET /api/stocks - fetch all stocks
router.get('/', getAllStocks);

// GET /api/stocks/:symbol - fetch single stock
router.get('/:symbol', getStockBySymbol);

// POST /api/stocks/filter - filter stocks based on PE, ROE, DE
router.post('/filter', filterStocks);

export default router;
