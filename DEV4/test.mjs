import Blockchain from "./blockchain.mjs";
import Miner from "./miner.mjs";
import Coin from "./coin.mjs";


const blockchain = new Blockchain();
const coin = new Coin("Bitcoin", "BTC", 100)
const miner1 = new Miner(blockchain, coin);


console.log(blockchain);
console.log(blockchain.viewTransactions());

//miner1.mineBlock();
console.log(blockchain);
console.log(blockchain.viewTransactions());