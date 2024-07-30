import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';
import Transaction from './transaction.mjs';


class Wallet {
  constructor(name = "", mempool, blockchain, publicKey = null, balance = 0) {
    this.name = name;
    this.mempool = mempool;
    this.blockchain = blockchain;
    this.publicKey = publicKey || uuidv4().replace(/-/g, "");
    this.balance = balance;
    this.updateBalance();
  }

  getWallet() {
    this.updateBalance();
    return {
      name: this.name,
      publicKey: this.publicKey,
      balance: this.balance,
    };
  }

  getBalance() {
    this.updateBalance(); 
    return this.balance; 
  }

  sendFounds(amount, recipientPublicKey) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return;
    }

    const transaction = new Transaction(
      amount,
      this.publicKey,
      recipientPublicKey
    );
    this.mempool.addTransaction(transaction);

    console.log(
      `Transaction initiated: ${amount} from ${this.publicKey} to ${recipientPublicKey}`
    );
  }

  updateBalance() {
    let balance = 0;
    if (
      this.blockchain &&
      typeof this.blockchain.getBlockchain === "function"
    ) {
      const allTransactions = this.blockchain
        .getBlockchain()
        .flatMap((block) => block.transactions);

      allTransactions.forEach((transaction) => {
        if (transaction.recipientPublicKey === this.publicKey) {
          balance += transaction.coinAmount;
        }
        if (transaction.senderPublicKey === this.publicKey) {
          balance -= transaction.coinAmount;
        }
      });
    }

    this.balance = balance;
  }
}

export default Wallet;
