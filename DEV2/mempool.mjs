class Mempool {
  constructor() {
    this.pendingTransactions = [];
  }

  receiveTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getAttemptBlock(){
    
  }


  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.blockchain.chain.length + 1,
      timestamp: Date.now(),
      transactions: [...this.pendingTransactions],
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash,
    };
    this.blockchain.chain.push(newBlock);

    return newBlock;
  }


}
export default Mempool;
