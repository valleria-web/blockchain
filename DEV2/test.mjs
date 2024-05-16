import Blockchain from "./blockchain.mjs";
import Node from "./node.mjs";
import Transaction from "./transaction.mjs";
import Miner from "./miner.mjs";

const bitcoin = new Blockchain();
const miner = new Miner(bitcoin)

const previousBlockHash = "aguigf";
const currentBlockData = [
  {
    amount: 1,
    sender: "SADA",
    recipient: "hsodf",
  },
];
const nonce = 123;

console.log(bitcoin);
console.log(bitcoin.getLastBlock());

