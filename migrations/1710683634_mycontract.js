var MyContract = artifacts.require("./mycontract.sol");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(MyContract);
};
