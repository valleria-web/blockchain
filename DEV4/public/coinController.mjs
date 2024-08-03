class CoinController {
  constructor(blockchain, coinView) {
    this.blockchain = blockchain;
    this.coin = this.blockchain.coin;
    this.coinView = coinView;
    this.coinView.onRenderCoin(() => this.renderCoin());
  }

  renderCoin() {
    const coinData = this.coin.getCoin();
    console.log("Coin data:", coinData);
    this.coinView.render(coinData);
  }
}

export default CoinController;
