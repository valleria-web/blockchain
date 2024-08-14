class MinerController {
  constructor(miner, minerView) {
    this.miner = miner;
    this.minerView = minerView;
    this.minerView.onMineBlock(() => this.mineBlock());
  }

  mineBlock() {
    const mine = this.miner.mineBlock();
  }
}

export default MinerController;
