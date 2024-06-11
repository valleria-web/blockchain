import Blockchain from "./blockchain.mjs";
import Miner from "./miner.mjs";
import Wallet from "./wallet.mjs";
import Mempool from "./mempool.mjs";
import Transaction from "./transaction.mjs";

const blockchain = new Blockchain();
const mempool = new Mempool();
console.log("Genesis Wallet Public Key:", blockchain.genesisWallet.publicKey);
const wallet2 = new Wallet(mempool, blockchain)
blockchain.genesisWallet.initiateTransaction(1, wallet2.publicKey);

const miner = new Miner("Miner1", blockchain, mempool, wallet2);
miner.mineBlock();


wallet2.updateBalance()
console.log(wallet2.getBalance())