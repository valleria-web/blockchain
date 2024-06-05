class Coin {
  constructor(totalSupply) {
    if (Coin.instance) {
      return Coin.instance;
    }
    this.initialSupply = 0;
    this.supply = this.initialSupply;
    this.totalSupply = totalSupply;
    Coin.instance = this;
  }

  mintCoin(amount) {
    if (
      amount <= this.totalSupply &&
      this.supply + amount <= this.totalSupply
    ) {
      this.supply += amount;
      console.log(`${amount} coins created`);
      return this.supply;
    } else {
      console.log(`Mint ${amount} coins succedd total supply, mint rejected`);
    }
    return 0;
  }

  getSupply() {
    return this.supply;
  }
}
export default Coin;
