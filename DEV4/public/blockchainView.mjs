class BlockchainView {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.blockchainContainer = document.getElementById("blockchain-container");
  }

  renderBlockchain() {
    const chain = this.blockchain.getBlockchain();
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
