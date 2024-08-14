class WalletView {
  constructor() {
    this.walletContainer = document.getElementById("wallet-container");
    this.renderWalletlBtn = document.getElementById("render-wallet-btn");
    this.setUpEventLister();
  }

  setUpEventLister() {
    this.renderWalletlBtn.addEventListener("click", () => {
      console.log("Wallet btc Clicked");
      this.renderWallet();
    });
  }

  onRenderWallet(callback) {
    this.renderWallet = callback;
  }

  render(walletData) {
    let walletHTML = `
            <ul class="block">
                <h3>Wallet</h3>
                <li>Name: ${walletData.name}</li>
                <li>PublicKey: ${walletData.publicKey}</li>
                <li>Balance: ${walletData.balance}</li>
            </ul>
      `;

    this.walletContainer.innerHTML = walletHTML;
  }
}

export default WalletView;
