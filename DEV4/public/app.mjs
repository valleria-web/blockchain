import Blockchain from "./blockchain.mjs";
import BlockchainView from "./blockchainView.mjs";
import CoinView from "./coinView.mjs";
import Mempool from "./mempool.mjs";
import Wallet from "./wallet.mjs";
import MempoolView from "./mempoolView.mjs";
import Miner from "./miner.mjs";
import WalletView from "./walletView.mjs";
import EventManager from "./EventManager.mjs";

class App {
  constructor() {}

  start() {
    const blockchain = new Blockchain();
    const eventManager = new EventManager();
    const coinView = new CoinView(blockchain);
    coinView.renderCoin();

    eventManager.register(coinView);
  }
}

const app = new App();
app.start();

export default App;
