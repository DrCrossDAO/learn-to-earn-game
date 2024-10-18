import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployClaimNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, log } = hre.deployments;

  // Retrieve the addresses of previously deployed contracts
  const caseToken = await hre.deployments.get("CaseToken");
  const costManagement = await hre.deployments.get("CostManagement");
  const attorney = await hre.deployments.get("AttorneyEngagement");
  const investor = await hre.deployments.get("InvestorContract");

  // Deploy ClaimNFT with the required constructor arguments
  const deployResult = await deploy("ClaimNFT", {
    from: deployer,
    args: [
      costManagement.address,    // Address of the CostManagement contract
      attorney.address,          // Address of the AttorneyEngagement contract
      investor.address           // Address of the InvestorContract
    ],
    log: true,
    autoMine: true,
  });

  log("ClaimNFT deployed to:", deployResult.address);
};

export default deployClaimNFT;
deployClaimNFT.tags = ["ClaimNFT"];
