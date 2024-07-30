class MempoolView {
  constructor(mempool) {
    this.transactions = mempool.pendingTransactions;
    this.mempoolContainer = document.getElementById("mempool-container");
  }

  renderMempool() {
    let mempoolHTML = "<h3>Mempool Pending Transactions:</h3>";

    this.transactions.forEach((transaction) => {
      mempoolHTML += `
        <ul class="block">
          <li>Transaction Id: ${transaction.transactionId}</li>
          <li>Coin Amount: ${transaction.coinAmount}</li>
          <li>Sender: ${transaction.senderPublicKey}</li>
          <li>Recipient: ${transaction.recipientPublicKey}</li>
          <li>isConfirmed: ${transaction.isConfirmed}</li>
        </ul>
      `;
    });

    this.mempoolContainer.innerHTML = mempoolHTML;
  }
}

export default MempoolView;

