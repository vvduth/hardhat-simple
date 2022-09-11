require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL = process.env.RINKEBY_URL ;
const KEY = process.env.PRIVATE_KEY.toString()
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: RPC_URL ,
      accounts: [KEY],
      chainId: 5 , 
    } ,
  },
  solidity: "0.8.9",
};
