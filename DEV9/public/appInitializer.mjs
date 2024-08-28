//appInitializer
import Blockchain from './blockchain.mjs';
import CoinControllerDBgetCoin from './coinControllerDBgetCoin.mjs';
import CoinViewDBrenderCoin from './coinViewDBrenderCoin.mjs';
import CoinControllerDBSaveCoin from './coinControllerDBSaveCoin.mjs';

async function initialize() {
  const blockchain = new Blockchain();

  new CoinControllerDBSaveCoin(blockchain);



  const coinViewDBrenderCoin = new CoinViewDBrenderCoin();

  const coinControllerDBgetCoin = new CoinControllerDBgetCoin(blockchain, coinViewDBrenderCoin);

  console.log("Application initialized and ready.");
}

initialize();

