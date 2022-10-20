require("@nomicfoundation/hardhat-toolbox");
// Read env file.
require("dotenv").config({ path: ".env" });

const GOERLI_HTTP_URL = process.env.GOERLI_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
