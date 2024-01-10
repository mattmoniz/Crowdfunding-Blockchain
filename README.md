## Project: Web3 Demo Blockchain Crowdfunding Website
This is my first web3 application. It is a Demo Blockchain Crowdfunding website. The idea is similar to GoFundMe but you donate to demo campaigns using fake Etherium called "Goerli". The app allows users with a funded Etherium wallet to using fake "Eth" currency to create, view, and donate to crowdfunding campaigns.

This was my first foray into blockchain. I had to create and fund my blockchain wallet using MetaMask. I used thirdweb to connect to the blockchain and even wrote solidity smartcontract!  It was so much fun to build and challenging to build. It was bookstrapped using React and Tailwind CSS.

if you want to try and create or donate to a campaign with this app,
1. Set up a metamask account
    https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask

2. Add the Goerli Test network.
    https://medium.com/@mwhc00/how-to-enable-ethereum-test-networks-on-metamask-again-d7831da23a09

3. Take your wallet code and go to https://goerlifaucet.com/ to add two Goerli Eth to play with. This is fake Etherium.

## Frameworks used
ReactJs
Tailwind CSS
thirdweb
MetaMask chrome extension
https://goerlifaucet.com/


## Visit the application here: https://samplecryptoapp.com/
# View all Campaigns
![allcampaigns](https://github.com/mattmoniz/Crowdfunding-Blockchain/assets/4000619/8a9cb911-a386-4a0d-9dcc-bfdace350e46)
# Create a Campaign
![startcampaign](https://github.com/mattmoniz/Crowdfunding-Blockchain/assets/4000619/a0cf0e48-656e-482e-8ff3-357ee6bbb0d7)
# Create a campaign and fund with metamask GoerliEth
![newcampaignmetamask](https://github.com/mattmoniz/Crowdfunding-Blockchain/assets/4000619/1ba85786-c0b9-4850-9d28-3b7c66c07257)
# ConnectWallet Modal
<img width="1152" alt="ConnectWalletModal" src="https://github.com/mattmoniz/Crowdfunding-Blockchain/assets/4000619/bea9a81b-57e2-40d6-acd3-35fe0647dbc0">

# Thirdweb dashboard page
 View the thirdweb dashboard to view the campaign analytics
![thirdweb](https://github.com/mattmoniz/Crowdfunding-Blockchain/assets/4000619/19a974d0-1a21-4b36-b5cb-2019299cb94d)


## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template vite-javascript-starter
```

You can start editing the page by modifying `src/main.jsx`. The page auto-updates as you edit the file.

On `src/index.jsx`, you'll find our `ThirdwebProvider` wrapping your app,
this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.


### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb, Vite and React, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb JavaScript Documentation](https://docs.thirdweb.com/react) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com/react) - check our guides and development resources.
- [Vite Documentation](https://vitejs.dev/guide/) - learn about Vite features.
- [React documentation](https://reactjs.org/) - learn React.
- [Templates](https://thirdweb.com/templates)

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
