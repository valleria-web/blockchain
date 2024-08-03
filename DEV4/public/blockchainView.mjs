class BlockchainView {
  constructor() {
    this.blockchainContainer = document.getElementById("blockchain-container");
    this.renderBlockchainBtn = document.getElementById("render-blockchain-btn");
    this.setupEventListener();
  }

  setupEventListener() {
    this.renderBlockchainBtn.addEventListener("click", () => {
      console.log("Click");
      this.renderBlockchain();
    });
  }

  onRenderBlockchain(callback) {
    this.renderBlockchain = callback;
  }

  render(chain) {
    if (!Array.isArray(chain)) {
      console.error("Invalid blockchain data:", chain);
      return;
    }

    let blockchainHTML = "";

    chain.forEach((block) => {
      blockchainHTML += `
    <ul class="block">
    <h3>Block:</h3>
    <li>Index: ${block.index}</li>
    <li>Timestamp: ${block.timestamp}</li>
    <li>Nonce: ${block.nonce}</li>
    <li>Hash: ${block.hash}</li>
    <li>Previous Block Hash: ${block.previousBlockHash}</li>
    <li>Transactions: ${block.transactions
      .map(
        (transaction) =>
          `<ul class="block">
        <li>Transaction ID: ${transaction.transactionId}</li>
        <li>Amount: ${transaction.coinAmount}</li>
        <li>Sender: ${transaction.senderPublicKey}</li>
        <li>Recipient: ${transaction.recipientPublicKey}</li>
        <li>isConfirmed: ${transaction.isConfirmed}</li>
        </ul>`
      )
      .join("")}</li>
    </ul>`;
    });

    this.blockchainContainer.innerHTML = blockchainHTML;
  }
}
export default BlockchainView;
