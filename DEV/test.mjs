//[] {}

import Blockchain from './blockchain.mjs';

const blockchain = new Blockchain();

const previousBlockHash = "HISDVFAGHUIVIUBRLIUERBB";
const currentBlockData = [
    {
        amount: 10,
        sender: "Alexbc1",
        recipient: "Bobbc2"
    },
    {
        amount: 78,
        sender: "Carlbc3",
        recipient: "Davidbc4"
    }
];

console.log(blockchain.proofOfWork(previousBlockHash, currentBlockData));




