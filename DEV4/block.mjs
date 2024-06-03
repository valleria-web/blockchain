class Block {
  constructor(index, timestamp, [{}], nonce, hash, previousBlockHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = [{}];
    this.nonce = nonce;
    this.hash = hash;
    this.previousBlockHash = previousBlockHash;
  }
}


export default Block;
