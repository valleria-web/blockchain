class WalletSendCoinsController {
  constructor(wallet, walletSendCoinsView) {
    this.wallet = wallet;
    this.walletSendCoinsView = walletSendCoinsView;
    this.walletSendCoinsView.onRenderSendCoins(() => this.renderSendCoins());
  }

  renderSendCoins() {
    console.log("Send Coins btn Clicked");
  }
}

export default WalletSendCoinsController;
