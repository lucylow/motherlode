require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: {
    testnet: {
      url: "https://testnet.sovryn.app/rpc",
      accounts: ["d66350b0e909469816f6f935926d16804a58e62da56d285876923bba23e14b88"]
    }
  }
};
