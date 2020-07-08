let ethers = require('ethers');

let privateKey =
  '0x012345678901234567890123456789012345678901234567890123456789012';

let wallet = new ethers.Wallet(privateKey);

console.log('Address: ' + wallet.address);
// Address: 0x1C68340bb2810BF5B0BEd3EDE256335cb51C53C7
