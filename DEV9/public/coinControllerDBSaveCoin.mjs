class CoinControllerDBSaveCoin {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.coin = this.blockchain.coin;
    this.saveCoinToDB();
  }

  async saveCoinToDB() {
    try {
      const coinData = this.coin.getCoin();

      const response = await fetch('http://localhost:3000/api/saveCoin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(coinData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Coin saved to database:', result);
      } else {
        const error = await response.json();
        console.error('Error saving coin to database:', error.message);
      }
    } catch (error) {
      console.error('Error saving coin to database:', error);
    }
  }
}

export default CoinControllerDBSaveCoin;

