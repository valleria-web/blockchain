import sha256 from "sha256";
import { randomUUID } from "crypto";
import Miner from "./miner.mjs"

class Blockchain {
  constructor() {
    if (Blockchain.instance) {
      return Blockchain.instance;
    }
    this.chain = [];
    this.pendingTransactions = [];
    this.networkNodes = [];
    this.createGenesisBlock();
    Blockchain.instance = this;
  }

  
  createGenesisBlock() {
    const newBlock = {
      index: 1,
      timestamp: Date.now(),
      transactions: [],
      nonce: 0,
      hash: "0",
      previousBlockHash: "0",
    };
    this.addNewBlock(newBlock);
    return newBlock;
  }

  addNewBlock(newBlock) {
    this.chain.push(newBlock);
    return newBlock;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addTransactionToPendingTransactions(newTransaction) {
    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()["index"] + 1;
  }
}

export default Blockchain;
