class WalletView {
  constructor(wallet) {
    this.wallet = wallet;
    this.walletContainer = document.getElementById("wallet-container");
  }

  renderWallet() {
    const walletData = this.wallet.getWallet();

    const { name, publicKey, balance } = walletData;

    const newWalletDiv = document.createElement("div");
    newWalletDiv.classList.add("wallet");

    newWalletDiv.innerHTML = `
            <ul class="block">
                <h3>Wallet</h3>
                <li>Name: ${name}</li>
                <li>PublicKey: ${publicKey}</li>
                <li>Balance: ${balance}</li>
            </ul>`;

    this.walletContainer.appendChild(newWalletDiv);
  }
}

export default WalletView;
