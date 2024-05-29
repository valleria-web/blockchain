class Mempool {
  constructor() {
    if (Mempool.instance) {
      return Mempool.instance;
    }
    this.pendingTransactions = [];
    Mempool.instance = this;
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  removeConfirmedTransactions() {
    this.pendingTransactions = this.pendingTransactions.filter(
      (transaction) => !transaction.isConfirmed
    );
  }

  getPendingTransactions() {
    return this.pendingTransactions;
  }
}

export default Mempool;


