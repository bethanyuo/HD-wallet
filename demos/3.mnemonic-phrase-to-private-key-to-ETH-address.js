let ethers = require('ethers');

let mnemonic =
  'enact range stone boss alone october list vast laptop sunny iron price';

let wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log('Address: ' + wallet.address);
// Address: 0xa05dfb7868d5cdf655d775DA7C96269ba54AC4a4
