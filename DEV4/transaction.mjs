import { randomUUID } from "crypto";

class Transaction {
  constructor(amount, senderPublicKey, recipientPublicKey) {
    this.transactionId = randomUUID().split("_").join("");
    this.amount = amount;
    this.senderPublicKey = senderPublicKey;
    this.recipientPublicKey = recipientPublicKey;
    this.isConfirmed = false;
  }
}

export default Transaction;
