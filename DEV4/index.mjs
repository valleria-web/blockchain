import Mempool from "./mempool.mjs";
import MempoolView from "./mempoolView.mjs";
import Blockchain from "./blockchain.mjs";
import BlockchainView from "./blockchainView.mjs";
import Miner from "./miner.mjs";
import Wallet from "./wallet.mjs";
import WalletView from "./walletView.mjs";
import CoinView from "./coinView.mjs";
import Transaction from "./transaction.mjs";

const blockchain = new Blockchain();
const mempool = new Mempool();
const wallet = new Wallet(mempool, blockchain);
const wallet1 = new Wallet(mempool, blockchain);

const blockchainView = new BlockchainView(blockchain);
const coinView = new CoinView(blockchain);
const mempoolView = new MempoolView(mempool);

const walletView = new WalletView(wallet);
const walletView1 = new WalletView(wallet1);

wallet.sendFounds(10, wallet1.publicKey)

mempoolView.renderMempool();

const miner = new Miner("Miner1", blockchain, mempool, wallet);
miner.mineBlock();
miner.mineBlock();

coinView.renderCoin();
blockchainView.renderBlockchain();
mempoolView.renderMempool();
walletView.renderWallet();

setTimeout(()=> walletView1.renderWallet(), 60 * 1000);

console.log(mempool);

// To do  Wallet: Create metods Receive Founds
