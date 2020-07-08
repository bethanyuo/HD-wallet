let ethers = require('ethers');

let wallet = ethers.Wallet.createRandom();
console.log('Address: ' + wallet.address);
