import mongoose from 'mongoose';

const { Schema } = mongoose;

class TransactionModel {
  constructor() {
    this.transactionSchema = new Schema({
      transactionId: String,
      coinAmount: Number,
      senderPublicKey: String,
      recipientPublicKey: String,
      isConfirmed: Boolean,
      timestamp: { type: Date, default: Date.now }
    });

    this.model = mongoose.model('Transaction', this.transactionSchema, 'transactions2v');
  }

  async createTransaction(data) {
    try {
      const transaction = new this.model(data);
      await transaction.save();
      return transaction;
    } catch (error) {
      throw new Error(`Error creating transaction: ${error.message}`);
    }
  }

  async getAllTransactions() {
    try {
      const transactions = await this.model.find();
      return transactions;
    } catch (error) {
      throw new Error(`Error fetching transactions: ${error.message}`);
    }
  }

  async getTransactionById(transactionId) {
    try {
      const transaction = await this.model.findOne({ transactionId });
      return transaction;
    } catch (error) {
      throw new Error(`Error fetching transaction by ID: ${error.message}`);
    }
  }


  async deleteTransaction(transactionId) {
    try {
      const result = await this.model.deleteOne({ transactionId });
      return result;
    } catch (error) {
      throw new Error(`Error deleting transaction: ${error.message}`);
    }
  }
}

export default TransactionModel;



/*Interfaz que crea la estructura de la tabla. Tambien me da acceso CRUD a esta tabla*/

/* Define el esquema de la colección 'transactions', incluyendo la estructura de los documentos. 
El modelo creado a partir del esquema proporciona acceso CRUD a esta colección. */