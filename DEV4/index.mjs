import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256';


import Blockchain from "./blockchain.mjs";
import BlockchainView from "./blockchainView.mjs";
import CoinView from "./coinView.mjs";
import Mempool from "./mempool.mjs";
import Wallet from './wallet.mjs';
import MempoolView from "./mempoolView.mjs";
import Miner from "./miner.mjs"
import WalletView from './walletView.mjs';
import EventManager from './EventManager.mjs';


const blockchain = new Blockchain();
const mempool = new Mempool();

const minerWallet = new Wallet("MinerWallet", mempool, blockchain);

const miner = new Miner("miner1", blockchain, mempool, blockchain.genesisWallet);

const eventManager = new EventManager();


const coinView = new CoinView(blockchain);
const mempoolView = new MempoolView(mempool);
const blockchainView = new BlockchainView(blockchain);
const walletView = new WalletView();
const minerWalletView = new WalletView(minerWallet);  
//blockchain.genesisWallet.sendFounds(1, minerWallet.publicKey);
//blockchain.genesisWallet.sendFounds(10, minerWallet.publicKey);

eventManager.register(walletView);

const newWalletData = minerWallet.getWallet();
const genesisWalletData = blockchain.genesisWallet.getWallet();

eventManager.notify("newWalletCreated", genesisWalletData);
eventManager.notify("newWalletCreated", newWalletData);


mempoolView.renderMempool();
setTimeout(() => miner.mineBlock(), 1 * 6000);
setTimeout(() => blockchainView.renderBlockchain(), 2 * 6000);
setTimeout(()=> minerWalletView.renderWallet(), 3* 6000);
setTimeout(()=>coinView.renderCoin(), 4* 6000);
setTimeout(()=> mempoolView.renderMempool(), 5 * 6000);
//setTimeout(()=> walletView.renderWallet(), 6* 6000);

console.log(eventManager);

