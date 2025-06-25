import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pe: {
    type: Number, // Price-to-Earnings ratio
    required: true,
  },
  roe: {
    type: Number, // Return on Equity (%)
    required: true,
  },
  de_ratio: {
    type: Number, // Debt to Equity Ratio
    required: true,
  },
  sector: {
    type: String,
    default: 'Others',
  },
}, {
  timestamps: true
});

const Stock = mongoose.model('Stock', stockSchema);
export default Stock;
