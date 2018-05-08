const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'latin rare father sister february blast satisfy when vivid business enlist boss',
  'https://rinkeby.infura.io/5rSwkhEFzq6kYPtB5pup'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attemping to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
    })
    .send({
      from: accounts[0],
      gas: '1000000',
    });

  // interface is the ABI
  console.log(interface);

  console.log('Contract deployed to', result.options.address);
};

deploy();
