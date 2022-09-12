// imports
// import ethers from '@nomiclabs/hardhat-ethers'


const {ethers, network} = require("hardhat")
// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage") ;

  console.log("Deploying contract...")

  const simpleStorage = await SimpleStorageFactory.deploy() ;
  await simpleStorage.deployed() ;
  // where is private key and private url

  // hard hat has a tool built in hardhat network allows you to deploy your contract, run ur test and debug your code

  // the hardhat network is really similar to ganache, basicly fake blockchain

  // verify the contract 
  if (network.config.chainId === 5) {
    await simpleStorage.deployTransaction.wait(6) ;
    await verify(simpleStorage.address, [])
  }


// interact with contract
const currentValue = await simpleStorage.retrieve() 
console.log(`Current value is: ${currentValue}`) ;

//update the current value 
const transactionResponse = await simpleStorage.store(7) // method defineed in sol file
await transactionResponse.wait(1) ;
const updatedValue = await simpleStorage.retrieve()  ; 
console.log(`Updated value is: ${updatedValue}`) ;


}


// async function verify(contractAddress, args) {
  const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args,
      })
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!")
      } else {
        console.log(e)
      }
    }
  }

// main
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
