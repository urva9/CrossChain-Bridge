// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './BridgeBase.sol';

contract BridgeEth is BridgeBase {
  constructor(address token) BridgeBase(token) {}
}