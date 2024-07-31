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
    const mempool = new Mempool();
    const wallet1 = new Wallet("Wallet1", mempool, blockchain);
    const miner1 = new Miner("Miner1", blockchain, mempool, wallet1);

    const coinView = new CoinView(blockchain);
    const mempoolView = new MempoolView(mempool);
    const blockchainView = new BlockchainView(blockchain);

    const walletView = new WalletView(blockchain.genesisWallet);
    const walletView1 = new WalletView(wallet1);

    blockchain.genesisWallet.sendFounds(1, wallet1.publicKey);

    miner1.mineBlock();

    setTimeout(() => {
      miner1.mineBlock();

      setTimeout(() => {
        miner1.mineBlock();
        coinView.renderCoin();
        mempoolView.renderMempool();
        blockchainView.renderBlockchain();
        walletView.renderWallet();
        walletView1.renderWallet();
      }, 4 * 1000);
    }, 4 * 1000);
  }
}

const app = new App();
app.start();

export default App;
