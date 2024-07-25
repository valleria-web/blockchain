import Observer from "./Observer.mjs";

class WalletView extends Observer {
    constructor() {
        super();
        this.walletContainer = document.getElementById("wallet-container");
    }

    update(event, data) {
        if (event === 'newWalletCreated') {
            this.renderWallet(data);
        }
    }

    renderWallet(walletData) {
        const { name, publicKey, balance } = walletData;

        const newWalletDiv = document.createElement("div");
        newWalletDiv.classList.add("wallet");

        newWalletDiv.innerHTML = `
            <ul class="block">
                <h3>Wallet</h3>
                <li>Name: ${name}</li>
                <li>PublicKey: ${publicKey}</li>
                <p>Balance: ${balance}</p>
            </ul>`;

        this.walletContainer.appendChild(newWalletDiv);
    }
}

export default WalletView;


