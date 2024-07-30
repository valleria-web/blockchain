class Block {
  constructor(index, nonce, hash, previousBlockHash, transactions) {
    this.index = index;
    this.timestamp = Date.now();
    this.nonce = nonce;
    this.hash = hash;
    this.previousBlockHash = previousBlockHash;
    this.transactions = transactions || [];
  }

  static createBlock(index, nonce, hash, previousBlockHash, transactions) {
    return new Block(index, nonce, hash, previousBlockHash, transactions);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.transactions;
  }
}

export default Block;
