import Wallet from "./wallet.mjs";

class WalletGetAllWalletsController {
  constructor(wallet, walletView) {
    this.wallet = wallet;
    this.walletView = walletView;
    this.walletView.onRenderWallets(() => this.getAllWallets());
  }

  getAllWallets() {
    const allWalletsData = Wallet.getAllWallets();
    //console.log(allWalletsData);
    this.walletView.render(allWalletsData);
  }

}

export default WalletGetAllWalletsController;
