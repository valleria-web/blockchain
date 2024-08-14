class WalletSendCoinsView {
  constructor() {
    this.walletSendCoinsContainer = document.getElementById(
      "send-coins-container"
    );
    this.walletSendCoinsBtn = document.getElementById("send-coins-btn");
    this.setUpEventListenerSendCoins();
  }

  setUpEventListenerSendCoins() {
    this.walletSendCoinsBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this.renderSendCoins();
    });
  }
  onRenderSendCoins(callback) {
    this.renderSendCoins = callback;
  }
}

export default WalletSendCoinsView;
