import sha256 from "sha256";
import { randomUUID } from "crypto";

class Node {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.currentNodeId = randomUUID().split("_").join("");
    this.pendingTransactions = [];
    this.wallets = [];
  }

  addWallet(wallet) {
    this.wallets.push(wallet);
  }

  receiveTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  mineGenesisTransaction() {
    const previousBlockHash = "0";
    const currentBlockData = {
      transactions: this.pendingTransactions,
      index: 1,
    };

    const nonce = this.proofOfWork(previousBlockHash, currentBlockData);
    const hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    const newBlock = this.createNewBlock(nonce, previousBlockHash, hash);
    this.pendingTransactions = [];

    return newBlock;
  }

  minePendingTransactions() {
    const lastBlock = this.blockchain.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = {
      transactions: this.pendingTransactions,
      index: lastBlock.index + 1,
    };

    const nonce = this.proofOfWork(previousBlockHash, currentBlockData);
    const hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    const newBlock = this.createNewBlock(nonce, previousBlockHash, hash);
    this.pendingTransactions = [];

    return newBlock;
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

  proofOfWork(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0, 4) !== "0000") {
      nonce++;
      hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }
    return nonce;
  }

  hashBlock(previousBlockHash, currentBlockData, nonce) {
    const dataAsString =
      previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);

    console.log(hash);

    return hash;
  }
}

export default Node;
