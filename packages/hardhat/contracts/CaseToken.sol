// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CaseToken is ERC20 {
    constructor() ERC20("Case Token", "CASE") {
        _mint(0x67542216eAbb182e42fC9Ac632A1565c1263693f, 100000 * 10 ** 18);
    }
}