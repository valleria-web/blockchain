import Blockchain from "./blockchain.mjs";
import Wallet from "./wallet.mjs";
import WalletManager from "./walletManager.mjs";

const bitcoin = new Blockchain();
const walletManager = new WalletManager();
const wallet1 = new Wallet();
const wallet2 = new Wallet();

walletManager.addAddresses([wallet1, wallet2]);

wallet1.initiateTransaction(50, wallet2.publicKey, walletManager);

console.log(walletManager.getAllAddresses());
console.log(`Wallet1 Balance: ${wallet1.getBalance()}`);
console.log(`Wallet2 Balance: ${wallet2.getBalance()}`);
