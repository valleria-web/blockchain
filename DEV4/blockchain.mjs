import Block from "./block.mjs";
import Coin from "./coin.mjs";

class Blockchain {
  constructor(coin) {
    if (Blockchain.instance) {
      return Blockchain.instance;
    }
    Blockchain.instance = this;
    this.coin = coin;
    this.chain = [];
    this.createGenesisBlock();
  }

  createGenesisBlock() {
    const coinbase = this.coin.mintCoinbase();
    const genesisBlock = Block.createBlock(1, "0", "0", "0", [], coinbase);
    this.addBlock(genesisBlock);
  }

  addBlock(block) {
    if (this.validateBlock(block)) {
      this.chain.push(block);
      console.log("New block added to the chain.");
    } else {
      console.log("Block rejected: Invalid index.");
    }
  }

  validateBlock(block) {
    const lastBlock = this.chain[this.chain.length - 1];
    if (!lastBlock || block.index > lastBlock.index) {
      return block.index === this.chain.length + 1;
    } else {
      return false;
    }
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  getBlockchain() {
    return this.chain;
  }

  viewTransactions() {
    this.chain.forEach(block => {
      console.log(`Transactions in Block ${block.index}:`);
      block.transactions.forEach(transaction => {
        console.log(transaction);
      });
    });
  }
}

export default Blockchain;
