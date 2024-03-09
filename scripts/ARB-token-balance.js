

const TokenARB = artifacts.require('./TokenARB.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const tokenARB = await TokenARB.deployed();
  const balance = await tokenARB.balanceOf(recipient);
  console.log(balance.toString());
  done();
}