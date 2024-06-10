class Block {
  constructor(index, nonce, hash, previousBlockHash, transactions, coinbase) {
    this.index = index;
    this.timestamp = Date.now();
    this.nonce = nonce;
    this.hash = hash;
    this.previousBlockHash = previousBlockHash;
    this.transactions = transactions || [];
    this.coinbase = coinbase;
  }

  static createBlock(index, nonce, hash, previousBlockHash, transactions, coinbase) {
    return new Block(index, nonce, hash, previousBlockHash, transactions, coinbase);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.transactions;
  }
}

export default Block;
