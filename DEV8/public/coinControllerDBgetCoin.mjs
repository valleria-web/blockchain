class CoinControllerDBgetCoin {
  constructor(blockchain, coinViewDBrenderCoin) {
    this.blockchain = blockchain;
    this.coin = this.blockchain.coin;
    this.coinViewDBrenderCoin = coinViewDBrenderCoin;
    this.coinViewDBrenderCoin.onRenderCoin(() => this.getCoin()); 
  }

  async getCoin() {
    try {
      const response = await fetch('http://localhost:3000/renderCoins'); 
      if (response.ok) {
        const coinData = await response.json();
        console.log("Coin data:", coinData);
        this.coinViewDBrenderCoin.render(coinData); 
      } else {
        console.error('Error fetching coin data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching coin data:', error);
    }
  }
}

export default CoinControllerDBgetCoin;

