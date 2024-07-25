import { v4 as uuidv4 } from 'uuid';

class Transaction {
  constructor(amount, sender, recipient) {
    this.transactionId = uuidv4().replace(/-/g, "");
    this.coinAmount = amount;
    this.senderPublicKey = sender;
    this.recipientPublicKey = recipient;
    this.isConfirmed = false;
  }
}

export default Transaction;
