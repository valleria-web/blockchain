import sha256 from 'crypto-js/sha256';
import { v4 as uuidv4 } from 'uuid';
import Transaction from "./transaction.mjs";
import Blockchain from './blockchain.mjs';
import Mempool from './mempool.mjs';
import Wallet from './wallet.mjs';
import Coin from './coin.mjs';

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
    return hash.toString();
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
      this.wallet.getBalance();

      //this.saveState(); 

      return newBlock;
    } else {
      console.log("Block rejected: Invalid nonce.");
    }
  }

/*  saveState() {
    localStorage.setItem('blockchain', stringify(this.blockchain));
    localStorage.setItem('mempool', stringify(this.mempool));
    localStorage.setItem('wallet', stringify(this.wallet));
  }
*/

/*  loadState() {
    const blockchainData = localStorage.getItem('blockchain');
    const mempoolData = localStorage.getItem('mempool');
    const walletData = localStorage.getItem('wallet');

    if (blockchainData) {
      this.blockchain = Object.assign(new Blockchain(), parse(blockchainData));
    }
    if (mempoolData) {
      this.mempool = Object.assign(new Mempool(), parse(mempoolData));
    }
    if (walletData) {
      const walletParsed = parse(walletData);
      this.wallet = new Wallet("MinerWallet", this.mempool, this.blockchain, walletParsed.publicKey, walletParsed.balance);
    }
  }
  */

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
