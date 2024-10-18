import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "Vendor" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployVendor: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const caseToken = await hre.ethers.getContract<Contract>("CaseToken", deployer);
  const caseTokenAddress = await caseToken.getAddress();
  await deploy("Vendor", {
    from: deployer,
    args: [caseTokenAddress],
    log: true,
    autoMine: true,
  });
  const vendor = await hre.ethers.getContract<Contract>("Vendor", deployer);
  const vendorAddress = await vendor.getAddress();

  // Transferir la propiedad del contrato al dirección de tu frontend
  await vendor.transferOwnership("0x67542216eAbb182e42fC9Ac632A1565c1263693f");
};

export default deployVendor;

deployVendor.tags = ["Vendor"];
