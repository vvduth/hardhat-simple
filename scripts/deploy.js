// imports
// import ethers from '@nomiclabs/hardhat-ethers'


const {ethers} = require("hardhat")
// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage") ;

  console.log("Deplpying contract...")

  const simpleStorage = await SimpleStorageFactory.deploy() ;
  await simpleStorage.deployed() ;
  // where is private key and private url

  // hard hat has a tool built in hardhat network allows you to deploy your contract, run ur test and debug your code

  // the hardhat network is really similar to ganache, basicly fake blockchain

  
}

// main
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
