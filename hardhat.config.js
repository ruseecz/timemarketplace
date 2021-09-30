require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const privateKey = process.env.PRIVATEKEY;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.POLYGONMUMBAI}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.POLYGONMAINNET}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
