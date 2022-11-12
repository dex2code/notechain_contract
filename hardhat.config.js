require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { WALLET_PRIVATE_KEY, ALCHEMY_MUMBAI_URL, ALCHEMY_MAINNET_URL, POLYGON_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  solidity: {

    version: "0.8.17",

    settings: {

      optimizer: {
        enabled: true,
        runs: 2000
      }
    }
  },

  paths: {

    sources:   "./contracts",
    artifacts: "./artifacts"
  },

  networks: {

    hardhat: {},

    polygon_mumbai: {
      url: ALCHEMY_MUMBAI_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },

    polygon_mainnet: {
      url: ALCHEMY_MAINNET_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }
  },

  etherscan: {
    apiKey: POLYGON_API_KEY
  }

};
