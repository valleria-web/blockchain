class WalletSendCoinsView {
  constructor() {
    this.walletSendCoinsContainer = document.getElementById("send-coins-container");
    this.walletSendCoinsBtn = document.getElementById("send-coins-btn");
    this.setUpEventListenerSendCoins();
  }

  setUpEventListenerSendCoins() {
    this.walletSendCoinsBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const amount = document.getElementById("amount").value;
      const recipientPublicKey = document.getElementById("recipient").value;

      console.log("Amount:", amount);
      console.log("Recipient Public Key:", recipientPublicKey);

      if (this.renderSendCoins) {
        this.renderSendCoins(amount, recipientPublicKey);
      }
    });
  }

  onRenderSendCoins(callback) {
    this.renderSendCoins = callback;
  }
}

export default WalletSendCoinsView;
