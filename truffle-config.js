const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'matter venture maze there museum frown holiday teach skull course now state'; // Add your mnemonic here

module.exports = {
  networks: {
    ethTestnet: {
      networkCheckTimeout: 100000,
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://sepolia.infura.io/v3/3607152dc14446e6bb0351c2892941cc', // Infura Rinkeby URL
        0,
        1
      ),

      
      network_id: '11155111',
      skipDryRun:true,
      

    },
    ARBTestnet: {
      networkCheckTimeout: 100000,
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://arbitrum-sepolia.infura.io/v3/3607152dc14446e6bb0351c2892941cc'
      ),
      network_id: '421614',
      skipDryRun: true
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
