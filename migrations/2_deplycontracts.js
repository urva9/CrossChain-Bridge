
const TokenEth = artifacts.require('TokenEth.sol');
const TokenARB = artifacts.require('TokenARB.sol');
const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeARB = artifacts.require('BridgeARB.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'ethTestnet') {
    await deployer.deploy(TokenEth);
    const tokenEth = await TokenEth.deployed();
    await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeEth, tokenEth.address);
    const bridgeEth = await BridgeEth.deployed();
    await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'ARBTestnet') {
    await deployer.deploy(TokenARB);
    const tokenARB = await TokenARB.deployed();
    await deployer.deploy(BridgeARB, tokenARB.address);
    const bridgeARB = await BridgeARB.deployed();
    await tokenARB.updateAdmin(bridgeARB.address);
  }
};