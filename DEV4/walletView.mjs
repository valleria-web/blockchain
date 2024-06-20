class WalletView {
  constructor(wallet) {
    this.wallet = wallet;
    this.walletContainer = document.getElementById("wallet-container");
  }

  renderWallet() {
    const walletData = this.wallet.getWallet();
    const { publicKey, balance } = walletData;

    const newWalletDiv = document.createElement("div");
    newWalletDiv.classList.add("wallet");

    newWalletDiv.innerHTML = `
    <ul class="block">
    <h3>Wallet</h3>
      <li>PublicKey: ${publicKey}</li>
      <p>Balance: ${balance}</p>
    </ul>`;

    this.walletContainer.appendChild(newWalletDiv);
  }
}

export default WalletView;
