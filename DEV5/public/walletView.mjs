class WalletView {
  constructor() {
    this.walletContainer = document.getElementById("wallet-container");
    this.renderWalletlBtn = document.getElementById("render-wallet-btn");
    this.setUpEventLister();
    this.sendCoinsBtn = document.getElementById("send-coins-btn");
    this.setUpEventListerSendCoins(); 
  }

  setUpEventListerSendCoins(){
    this.sendCoinsBtn.addEventListener("click", ()=> {
      console.log("Send Coins clicked");
      this.renderSendCoins()
    }) 
  }

  setUpEventLister() {
    this.renderWalletlBtn.addEventListener("click", () => {
      console.log("Wallet btc Clicked");
      this.renderWallet();
    });
  }

  onRenderSendCoins(callback){
    this.renderSendCoins = callback;
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
