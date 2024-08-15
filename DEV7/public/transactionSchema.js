import mongoose from 'mongoose';

const { Schema } = mongoose;

//definiendo las "columnas y tipos de datos para esta tabla nombrada como 'transactions'
const transactionSchema = new Schema({
  transactionId: String,
  coinAmount: Number,
  senderPublicKey: String,
  recipientPublicKey: String,
  isConfirmed: Boolean,
  timestamp: { type: Date, default: Date.now }
});

const TransactionSchema = mongoose.model('Transaction', transactionSchema, 'transactions');

export default TransactionSchema;


