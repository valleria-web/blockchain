class Coin {
  constructor(name, ticker, totalSupply) {
    if (Coin.instance) {
      return Coin.instance;
    }
    this.name = name;
    this.ticker = ticker;
    this.initialSupply = 0;
    this.actualSupply = this.initialSupply;
    this.totalSupply = totalSupply;
    Coin.instance = this;
  }

  mintCoinbase() {
    const amount = 1;
    if (
      amount <= this.totalSupply &&
      this.actualSupply + amount <= this.totalSupply
    ) {
      this.actualSupply += amount;
      console.log(`${amount} coins created`);
      return amount;
    } else {
      console.log(`Mint ${amount} coins exceeded total supply, mint rejected`);
    }
    return null;
  }

  getCoin() {
    return {
      name: this.name,
      ticker: this.ticker,
      totalSupply: this.totalSupply,
      initialSupply: this.initialSupply,
      actualSupply: this.actualSupply,
    };
  }

  getActualSupply() {
    return this.actualSupply;
  }

  getTotalSupply() {
    return this.totalSupply;
  }
}
export default Coin;
