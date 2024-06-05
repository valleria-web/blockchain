class Block {
  constructor(index, nonce, hash, previousBlockHash, transaction) {
    this.index = index;
    this.timestamp = Date.now();
    this.nonce = nonce;
    this.hash = hash;
    this.previousBlockHash = previousBlockHash;
    this.transaction = transaction;

  }

  static createBlock(index, nonce, hash, previousBlockHash, transaction) {
    return new Block(index, nonce, hash, previousBlockHash, transaction);
  }
}

export default Block;














/*class Block {
  constructor(index, timestamp, [{}], nonce, hash, previousBlockHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = [{}];
    this.nonce = nonce;
    this.hash = hash;
    this.previousBlockHash = previousBlockHash;
  }
}


export default Block;*/
