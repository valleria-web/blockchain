import Wallet from "./wallet.mjs";
import Mempool from "./mempool.mjs";
import Miner from "./miner.mjs";
import Blockchain from "./blockchain.mjs";

const mempool = new Mempool();

const wallet1 = new Wallet(mempool);
const wallet2 = new Wallet(mempool);

console.log(wallet1.getBalance());
console.log(wallet2.getBalance());

wallet1.initiateTransaction(10, wallet2);

console.log(wallet1.getBalance()); 
console.log(wallet2.getBalance());


console.log(mempool);


/*ENVIAR LA TRANSACCION A LA MEMPOOL 
QUE LOS BALANCES DE AMBAS BILLETAS TENGAN UN STATUS PENDIENTE MIENTRAS LA TRANSACCION ESTA EN LA MEMPOOL, QUE EL BALANCE DE LAS BILLETERAS SE ACTUALICEN CUANDO LA TRANSACCION SEA MINADA*/