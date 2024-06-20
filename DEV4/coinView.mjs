class CoinView {
  constructor(blockhain) {
    this.coin = blockhain.coin;
    this.coinContainer = document.getElementById("coin-container");
  }

  renderCoin() {
    const coinData = this.coin.getCoin();
    const { name, ticker, initialSupply, actualSupply, totalSupply } = coinData;

    const newDiv = document.createElement("div");
    newDiv.classList.add("coin");

    newDiv.innerHTML = `
    <ul class="block">
    <h3>Coin</h3>
          <li>Name: ${name}</li>
          <li>Ticker: ${ticker}</li> 
          <li>Initial Supply: ${initialSupply}</li>       
          <li>Actual Supply: ${actualSupply}</li>    
          <li>Total Supply: ${totalSupply}</li>
    </ul>`;

    this.coinContainer.appendChild(newDiv);
  }
}

export default CoinView;
