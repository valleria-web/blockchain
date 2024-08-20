import mongoose from 'mongoose';
import TransactionModel from './transactionSchema';
import TransactionSchemaController from './transactionSchemaController';

const uri = 'your_mongodb_connection_string'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Conectado a MongoDB');
    const transactionModel = new TransactionModel();
    const transactionController = new TransactionSchemaController(transactionModel);

    try {
      const createdTransaction = await transactionController.createTransaction({
        transactionId: '12345',
        coinAmount: 50,
        senderPublicKey: 'abc123',
        recipientPublicKey: 'def456',
        isConfirmed: false
      });
      console.log('Transaction created:', createdTransaction);

      const allTransactions = await transactionController.getAllTransactions();
      console.log('All transactions:', allTransactions);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));
