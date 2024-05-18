import Blockchain from "./blockchain.mjs";
import Wallet from "./wallet.mjs";
import Node from "./node.mjs";

const bitcoin = new Blockchain();
const node1 = new Node(bitcoin);

const wallet1 = new Wallet(node1);

const wallet = bitcoin.node.wallet;
wallet.createAndBroadcastTransaction(10, wallet1);

console.log(wallet1.getBalance());

