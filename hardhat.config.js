require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("./tasks/block-number")

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL = process.env.RINKEBY_URL ;
const KEY = process.env.PRIVATE_KEY.toString()
const COINMARKET = process.env.COINMARKET
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: RPC_URL ,
      accounts: [KEY],
      chainId: 5 , 
    } ,
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: thanks hardhat
      chainId: 31337, 
    }
  },
  etherscan: {
    apiKey: "3JFPS77M5DJI9XSTRVK32GC56R9EBY85NM",
  },
  solidity: "0.8.9",
  gasReporter: {
    enabled : true, 
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET ,
  }
};
