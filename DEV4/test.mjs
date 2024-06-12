import Blockchain from "./blockchain.mjs";
import Miner from "./miner.mjs";
import Wallet from "./wallet.mjs";
import Mempool from "./mempool.mjs";
import Transaction from "./transaction.mjs";

const blockchain = new Blockchain();
const mempool = new Mempool();
console.log("Genesis Wallet Public Key:", blockchain.genesisWallet.publicKey);
const wallet2 = new Wallet(mempool, blockchain)
console.log("wallet2 Public Key:", wallet2.publicKey);
blockchain.genesisWallet.initiateTransaction(1, wallet2.publicKey);

const miner = new Miner("Miner1", blockchain, mempool, wallet2);
miner.mineBlock();
miner.mineBlock();
setTimeout(() => console.log("Wallet2 Balance luego de minar bloque2:", wallet2.getBalance()), 9000);
console.log(blockchain.viewTransactions())
console.log("Genesis Wallet Balance:", blockchain.genesisWallet.getBalance());
console.log(blockchain.coin.getCoin());