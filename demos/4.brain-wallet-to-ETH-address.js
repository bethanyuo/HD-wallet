let ethers = require('ethers');

var username = 'support@ethers.io';

var password = 'password123';

ethers.Wallet.fromBrainWallet(username, password).then(wallet => {
  console.log('Address: ' + wallet.address);
});
// Address: 0x7Ee9AE2a2eAF3F0df8D323d555479be562ac4905
