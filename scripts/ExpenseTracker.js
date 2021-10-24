
const hre = require("hardhat");

async function main() {

  const ExpenseTracker = await hre.ethers.getContractFactory("ExpenseTracker");
  const expenseTracker = await ExpenseTracker.deploy();

  await expenseTracker.deployed();

  console.log("ExpenseTracker deployed to:", expenseTracker.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
