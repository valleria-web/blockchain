class BlockchainController {
  constructor(blockchain, blockchainView) {
    this.blockchain = blockchain;
    this.blockchainView = blockchainView;
    this.blockchainView.onRenderBlockchain(() => this.renderBlockchain());
  }

  renderBlockchain() {
    const blockchain = this.blockchain.getBlockchain();
    console.log("Blockchain data:", blockchain);
    this.blockchainView.render(blockchain);
  }
}

export default BlockchainController;
