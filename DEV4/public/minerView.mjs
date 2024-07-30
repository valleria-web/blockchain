class MinerView {
  constructor(minerInstance) {
    this.miner = minerInstance;
    this.initUI();
  }

  initUI() {
    const button = document.createElement("button");
    button.innerText = "Mine Block";
    button.id = "mine-block-btn";
    button.addEventListener("click", () => this.mineBlockBtn());
    document.getElementById("mine-block-btn-container").appendChild(button);
    this.updateUI();
  }

  mineBlockBtn() {
    this.miner.mineBlock();
    this.updateUI();
    //console.log(blockchain.coin);
  }

  updateUI() {
    const blockchainData = this.miner.blockchain.chain.map(block => ({
      index: block.index,
      timestamp: block.timestamp,
      nonce: block.nonce,
      hash: block.hash,
      previousBlockHash: block.previousBlockHash,
      transactions: block.transactions
    }));

    const mempoolData = this.miner.mempool.getPendingTransactions();
    const walletData = {
      balance: this.miner.wallet.getBalance(),
      publicKey: this.miner.wallet.publicKey
    };

    document.getElementById("blockchain-container").innerHTML = `<pre>${JSON.stringify(blockchainData, null, 2)}</pre>`;
    //document.getElementById("mempool-container").innerHTML = `<pre>${JSON.stringify(mempoolData, null, 2)}</pre>`;
    //document.getElementById("wallet-container").innerHTML = `<pre>${JSON.stringify(walletData, null, 2)}</pre>`;
  }
}

export default MinerView;

