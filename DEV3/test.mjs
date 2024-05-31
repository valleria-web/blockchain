import Wallet from "./wallet.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Blockchain from "./blockchain.mjs";

const mempool = new Mempool();
const blockchain = new Blockchain(mempool);
const miner1 = new Miner(mempool, blockchain, "Miner1");

console.log(miner1.getMinerWallet().getBalance());
console.log(mempool);
console.log(miner1.getMinerWallet());
miner1.mineBlock();
console.log(blockchain.getAllTransactions());

setTimeout(() => {
  console.log(miner1.minerWallet.updateBalance());
}, 6000);

/*ENVIAR LA TRANSACCION A LA MEMPOOL 
QUE LOS BALANCES DE AMBAS BILLETAS TENGAN UN STATUS PENDIENTE MIENTRAS LA TRANSACCION ESTA EN LA MEMPOOL, QUE EL BALANCE DE LAS BILLETERAS SE ACTUALICEN CUANDO LA TRANSACCION SEA MINADA*/
