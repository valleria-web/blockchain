import { randomUUID } from "crypto";
import Node from "./node.mjs";

class Blockchain {
  constructor() {
    if (Blockchain.instance) {
      return Blockchain.instance;
    }
    this.chain = [];
    this.networkNodes = [];
    this.node = new Node(this);
    this.createGenesisTransaction();
    Blockchain.instance = this;
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

  createGenesisTransaction() {
    const rewardAmount = 50;
    const genesisTransaction = {
      transactionId: randomUUID().split("_").join(""),
      amount: rewardAmount,
      sender: "0",
      recipient: this.node.wallet.publicKey,
    };

    this.node.receiveTransaction(genesisTransaction);
    this.node.mineGenesisTransaction();
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
}

export default Blockchain;
