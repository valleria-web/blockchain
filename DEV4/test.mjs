import Blockchain from "./blockchain.mjs";
import Miner from "./miner.mjs";

const blockchain = new Blockchain();
const miner1 = new Miner(blockchain, "Miner1");

miner1.mineBlock();

console.log(blockchain);
console.log(miner1)














/*import Wallet from "./wallet.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Blockchain from "./blockchain.mjs";

const mempool = new Mempool();
const blockchain = new Blockchain(mempool);
const miner1 = new Miner(mempool, blockchain, "Miner1");

const wallet1 = new Wallet(mempool, blockchain);

console.log(wallet1.publicKey);
console.log(miner1.getMinerWallet().getBalance());
console.log(mempool);
console.log(miner1.getMinerWallet());
miner1.mineBlock();
console.log(blockchain.getAllTransactions());

miner1.minerWallet.initiateTransaction(10, wallet1.publicKey);

setTimeout(() => {
  console.log(miner1.minerWallet.updateBalance());
}, 6000);

setTimeout(() => {
    wallet1.updateBalance();
  }, 6000);


  setTimeout(() => {
    console.log(wallet1);
  }, 6000);

  setTimeout(() => {
    console.log(miner1.minerWallet.updateBalance());
  }, 6000);


/*balance del minero por coinbase funciona, 
balance desde initrasaction no funciona*/
