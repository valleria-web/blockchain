import { randomUUID } from "crypto";

class Transaction {
  constructor(amount, sender, recipient) {
    this.transactionId = randomUUID().split("_").join("");
    this.amount = amount;
    this.sender = sender;
    this.recipient = recipient;
    this.createAndBroadCastTransaction();
  }

  createAndBroadCastTransaction() {
    console.log(`Transaction ID: ${this.transactionId}\nAmount: ${this.amount}\nSender: ${this.sender}\nRecipient: ${this.recipient}`);
  }
}

export default Transaction;
