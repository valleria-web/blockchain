import Wallet from "./wallet.mjs";
import sha256 from "sha256";


class Miner {
  constructor(mempool, blockchain, minerId) {
    this.mempool = mempool;
    this.blockchain = blockchain;
    this.minerId = minerId;
    this.minerWallet = new Wallet();
  }

  getMinerWallet() {
    return this.minerWallet;
  }

  hashBlock(previousBlockHash, currentBlockData, nonce) {
    const dataAsString =
      previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
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

  async mineBlock() {
    const lastBlock = this.blockchain.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = this.mempool.getPendingTransactions();
    const nonce = this.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = this.hashBlock(
      previousBlockHash,
      currentBlockData,
      nonce
    );

    if (this.isValidBlock(blockHash)) {
      console.log(`${this.minerId} found a valid block!`);
      const newBlock = this.blockchain.createNewBlock(
        nonce,
        previousBlockHash,
        blockHash,
        this.minerId
      );

      return newBlock;
    }
  }

  isValidBlock(blockHash) {
    return blockHash.substring(0, 4) === "0000";
  }
}

export default Miner;