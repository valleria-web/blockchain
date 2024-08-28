// appRoutes.mjs BACKEND API
import express from 'express';
import CoinSchema from './coinSchema.mjs';

const router = express.Router();

router.get('/renderCoins', async (req, res) => {
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

router.post('/saveCoin', async (req, res) => {
  try {
    const { name, symbol, totalSupply } = req.body;

    const coin = new CoinSchema({ name, symbol, totalSupply });

    await coin.save();

    res.status(201).json({ message: 'Coin saved successfully', coin });
  } catch (error) {
    res.status(500).json({ message: 'Error saving coin', error });
  }
});


export default router;
