import { randomUUID } from "crypto";

class Transaction {
  constructor(amount, sender, recipient) {
    this.transactionId = randomUUID().split("_").join("");
    this.coinAmount = amount;
    this.senderPublicKey = sender;
    this.recipientPublicKey = recipient;
    this.isConfirmed = false;
  }

  createTransaction(amount, sender, recipient) {
    const newTransaction = new Transaction(amount, sender, recipient);
    console.log(`New Transaction created: ${JSON.stringify(newTransaction)}`);  
    return newTransaction;
  }
}

export default Transaction;

const transaction1 = new Transaction(1, "0", "0");
console.log(transaction1)
