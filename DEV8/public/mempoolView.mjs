class MempoolView {
  constructor() {
    this.mempoolContainer = document.getElementById("mempool-container");
    this.renderMempoolBtn = document.getElementById("render-mempool-btn");
    this.setupEventLister();
  }

  setupEventLister() {
    this.renderMempoolBtn.addEventListener("click", () => {
      console.log("Mempool Btn Clicked");
      this.renderMempool();
    });
  }

  onRenderMempool(callback) {
    this.renderMempool = callback;
  }

  render(mempoolData) {
    let mempoolHTML = "";

    mempoolData.forEach((transaction) => {
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
