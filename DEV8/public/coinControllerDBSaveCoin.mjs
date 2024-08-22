import CoinSchema from './coinSchema.js'; 

class CoinControllerDBSaveCoin {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.coin = this.blockchain.coin;
    this.saveCoinToDB();
  }

  async saveCoinToDB() {
    try {
      const coinData = this.coin.getCoin();
      const coin = new CoinSchema(coinData); 
      await coin.save(); 
      console.log('Coin saved to database');
    } catch (error) {
      console.error('Error saving coin to database', error);
    }
  }
}

export default CoinControllerDBSaveCoin;
