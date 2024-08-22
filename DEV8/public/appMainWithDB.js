import CoinControllerDBgetCoin from './coinControllerDBgetCoin.mjs';
import Blockchain from './blockchain.mjs'; 
import CoinViewDBrenderCoin from './coinViewDBrenderCoin.mjs';


const blockchain = new Blockchain();
const coinViewDBrenderCoin = new CoinViewDBrenderCoin()
const coinControllerDBgetCoin = new CoinControllerDBgetCoin(blockchain, coinViewDBrenderCoin);


console.log("Application initialized and ready.");
