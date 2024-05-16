import { randomUUID } from "crypto";

class Node {
  constructor(blockchain) {
    this.currentNodeId = randomUUID().split("_").join("");
    this.blockchain = blockchain;
    this.networkNodes = [];
    this.transaction = [];
  }

  registerNode() {
    if (!this.blockchain.networkNodes.includes(this.currentNodeId)) {
      this.networkNodes.push(this.currentNodeId);
      this.blockchain.networkNodes.push(this.currentNodeId);
    }
  }

  addTransaction(newTransaction){
    this.transaction.push(newTransaction);
    return this.transaction;
  }
}

export default Node;


//  registerNodesBulk(allNetworkNodes) {
//    allNetworkNodes.forEach(networkNodeId => {
//      if (!this.networkNodes.includes(networkNodeId) && networkNodeId !== this.currentNodeUrl) {
//        this.networkNodes.push(networkNodeId);
//      }
//    });
//  }//

//  broadcastTransaction(newTransaction) {
//    const requestPromises = this.networkNodes.map(networkNodeId => {
//      const requestOptions = {
//        uri: networkNodeId + "/transaction",
//        method: "POST",
//        body: newTransaction,
//        json: true,
//      };
//      return requestPromise(requestOptions);
//    });//

//    return Promise.all(requestPromises);
//  }//

//  broadcastNewBlock(newBlock) {
//    const requestPromises = this.networkNodes.map(networkNodeId => {
//      const requestOptions = {
//        uri: networkNodeId + "/receive-new-block",
//        method: "POST",
//        body: { newBlock },
//        json: true,
//      };
//      return requestPromise(requestOptions);
//    });//

//    return Promise.all(requestPromises);
//  }

