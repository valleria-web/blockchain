import sha256 from "sha256";
import Transaction from "./transaction.mjs";

class Miner {
  constructor(minerId, blockchain, mempool, wallet) {
    this.minerId = minerId;
    this.blockchain = blockchain;
    this.mempool = mempool;
    this.wallet = wallet;
  }

  hashBlock(previousBlockHash, nonce) {
    const dataAsString = previousBlockHash + nonce.toString();
    const hash = sha256(dataAsString);
    //console.log(hash);
    return hash;
  }

  proofOfWork(previousBlockHash) {
    let nonce = 0;
    let hash = "";
    while (hash.substring(0, 4) !== "0000") {
      hash = this.hashBlock(previousBlockHash, nonce);
      nonce++;
    }
    return nonce - 1;
  }

  mineBlock() {
    const lastBlock = this.blockchain.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const nonce = this.proofOfWork(previousBlockHash);
    const blockHash = this.hashBlock(previousBlockHash, nonce);

    const newIndex = lastBlock.index + 1;
    const newBlock = {
      index: newIndex,
      timestamp: Date.now(),
      nonce: nonce,
      hash: blockHash,
      previousBlockHash: previousBlockHash,
      transactions: this.mempool.getPendingTransactions(),
    };

    if (this.isValidHash(blockHash)) {
      console.log(`${this.minerId} found a valid nonce!`);    
      this.confirmTransactions(newBlock.transactions); 
      this.blockchain.addBlock(newBlock);
      this.mempool.removeConfirmedTransactions();
      return newBlock;
    } else {
      console.log("Block rejected: Invalid nonce.");
    }
  }

  confirmTransactions(transactions) {
    for (const transaction of transactions) {
      transaction.isConfirmed = true;
    }
  }

  isValidHash(blockHash) {
    return blockHash.substring(0, 4) === "0000";
  }
}

export default Miner;
