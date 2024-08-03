let { hashFunc } = require("./hashFunc");
class Block {
  constructor({ lastHash, data, timeStamp, signer }) {
    this.lastHash = lastHash;
    this.data = data;
    this.timeStamp = timeStamp;
    this.signer = signer;
  }
  calculateHash() {
    return hashFunc({
      lastHash: this.lastHash,
      data: this.data,
      timeStamp: this.timeStamp,
      signer: this.signer,
    }).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
  }

  getLatestBlock = () => {
    return this.chain[this.chain.length - 1];
  };

  addNewBlock(blockData) {
    blockData.lastHash = this.getLatestBlock()?.hash;
    blockData.hash = blockData.calculateHash();
    this.chain.push(blockData);
  }
}

let sphinxBlock = new Blockchain();

sphinxBlock.addNewBlock(
  new Block({ timeStamp: new Date(), data: { any: "looool" } }),
);

sphinxBlock.addNewBlock(
  new Block({ timeStamp: new Date(), data: { any: "looool" } }),
);
sphinxBlock.addNewBlock(
  new Block({ timeStamp: new Date(), data: { any: "looool" } }),
);

console.log(sphinxBlock);
