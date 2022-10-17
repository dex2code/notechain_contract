// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre    = require("hardhat");
const ethers = hre.ethers

async function main() {

  console.log("Deploying in progress...")
  const NoteChain = await ethers.getContractFactory("NoteChain");
  const notechain = await NoteChain.deploy();
  console.log("Trying to deploy:", notechain)

  await notechain.deployed();

  console.log("Contract deployed to:", notechain.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
