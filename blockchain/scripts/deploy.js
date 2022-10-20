const { ethers } = require("hardhat");

async function main() {
 

  const Whitelist = await ethers.getContractFactory("Whitelist");
  const whiteList = await Whitelist.deploy(10);

  await whiteList.deployed();

  console.log(
    `WhiteList deployed to ${whiteList.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
