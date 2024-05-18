import { randomUUID } from "crypto";

class Wallet {
  constructor(node) {
    this.node = node;
    this.publicKey = randomUUID().split("_").join("");
    this.balance = 0;
  }

  createAndBroadcastTransaction(amount, recipientWallet) {
    const transactionId = randomUUID().split("_").join("");
    const transaction = {
      transactionId: transactionId,
      amount: amount,
      sender: this.publicKey,
      recipient: recipientWallet.publicKey,
    };

    this.node.receiveTransaction(transaction);

    console.log(`Transaction created:`, transaction);

    recipientWallet.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

  updateBalance(sender, recipient, amount) {
    if (this.publicKey === sender) {
      this.balance -= amount;
    }
    if (this.publicKey === recipient) {
      this.balance += amount;
    }
  }
}

export default Wallet;

