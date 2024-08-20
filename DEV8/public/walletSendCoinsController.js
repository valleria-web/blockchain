class WalletSendCoinsController {
  constructor(wallet, walletSendCoinsView) {
    this.wallet = wallet;
    this.walletSendCoinsView = walletSendCoinsView;
    this.walletSendCoinsView.onRenderSendCoins((amount, recipientPublicKey) => this.sendCoins(amount, recipientPublicKey));
  }

  sendCoins(amount, recipientPublicKey) {
    this.wallet.sendCoins(amount, recipientPublicKey);
  }
}

export default WalletSendCoinsController;
