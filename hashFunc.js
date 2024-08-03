const SHA256 = require("crypto-js/sha256");

hashFunc = (blockData) => {
  console.log("this is running");
  blockData.data = JSON.stringify(blockData?.data);

  console.log(blockData);
  const sha = SHA256(blockData);
  console.log(sha.toString());
  return sha.toString();
};

module.exports = { hashFunc };
