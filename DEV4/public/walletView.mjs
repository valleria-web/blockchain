import Observer from "./Observer.mjs";

class WalletView extends Observer {
    constructor() {
        super();
        this.walletContainer = document.getElementById("wallet-container");
    }

    update(event, data) {
        if (event === 'sendFounds') {
            this.renderWallet(data);
        }
    }

    renderWallet(walletData) {

        if (!walletData) {
            console.error('walletData está indefinido:', walletData);
            return;
        }

        
        const { name, publicKey, amount, recipientPublicKey} = walletData;

        const newWalletDiv = document.createElement("div");
        newWalletDiv.classList.add("wallet");

        newWalletDiv.innerHTML = `
            <ul class="block">
                <h3>Wallet</h3>
                <li>Name: ${name}</li>
                <li>PublicKey: ${publicKey}</li>
                <li>Amount: ${amount}</li>
                <li>Receiver: ${recipientPublicKey}</li>
            </ul>`;

        this.walletContainer.appendChild(newWalletDiv);
    }
}

export default WalletView;


