import { randomUUID } from "crypto";
import Transaction from "./transaction.mjs";

class Wallet {
  constructor() {
    this.listOfPublicKey = [];
    this.publicKey = randomUUID().split("_").join("");
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  updateBalance(transaction) {
    if (this.publicKey === transaction.sender) {
      this.balance -= transaction.amount;
    }
    if (this.publicKey === transaction.recipient) {
      this.balance += transaction.amount;
    }
  }

  initiateTransaction(amount, recipientPublicKey, walletManager) {
    const sender = this.publicKey;
    const recipientWallet = walletManager.getWalletByPublicKey(recipientPublicKey);
    if (!recipientWallet) {
      console.log("Recipient wallet not found.");
      return;
    }
    const transaction = new Transaction(amount, sender, recipientPublicKey);
    transaction.createAndBroadcastTransaction(this, recipientWallet);
  }
}

export default Wallet;
