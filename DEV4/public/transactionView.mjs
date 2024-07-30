class TransactionView {
  constructor(transaction) {
    this.transaction = transaction;
    this.transactionContainer = document.getElementById(
      "transaction-container"
    );
  }

  renderTransaction() {
    const {
      transactionId,
      coinAmount,
      senderPublicKey,
      recipientPublicKey,
      isConfirmed,
    } = this.transaction;

    const newDiv = document.createElement("div");
    newDiv.classList.add("transaction");

    newDiv.innerHTML = `
   <ul class="block">
    <h3>Transaction Details</h3>
    <li><strong>Transaction ID:${transactionId}</li>
    <li><strong>Coin Amount: ${coinAmount}</li>
    <li><strong>Sender Public Key: ${senderPublicKey}</li>
    <li><strong>Recipient Public Key: ${recipientPublicKey}</li>
    <li><strong>Confirmed: ${isConfirmed ? "Yes" : "No"}</li>
   </ul>`;

    this.transactionContainer.appendChild(newDiv);
  }
}

export default TransactionView;
