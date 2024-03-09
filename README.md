# Cross-Chain Bridge README

## Overview

This Cross-Chain Bridge facilitates the seamless transfer of assets between Ethereum and Arbitrum blockchains. The bridge is built using Truffle, Node.js, Ethereum, Arbitrum, and Solidity.

## Technologies Used

- **Truffle**: A development framework for Ethereum that makes it easy to write, compile, and deploy smart contracts.
- **Node.js**: A JavaScript runtime that enables the execution of server-side JavaScript code.
- **Ethereum**: A decentralized platform that enables the creation of smart contracts and decentralized applications (DApps).
- **Arbitrum**: A layer 2 scaling solution for Ethereum that aims to improve scalability and reduce transaction fees.
- **Solidity**: A programming language used for writing smart contracts on the Ethereum platform.

## User Flow

Follow these steps to deploy the contracts using Truffle and run the Ethereum-Arbitrum bridge script.

### Step 1: Install Dependencies

Make sure you have Node.js and Truffle installed on your machine.

```bash
npm install -g truffle
npm i
```

### Step 2: Run eth-ARB bridge script

```bash
node scripts/eth-ARB-bridge.js
```

### Step 2: Run eth-ARB transfer script

```bash
truffle exec scripts/eth-ARB-transfer.js
```