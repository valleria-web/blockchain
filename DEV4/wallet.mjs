import { randomUUID } from "crypto";
import Transaction from "./transaction.mjs";

class Wallet {
  constructor(mempool, blockchain) {
    this.publicKey = randomUUID().split("_").join("");
    this.balance = 0;
    this.mempool = mempool;
    this.blockchain = blockchain;
    this.getBalance();
  }

  initiateTransaction(amount, recipientPublicKey) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return;
    }

    const transaction = new Transaction(amount, this.publicKey, recipientPublicKey);
    this.mempool.addTransaction(transaction);

    console.log(`Transaction initiated: ${amount} from ${this.publicKey} to ${recipientPublicKey}`);
  }

  getBalance() {
    let balance = 0;
    const allTransactions = this.blockchain.getBlockchain().flatMap(block => block.transactions);

    allTransactions.forEach(transaction => {
      if (transaction.recipientPublicKey === this.publicKey) {
        balance += transaction.coinAmount;
      }
      if (transaction.senderPublicKey === this.publicKey) {
        balance -= transaction.coinAmount;
      }
    });

    this.balance = balance;
    return this.balance;
  }
}

export default Wallet;

