
// SendForm console.log funciona, pero no cambia balance en las wallets

import Blockchain from "./blockchain.mjs";
import Mempool from "./mempool.mjs";
import Wallet from "./wallet.mjs";
import Miner from "./miner.mjs";
import Transaction from "./transaction.mjs";

import BlockchainView from "./blockchainView.mjs";
import MempoolView from "./mempoolView.mjs";
import WalletView from "./walletView.mjs";
import MinerView from "./minerView.mjs";
import CoinView from "./coinView.mjs";
import TransactionView from "./transactionView.mjs";
import WalletSendCoinsView from "./walletSendCoinsView.mjs";

import BlockchainController from "./blockchainController.mjs";
import MinerController from "./minerController.mjs";
import CoinController from "./coinController.mjs";
import MempoolController from "./mempoolController.mjs";
import WalletController from "./walletController.mjs";
import WalletSendCoinsController from "./walletSendCoinsController.js";

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

    

    const walletMiner = new Wallet("minerWaller", mempool, blockchain);
    const walletView = new WalletView();
    const walletController = new WalletController(walletMiner, walletView);

    const walletViewGenesis = new WalletView();
    const walletControllerGenesis = new WalletController(
      blockchain.genesisWallet,
      walletViewGenesis
    );

    const wallet2 = new Wallet("wallet2", mempool, blockchain);
    const wallet2View = new WalletView();
    const wallet2Controller = new WalletController(wallet2, wallet2View)

    const miner = new Miner(
      "Miner1",
      blockchain,
      mempool,
      walletMiner,
      CryptoJS
    );
    const minerView = new MinerView();
    const minerController = new MinerController(miner, minerView);

    const coinView = new CoinView();
    const coinController = new CoinController(blockchain, coinView);

    const walletSendCoinsView = new WalletSendCoinsView();
    const walletSendCoinsController = new WalletSendCoinsController(
      walletMiner, walletSendCoinsView
    );

    const testTransaction = new Transaction(
      1,
      blockchain.genesisWallet.publicKey,
      walletMiner.publicKey
    );
    mempool.addTransaction(testTransaction);
  }
}

const app = new App();
app.start();

export default App;
