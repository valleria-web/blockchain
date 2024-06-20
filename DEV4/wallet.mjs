import Transaction from "./transaction.mjs";

class Wallet {
  constructor(mempool, blockchain) {
    this.publicKey = uuidv4().replace(/-/g, "");
    this.balance = 0;
    this.mempool = mempool;
    this.blockchain = blockchain;
    this.getBalance();
  }

  getWallet() {
    this.getBalance();
    return {
      publicKey: this.publicKey,
      balance: this.balance,
    };
  }

  sendFounds(amount, recipientPublicKey) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return;
    }

    const transaction = new Transaction(
      amount,
      this.publicKey,
      recipientPublicKey
    );
    this.mempool.addTransaction(transaction);

    console.log(
      `Transaction initiated: ${amount} from ${this.publicKey} to ${recipientPublicKey}`
    );
  }

  getBalance() {
    let balance = 50;
    const allTransactions = this.blockchain
      .getBlockchain()
      .flatMap((block) => block.transactions);

    allTransactions.forEach((transaction) => {
      if (transaction.recipientPublicKey === this.publicKey) {
        balance += transaction.coinAmount;
      }
      if (transaction.senderPublicKey === this.publicKey) {
        balance -= transaction.coinAmount;
      }
    });

    this.balance = balance;
    return this.balance;
  }
}

export default Wallet;
