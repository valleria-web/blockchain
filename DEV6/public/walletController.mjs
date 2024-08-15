class WalletController {
  constructor(wallet, walletView) {
    this.wallet = wallet;
    this.walletView = walletView;
    this.walletView.onRenderWallet(() => this.renderWallet());
  }

  renderWallet() {
    const walletData = [this.wallet.getWallet()];
    console.log("Wallet Data:", walletData);
    this.walletView.render(walletData);
  }
}

export default WalletController;
