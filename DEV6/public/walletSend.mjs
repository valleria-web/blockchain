import Transaction from './transaction.mjs';
import TransactionView from './transactionView.mjs';

class TransactionController {
  constructor(wallet, transactionView) {
    this.wallet = wallet;
    this.transactionView = transactionView;
    this.formElement = document.getElementById('send-coins-form');
    this.sendCoinsButton = document.getElementById('send-coins-btn');

    this.init();
  }

  init() {
    this.formElement.addEventListener('submit', (event) => this.handleSubmit(event));
    this.sendCoinsButton.addEventListener('click', () => this.handleSendCoinsClick());
  }

/*  handleSubmit(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const receiver = document.getElementById('receiver').value;

    if (isNaN(amount) || amount <= 0 || !receiver) {
      console.log('Invalid input');
      return;
    }

    this.wallet.sendCoins(amount, receiver);

    const transaction = new Transaction(amount, this.wallet.publicKey, receiver);

    this.renderTransaction(transaction);

    this.formElement.reset();
  }*/

  handleSendCoinsClick() {
    console.log('Send Coins button clicked');
  }

  renderTransaction(transaction) {
    this.transactionView.renderTransaction(transaction);
  }
}

export default TransactionController;

