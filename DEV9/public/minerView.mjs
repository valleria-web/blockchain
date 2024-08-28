class MinerView {
  constructor() {
    this.mineBlockBtn = document.getElementById("mineBlockBtn");
    this.setupEventListener();
  }

  setupEventListener() {
    this.mineBlockBtn.addEventListener("click", () => {
      console.log("Clic");
      this.mineBlock();
    });
  }

  onMineBlock(callback) {
    this.mineBlock = callback;
  }
}

export default MinerView;
