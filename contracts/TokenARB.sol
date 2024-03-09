// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './TokenBase.sol';

contract TokenARB is TokenBase {
  constructor() TokenBase('ARB Token', 'BTK') {}
}