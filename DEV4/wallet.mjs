import { randomUUID } from "crypto";
import Transaction from "./transaction.mjs";

class Wallet {
  constructor(mempool, blockchain) {
    this.publicKey = randomUUID().split("_").join("");
    this.balance = 0;
    this.mempool = mempool
    this.blockchain = blockchain;
    this.updateBalance(); 
  }

  initiateTransaction(amount, recipientPublicKey) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return;
    }

    const transaction = new Transaction(amount, this.publicKey, recipientPublicKey);
    this.mempool.addTransaction(transaction);

    console.log(`Se ha enviado ${amount} fondos a la billetera con clave pública ${recipientPublicKey}`);
  }

  updateBalance() {
    let balance = 0;
    const allTransactions = this.blockchain.getAllTransactions();

    allTransactions.forEach(transaction => {
      if (transaction.recipientPublicKey === this.publicKey) {
        balance += transaction.amount;
      }
      if (transaction.senderPublicKey === this.publicKey) {
        balance -= transaction.amount;
      }
    });

    this.balance = balance;
    console.log(`Balance actualizado: ${this.balance}`);
  }

  getBalance(){
    return this.balance;
  }
}

export default Wallet;

