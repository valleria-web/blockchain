import Blockchain from "./blockchain.mjs";
import Miner from "./miner.mjs";

class App {
  constructor() {
    this.blockchain = new Blockchain();
    this.miner1 = new Miner(this.blockchain, "Miner1");
    this.intervalId = null;
  }

  startMining() {
    this.mineBlockAtInterval();

    this.intervalId = setInterval(() => {
      this.mineBlockAtInterval();
    }, 60 * 1000);
  }

  mineBlockAtInterval() {
    const minedBlock = this.miner1.mineBlock();
    console.log(`Block mined: ${JSON.stringify(minedBlock)}`);
  }

  stopMining() {
    clearInterval(this.intervalId);
    console.log("Mining stopped.");
  }
}

export default App;
