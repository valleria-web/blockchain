class WalletController {
  constructor(wallet, walletView) {
    this.wallet = wallet;
    this.walletView = walletView;
    this.walletView.onRenderWallet(() => this.renderWallet());
    this.walletView.onRenderSendCoins(() => this.renderWallet());
  }

  renderWallet() {addEventListener.apply
    const walletData = this.wallet.getWallet();
    console.log("Wallet Data:", walletData);
    this.walletView.render(walletData);
  }

  renderSendCoins(){
    console.log("Send Data Wallet")
  }
}

export default WalletController;
