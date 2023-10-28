require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/c139f769e47b405ab17e55fa68f0b2b1",
      accounts: [privateKey],
    },
  },
};
