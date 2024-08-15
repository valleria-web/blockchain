import Wallet from "./wallet.mjs";

class WalletController {
  constructor(wallet, walletView) {
    this.wallet = wallet;
    this.walletView = walletView;
    this.walletView.onRenderWallet(() => this.renderWallet());
  }

  renderWallet() {
    const allWalletsData = Wallet.getAllWallets();
    console.log(allWalletsData);
    this.walletView.render(allWalletsData);
  }
}

export default WalletController;
