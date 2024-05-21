class WalletManager {
  constructor() {
    if (WalletManager.instance) {
      return WalletManager.instance;
    }
    this.wallets = [];
    this.listOfPublicKeys = [];
  }

  addAddresses(wallets) {
    wallets.forEach((wallet) => {
      this.wallets.push(wallet); 
      this.listOfPublicKeys.push(wallet.publicKey);
    });
  }

  getAllAddresses(){
    return this.listOfPublicKeys;
  }

  getPublicKeyAtIndex(index) {
    return this.listOfPublicKeys[index];
  }

  getWalletByPublicKey(publicKey) {
    return this.wallets.find(wallet => wallet.publicKey === publicKey);
  }
}

export default WalletManager;
