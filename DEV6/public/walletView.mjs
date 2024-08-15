class WalletView {
  constructor() {
    this.walletsContainer = document.getElementById("wallets-container");
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
    walletData.forEach((data) => {
      let walletDiv = document.createElement('div');
      walletDiv.classList.add('wallet-block');

      let walletHTML = `
        <ul class="block">
          <h3>Wallet</h3>
          <li>Name: ${data.name}</li>
          <li>PublicKey: ${data.publicKey}</li>
          <li>Balance: ${data.balance}</li>
        </ul>
      `;

      walletDiv.innerHTML = walletHTML;
      this.walletsContainer.appendChild(walletDiv); 
    });
  }
}


export default WalletView;
