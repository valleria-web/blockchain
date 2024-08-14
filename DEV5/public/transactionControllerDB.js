import TransactionModel from './transactionSchema.js';

class TransactionController {
  async createTransaction(id, amount, sender, recipient) {
    const transaction = new TransactionModel({
      transactionId: id, 
      coinAmount: amount,
      senderPublicKey: sender,
      recipientPublicKey: recipient,
      isConfirmed: false,
    });

    try {
      const savedTransaction = await transaction.save();
      return savedTransaction;
    } catch (error) {
      throw new Error(`Error al crear la transacción: ${error.message}`);
    }
  }
}

export default TransactionController;

const transactionController = new TransactionController();

(async () => {
  try {
    const newTransaction = await transactionController.createTransaction(100, 'Juana', 'Bob');
    console.log('Transacción creada:', newTransaction);
  } catch (error) {
    console.error(error.message);
  }
})();
