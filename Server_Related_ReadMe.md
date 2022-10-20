mkdir blockchain
cd blockchain
npm init --yes
npm install --save-dev hardhat

npx hardhat

Deploy Script

Add .env

npm install dotenv

update the hardhat.config.js will env files
and read information from .env file.

npx hardhat compile

Deploy to Goerli Network
npx hardhat run scripts/deploy.js --network goerli

Address of deployed contract:
0x689e960B1C3eb5eD8B8261c5be71A511F1e6429a

