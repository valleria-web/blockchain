import Blockchain from "./blockchain.mjs";
import Mempool from "./mempool.mjs";
import Wallet from "./wallet.mjs";
import Miner from "./miner.mjs";

import BlockchainView from "./blockchainView.mjs";
import MempoolView from "./mempoolView.mjs";
import WalletView from "./walletView.mjs";
import MinerView from "./minerView.mjs";
import CoinView from "./coinView.mjs";

import BlockchainController from "./blockchainController.mjs";
import MinerController from "./minerController.mjs";
import CoinController from "./coinController.mjs";
import MempoolController from "./mempoolController.mjs";
import WalletController from "./walletController.mjs";

class App {
  constructor() {}

  start() {
    const blockchain = new Blockchain();
    const blockchainView = new BlockchainView();
    const blockchainController = new BlockchainController(
      blockchain,
      blockchainView
    );

    const mempool = new Mempool();
    const mempoolView = new MempoolView();
    const mempoolController = new MempoolController(mempool, mempoolView);

    const wallet = new Wallet("minerWaller", mempool, blockchain);
    const walletView = new WalletView();
    const walletController = new WalletController(wallet, walletView);

    const miner = new Miner("Miner1", blockchain, mempool, wallet, CryptoJS);
    const minerView = new MinerView();
    const minerController = new MinerController(miner, minerView);

    const coinView = new CoinView();
    const coinController = new CoinController(blockchain, coinView);
  }
}

const app = new App();
app.start();

export default App;
