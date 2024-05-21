import { randomUUID } from "crypto";

class Transaction {
  constructor(amount, sender, recipient) {
    this.amount = amount;
    this.sender = sender;
    this.recipient = recipient;
  }

  createAndBroadcastTransaction
  (senderWallet, recipientWallet) {
    const transactionId = randomUUID().split("_").join("");
    const transaction = {
      transactionId: transactionId,
      amount: this.amount,
      sender: senderWallet.publicKey,
      recipient: recipientWallet.publicKey,
    };

    console.log(`Transaction created:`, transaction);

    senderWallet.updateBalance(transaction);
    recipientWallet.updateBalance(transaction);
  }
}

export default Transaction;
