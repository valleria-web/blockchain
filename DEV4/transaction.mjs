import { randomUUID } from "crypto";

class Transaction {
  constructor(amount, sender, recipient) {
    this.transactionId = randomUUID().split("_").join("");
    this.coinAmount = amount;
    this.senderPublicKey = sender;
    this.recipientPublicKey = recipient;
    this.isConfirmed = false;
  }

  static createTransaction(amount, sender, recipient) {
    const newTransaction = new Transaction(amount, sender, recipient);
    console.log(`New Transaction created: ${JSON.stringify(newTransaction)}`);  
    return newTransaction;
  }
}

export default Transaction;
