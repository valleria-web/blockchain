import Blockchain from "./blockchain.mjs";
import Wallet from "./wallet.mjs";
import Node from "./node.mjs";

const bitcoin = new Blockchain();
const node1 = new Node(bitcoin);

const wallet1 = new Wallet(node1);
const wallet2 = new Wallet(node1);
node1.addWallet(wallet1);
node1.addWallet(wallet2);

node1.getWallets();

wallet1.createAndBroadcastTransaction(10, wallet1);
wallet1.createAndBroadcastTransaction(55, wallet1);

//console.log(wallet1.getBalance());
//console.log(wallet2.getBalance());
