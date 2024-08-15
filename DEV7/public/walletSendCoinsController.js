class WalletSendCoinsController {
  constructor(wallet, walletSendCoinsView) {
    this.wallet = wallet;
    this.walletSendCoinsView = walletSendCoinsView;
    this.walletSendCoinsView.onRenderSendCoins((amount, recipientPublicKey) => this.renderSendCoins(amount, recipientPublicKey));
  }

  renderSendCoins(amount, recipientPublicKey) {
    this.wallet.sendCoins(amount, recipientPublicKey);
    console.log("Send Coins btn Clicked");
    console.log("Amount:", amount);
    console.log("Recipient Public Key:", recipientPublicKey);
  }
}

export default WalletSendCoinsController;
