// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./CaseToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vendor is Ownable {

  // Our Token Contract
  CaseToken caseToken;

  // Event that logs buy operation
  event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
  event SellTokens(address seller, uint256 amountOfTokens, uint256 amountOfETH);

  constructor(address tokenAddress) {
    caseToken = CaseToken(tokenAddress);
  }

  /**
  * @notice Allow users to buy tokens for ETH
  */
  function buyTokens() public payable returns (uint256 tokenAmount) {

    uint256 amountToBuy = 10;

    // check if the Vendor Contract has enough amount of tokens for the transaction
    uint256 vendorBalance = caseToken.balanceOf(address(this));
    require(vendorBalance >= amountToBuy, "Vendor contract has not enough tokens in its balance");

    // Transfer token to the msg.sender
    bool sent = caseToken.transfer(msg.sender, amountToBuy);
    require(sent, "Failed to transfer token to user");

    // emit the event
    emit BuyTokens(msg.sender, msg.value, amountToBuy);

    return amountToBuy;
  }



  /**
  * @notice Allow the owner of the contract to withdraw
  */
  function withdraw() public onlyOwner {
    uint256 ownerBalance = address(this).balance;
    require(ownerBalance > 0, "Owner has no balance to withdraw");

    (bool sent,) = msg.sender.call{value: address(this).balance}("");
    require(sent, "Failed to send user balance back to the owner");
  }
}
