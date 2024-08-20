
// Al hacer sendCoin, se envia la coin y el receptor la anade al final de su array de balance, debe sumarlo y no anadirlo {name: 'GenesisWallet', publicKey: 'dfg9IHniR8Ycmc4c', balance: '01'} envio de una moneda fue interretado como 0+1 u resultadio 01

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
import WalletGetAllWalletsController from "./WalletGetAllWalletsController.mjs";
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

    

    const walletMiner = new Wallet("myWallet", mempool, blockchain);
    const walletView = new WalletView();
    const walletController = new WalletGetAllWalletsController(walletMiner, walletView);

    const walletViewGenesis = new WalletView();
    const walletControllerGenesis = new WalletGetAllWalletsController(
      blockchain.genesisWallet,
      walletViewGenesis
    );

    const wallet2 = new Wallet("wallet2", mempool, blockchain);
    const wallet2View = new WalletView();
    const wallet2Controller = new WalletGetAllWalletsController(wallet2, wallet2View)

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
