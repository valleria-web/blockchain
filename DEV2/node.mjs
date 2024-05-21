import sha256 from "sha256";
import { randomUUID } from "crypto";

class Node {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.currentNodeId = randomUUID().split("_").join("");
    this.attemptBlock = [];
    this.wallets = [];
  }

  addWallet(wallet) {
    this.wallets.push(wallet);
  }

  getWallets(){
    console.log(this.wallets)
  }

  receiveaAttemptBlock(block) {
    this.attemptBlock.push(block);
  }

  mineGenesisTransaction() {
    const previousBlockHash = "0";
    const currentBlockData = {
      transactions: this.attemptBlock,
      index: 1,
    };

    const nonce = this.proofOfWork(previousBlockHash, currentBlockData);
    const hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    const newBlock = this.createNewBlock(nonce, previousBlockHash, hash);
    this.attemptBlock = [];

    return newBlock;
  }

  mineAttemptBlock() {
    const lastBlock = this.blockchain.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = {
      transactions: this.attemptBlock,
      index: lastBlock.index + 1,
    };

    const nonce = this.proofOfWork(previousBlockHash, currentBlockData);
    const hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    const newBlock = this.createNewBlock(nonce, previousBlockHash, hash);
    this.attemptBlock = [];

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
