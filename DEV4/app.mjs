class App {
  constructor(blockchain, mempool, wallet, miner) {
    this.blockchain = blockchain;
    this.mempool = mempool;
    this.wallet = wallet;
    this.miner = miner;
    this.intervalId = null;
  }

  startMining() {
    this.mineBlockAtInterval();

    this.intervalId = setInterval(() => {
      this.mineBlockAtInterval();
      console.log(
        "Wallet2 Balance luego de minar bloque:",
        this.wallet.getBalance()
      );
    }, 60 * 1000);
  }

  mineBlockAtInterval() {
    const minedBlock = this.miner.mineBlock();
    console.log(`Block mined: ${JSON.stringify(minedBlock)}`);
  }

  stopMining() {
    clearInterval(this.intervalId);
    console.log("Mining stopped.");
  }
}

export default App;
