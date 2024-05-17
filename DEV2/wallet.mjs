import { randomUUID } from "crypto";

class Wallet {
  constructor(node) {
    this.node = node;
    this.publicKey = randomUUID().split("_").join("");
    this.balance = 0;
  }

  createAndBroadcastTransaction(amount, recipient) {
    const transactionId = randomUUID().split("_").join("");
    const transaction = {
      transactionId: transactionId,
      amount: amount,
      sender: this.publicKey,
      recipient: recipient,
    };
    console.log(`Transaction created:`, transaction);
    this.node.receiveTransaction(transaction);
  }

  getBalance() {
    // Implement balance calculation
  }
}

export default Wallet;
