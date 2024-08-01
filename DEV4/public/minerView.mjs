class MinerView {
  constructor(minerInstance) {
    this.miner = minerInstance;
    this.initUI();
  }

  initUI() {
    const button = document.createElement("button");
    button.innerText = "Mine Block";
    button.id = "mine-block-btn";
    button.addEventListener("click", () => this.mineBlockBtn());
    document.getElementById("mine-block-btn-container").appendChild(button);
    this.updateUI();
  }

  mineBlockBtn() {
    this.miner.mineBlock();
    this.updateUI();
    //console.log(blockchain.coin);
  }  
}

export default MinerView;

