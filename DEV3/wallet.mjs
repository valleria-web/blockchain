import { randomUUID } from "crypto";
import Transaction from "./transaction.mjs";

class Wallet {
  constructor() {
    this.publicKey = randomUUID().split("_").join("");
    this.balance = 100;
  }

  initiateTransaction(amount, recipientWallet) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return;
    }

    const transaction = new Transaction(amount, this.publicKey, recipientWallet.publicKey);
    this.processTransaction(transaction, recipientWallet);

    console.log(`Se ha enviado ${amount} fondos a la billetera con clave pública ${recipientWallet.publicKey}`);
  }

  processTransaction(transaction, recipientWallet) {
    if (transaction.senderPublicKey === this.publicKey) {
      this.balance -= transaction.amount;
      recipientWallet.addBalance(transaction.amount);
    }
  }

  addBalance(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

export default Wallet;

