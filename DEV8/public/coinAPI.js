import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CoinSchema from './coinSchema.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB', err));


app.get('/renderCoins', async (req, res) => {
  try {
    const coin = await CoinSchema.findOne({});
    if (coin) {
      res.json(coin); 
    } else {
      res.status(404).json({ message: 'Coin not found' }); 
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error }); 
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
