class BlockchainController {
  constructor(blockchain, blockchainView) {
    this.blockchain = blockchain;
    this.blockchainView = blockchainView;
    this.blockchainView.onRenderBlockchain(() => this.renderBlockchain());
  }

  renderBlockchain() {
    const blockchainData = this.blockchain.getBlockchain();
    console.log("Blockchain data:", blockchainData);
    this.blockchainView.render(blockchainData);
  }
}

export default BlockchainController;
