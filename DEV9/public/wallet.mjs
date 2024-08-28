import Transaction from './transaction.mjs';


class Wallet {
  static allWallets = []; 

  constructor(name = "", mempool, blockchain, publicKey = null, balance = 0) {
    this.name = name;
    this.mempool = mempool;
    this.blockchain = blockchain;
    this.publicKey = publicKey || this.generateRandomPublicKey();
    this.balance = Number(balance);
    this.updateBalance();

    Wallet.allWallets.push(this); 
  }

  generateRandomPublicKey(length = 16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  getWallet() {
    this.updateBalance();
    return {
      name : this.name,
      publicKey : this.publicKey,
      balance : this.balance,
    };
  }

  static getAllWallets() {
    return Wallet.allWallets.map(wallet => wallet.getWallet());
  }

  getBalance() {
    this.updateBalance(); 
    return this.balance; 
  }

  sendCoins(amount, recipientPublicKey) {
    this.updateBalance();
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

  updateBalance() {
    let balance = 0;
    if (
      this.blockchain &&
      typeof this.blockchain.getBlockchain === "function"
    ) {
      const allTransactions = this.blockchain
        .getBlockchain()
        .flatMap((block) => block.transactions);

      allTransactions.forEach((transaction) => {
        if (transaction.recipientPublicKey === this.publicKey) {
          balance += Number(transaction.coinAmount);
        }
        if (transaction.senderPublicKey === this.publicKey) {
          balance -= Number(transaction.coinAmount);
        }
      });
    }

    this.balance = balance;
  }
}

export default Wallet;
