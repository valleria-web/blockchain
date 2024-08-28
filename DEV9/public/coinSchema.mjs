//model 
import mongoose from 'mongoose';

const CoinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ticker: { type: String, required: true },
  totalSupply: { type: Number, required: true },
  initialSupply: { type: Number, default: 0 },
  actualSupply: { type: Number, default: 0 },
});

const coinSchema = mongoose.model('Coin', CoinSchema);

export default coinSchema;
