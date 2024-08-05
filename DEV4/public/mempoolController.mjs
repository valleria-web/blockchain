class MempoolController{
    constructor(mempool, mempoolView){
        this.mempool = mempool;
        this.mempoolView = mempoolView;
        this.mempoolView.onRenderMempool(()=> this.renderMempool());

    }

    renderMempool(){
        const mempoolData = this.mempool.getPendingTransactions();
        console.log("Mempool Data:", mempoolData);
        this.mempoolView.render(mempoolData)
    }
}

export default MempoolController;