const Web3 = require('web3');
const BridgeEth = require('../build/contracts/BridgeEth.json');
const BridgeARB = require('../build/contracts/BridgeARB.json');

const web3Eth = new Web3('https://sepolia.infura.io/v3/3607152dc14446e6bb0351c2892941cc');
const web3ARB = new Web3('https://arbitrum-sepolia.infura.io/v3/3607152dc14446e6bb0351c2892941cc');
const adminPrivKey = 'e655b73f18e3792429e389fc3be8c1dfee3719a649bb42dcb2f5bfbc3228e0ad';
const { address: admin } = web3ARB.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  BridgeEth.networks['11155111'].address
);

const bridgeARB = new web3ARB.eth.Contract(
  BridgeARB.abi,
  BridgeARB.networks['421614'].address
);

bridgeEth.events.Transfer(
  {fromBlock: 0, step: 0}
)
.on('data', async event => {
  const { from, to, amount, date, nonce } = event.returnValues;

  const tx = bridgeARB.methods.mint(to, amount, nonce);
  const [gasPrice, gasCost] = await Promise.all([
    web3ARB.eth.getGasPrice(),
    tx.estimateGas({from: admin}),
  ]);
  const data = tx.encodeABI();
  const txData = {
    from: admin,
    to: bridgeARB.options.address,
    data,
    gas: gasCost,
    gasPrice
  };
  const receipt = await web3ARB.eth.sendTransaction(txData);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`
    Processed transfer:
    - from ${from} 
    - to ${to} 
    - amount ${amount} tokens
    - date ${date}
  `);
});