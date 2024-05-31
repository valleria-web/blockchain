import Transaction from "./transaction.mjs";

class Blockchain {
  constructor(mempool) {
    if (Blockchain.instance) {
      return Blockchain.instance;
    }
    this.chain = [];
    this.mempool = mempool;
    this.createGenesisBlock();
    Blockchain.instance = this;
  }

  createGenesisBlock() {
    const genesisBlock = {
      index: 1,
      timestamp: Date.now(),
      transactions: [],
      nonce: 0,
      hash: "0",
      previousBlockHash: "0",
      minerId: null,
    };
    this.createCoinbaseTransaction();
    this.chain.push(genesisBlock);
  }

  createCoinbaseTransaction() {
    const coinbase = 50;
    const coinbaseTransaction = new Transaction(coinbase, "0", "0");

    this.mempool.addTransaction(coinbaseTransaction);

    return coinbaseTransaction;
  }

  createNewBlock(nonce, previousBlockHash, hash, minerId) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.mempool
        .getPendingTransactions()
        .map((t) => ({ ...t })),
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash,
      minerId: minerId,
    };

    newBlock.transactions.forEach((transaction) => {
      transaction.isConfirmed = true;
    });

    this.mempool.pendingTransactions = [];
    this.chain.push(newBlock);

    this.createCoinbaseTransaction();

    return newBlock;
  }

  confirmTransaction(transactionId) {
    for (const block of this.chain) {
      const transaction = block.transactions.find(
        (t) => t.transactionId === transactionId
      );
      if (transaction) {
        transaction.isConfirmed = true;
        return;
      }
    }
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  getBlockByIndex(index) {
    return this.chain.find((block) => block.index === index);
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
        minerId: block.minerId,
      });
    });
    return blockchainData;
  }

  getAllTransactions() {
    const transactions = [];
    this.chain.forEach((block) => {
      transactions.push(...block.transactions);
    });
    return transactions;
  }
}

export default Blockchain;
