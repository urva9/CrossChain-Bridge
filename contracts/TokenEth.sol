// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './TokenBase.sol';

contract TokenEth is TokenBase {
  constructor() TokenBase('ETH Token', 'ETK') {}
}