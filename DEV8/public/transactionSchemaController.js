import TransactionModel from "./transactionSchema";

class TransactionSchemaController {
  constructor(transactionModel) {
    this.transactionModel = transactionModel;
  }

  async createTransaction(transactionData) {
    try {
      const transaction = await this.transactionModel.createTransaction(transactionData);
      console.log('Transaction created:', transaction);
      return transaction;
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw error;
    }
  }

  async getAllTransactions() {
    try {
      const transactions = await this.transactionModel.getAllTransactions();
      console.log('All transactions:', transactions);
      return transactions;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  }
}

export default TransactionSchemaController;

