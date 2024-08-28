class WalletGetAllWalletsView {
  constructor() {
    this.walletsContainer = document.getElementById("wallets-container");
    this.renderWalletlBtn = document.getElementById("render-wallet-btn");
    this.setUpEventLister();
  }

  setUpEventLister() {
    this.renderWalletlBtn.addEventListener("click", () => {
      console.log("Wallet btc Clicked");
      if (this.renderWalletCallback) {
        this.renderWalletCallback();
      }
    });
  }

  onRenderWallets(callback) {
    this.renderWalletCallback = callback;
  }

  render(allWalletsData) {
    this.walletsContainer.innerHTML = "";

    if (!Array.isArray(allWalletsData)) {
      allWalletsData = [allWalletsData];
    }

    allWalletsData.forEach((data, index) => {
      console.log("Rendering wallet at index:", index, data);
      let walletDiv = document.createElement("div");
      walletDiv.classList.add("wallet-block");

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

export default WalletGetAllWalletsView;
