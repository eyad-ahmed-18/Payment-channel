## Payment Channel Smart Contract

This payment channel allows funds to be transferred between two parties securely. Follow the steps below to deploy the smart contract and set up the client application.

### Deploying the Smart Contract

1. First, add your private key in a `.secret` file inside the `smart_contract` folder.

2. Install the necessary packages:
   ```sh
   cd smart_contract
   npm install
   ```

3. Deploy the contract to the Mumbai test network:
   ```sh
   npx hardhat run scripts/deploy.js --network mumbai
   ```

4. Copy the contract address and paste it inside the `constants.js` file located in `client/src/utils/constants.js`.

### Setting Up the Client Application

1. Navigate to the `client` folder.

2. Install the necessary dependencies:
   ```sh
   npm install
   ```

3. Run the client application:
   ```sh
   npm run dev
   ```

Now you can interact with the payment channel application and transfer funds securely between the parties.
