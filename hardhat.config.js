require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { WALLET_PRIVATE_KEY, ALCHEMY_MUMBAI_URL, ALCHEMY_MAINNET_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  solidity: {

    version: "0.8.17",

    settings: {

      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  paths: {

    sources:   "./contracts",
    artifacts: "./artifacts"
  },

  networks: {

    polygon_mumbai: {
      url: ALCHEMY_MUMBAI_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },

    polygon_mainnet: {
      url: ALCHEMY_MAINNET_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }

  }
};
