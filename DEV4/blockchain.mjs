import Block from "./block.mjs";
import Coin from "./coin.mjs";
import Mempool from "./mempool.mjs";
import Transaction from "./transaction.mjs";
import Wallet from "./wallet.mjs";

class Blockchain {
  constructor() {
    if (Blockchain.instance) {
      return Blockchain.instance;
    }
    Blockchain.instance = this;
    this.coin =  new Coin("Bitcoin", "BTC", 100);
    this.chain = [];
    this.mempool = new Mempool();
    this.genesisWallet = this.createGenesisWallet();   
    this.createGenesisBlock();
  }

  createGenesisWallet(){
    const wallet = new Wallet(this.mempool, this);
    console.log(wallet);
    return wallet;

  }

  createGenesisTransaction(){
    const coinbase = this.coin.mintCoinbase()
    const transaction = new Transaction();
    return transaction.createTransaction(coinbase, "0",  this.genesisWallet.publicKey);
  }    

  createGenesisBlock() {
    const rewardTransaction = this.createGenesisTransaction();
    const genesisBlock = Block.createBlock(1, "0", "0", "0", [rewardTransaction]);
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
