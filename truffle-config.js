const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'matter venture maze there museum frown holiday teach skull course now state'; // Add your mnemonic here

module.exports = {
  networks: {
    ethTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://rinkeby.infura.io/v3/3607152dc14446e6bb0351c2892941cc', // Infura Rinkeby URL
        0,
        1
      ),
      network_id: '4', // Ensure network_id is a string
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://data-seed-prebsc-1-s1.binance.org:8545'
      ),
      network_id: '97',
      skipDryRun: true
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 8000000, 
    },
   
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.20",  // This line specifies the Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  }
};
