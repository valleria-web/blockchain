import Transaction from "./transaction.mjs";
import Block from "./block.mjs";

class Miner {
  constructor(minerId, blockchain, mempool, wallet, CryptoJS) {
    this.minerId = minerId;
    this.blockchain = blockchain;
    this.mempool = mempool;
    this.wallet = wallet;
    this.CryptoJS = CryptoJS;
  }

  hashBlock(previousBlockHash, nonce) {
    const dataAsString = previousBlockHash + nonce.toString();
    const hash = CryptoJS.SHA256(dataAsString);
    return hash.toString(CryptoJS.enc.Hex);
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
    const coinbase = this.blockchain.coin.mintCoinbase();
    const rewardTransaction = new Transaction(
      coinbase,
      "0",
      this.wallet.publicKey
    );
    this.mempool.addTransaction(rewardTransaction);
    const newIndex = lastBlock.index + 1;

    const newBlock = Block.createBlock(
      newIndex,
      nonce,
      blockHash,
      previousBlockHash,
      this.mempool.getPendingTransactions()
    );

    if (this.isValidHash(blockHash)) {
      console.log(`${this.minerId} found a valid nonce!`);
      this.confirmTransactions(newBlock.transactions);
      this.blockchain.addBlock(newBlock);
      this.mempool.removeConfirmedTransactions();
      this.wallet.getBalance();

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
