class Blockchain {
  constructor() {
    if (Blockchain.instance) {
      return Blockchain.instance;
    }
    this.chain = [];
  }

  getBlockchain() {
    const blockchainData = [];
    this.chain.forEach((block) => {
      blockchainData.push({
        index: block.index,
        timestamp: block.timestamp,
        transactions: block.transactions,
        previousBlockHash: block.previousBlockHash,
        hash: block.hash,
        nonce: block.nonce,
      });
    });
    return blockchainData;
  }

  getAllTransactions() {
    const transactions = [];
    this.chain.forEach(block => {
      transactions.push(...block.transactions);
    });
    return transactions;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
}

export default Blockchain;

const bitcoin = new Blockchain();

bitcoin.getBlockchain();
