import Wallet from "./wallet.mjs";

const wallet1 = new Wallet();
const wallet2 = new Wallet();

console.log(wallet1.getBalance());
console.log(wallet2.getBalance());

wallet1.initiateTransaction(10, wallet2);

console.log(wallet1.getBalance()); 
console.log(wallet2.getBalance());

//ENVIAR LA TRANSACCION A LA MEMPOOL 
// QUE LOS BALANCES DE AMBAS BILLETAS TENGAN UN STATUS PENDIENTE, MIENTRAS LA TRANSACCION ESTA EN LA MEMPOOL, QUE EL BALANCE DE LAS BILLETERAS SE ACTUALICEN CUANDO LA TRANSACCION SEA MINADA