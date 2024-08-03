class CoinView {
  constructor() {
    this.coinContainer = document.getElementById("coin-container");
    this.renderCoinBtn = document.getElementById("render-coin-btn");
    this.setupEventListener();
  }

  setupEventListener() {
    this.renderCoinBtn.addEventListener("click", () => {
      console.log("Click");
      this.renderCoin();
    });
  }

  onRenderCoin(callback) {
    this.renderCoin = callback;
  }

  render(coinData) {
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

    this.coinContainer.innerHTML = '';
    this.coinContainer.appendChild(newDiv);
  }
}

export default CoinView;

