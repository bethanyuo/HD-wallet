// 1A) Restore HD Wallet from Existing Mnemonic

const ethers = require('ethers');

function restoreHDNode(mnemonic) {
    return ethers.utils.HDNode.fromMnemonic(mnemonic);
}
let mnemonic = "upset fuel enhance depart portion hope core animal innocent will athlete snack";

console.log(restoreHDNode(mnemonic));

// 1B) Restore HD Wallet from Existing Mnemonic

console.log();

function restoreHDWallet(mnemonic) {
    return ethers.Wallet.fromMnemonic(mnemonic);
}

console.log(restoreHDWallet(mnemonic));

// 2A) Generate a New Random HD Wallet from Random Mnemonic

console.log();

function generateMnemonic() {
    let randomEntropyBytes = ethers.utils.randomBytes(16);
    return ethers.utils.HDNode.entropyToMnemonic(randomEntropyBytes);
}

function generateRandomHDNode() {
    let mnemonic = generateMnemonic();
    return ethers.utils.HDNode.fromMnemonic(mnemonic);
}

console.log(generateRandomHDNode());

console.log();

// 2B) Generate a New Random HD Wallet from Random Mnemonic

function generateRandomWallet() {
    return ethers.Wallet.createRandom();
}

console.log(generateRandomWallet());

console.log();

// 3A) Save HD Wallet as JSON

async function saveWalletAsJson(wallet, password) {
    return wallet.encrypt(password);
}

(async() => {
    let wallet = ethers.Wallet.createRandom();
    let password = "p@$$word";
    let json = await saveWalletAsJson(wallet, password);
    console.log(json);
})();

console.log();


// 3B) Load HD Wallet from JSON

async function decryptWallet(json, password) {
    return ethers.Wallet.fromEncryptedJson(json, password);
}

(async() => {
    let wallet = ethers.Wallet.createRandom();
    let password = "p@$$word";
    let json = await saveWalletAsJson(wallet, password);
    let walletDecrypted = await decryptWallet(json, password);
    console.log(walletDecrypted);
})();

console.log();

// 4) Derive Keys from HD Wallet

function deriveFiveWalletsFromHdNode(mnemonic, derivationPath) {
    let wallets = [];

        for (let i = 0; i < 5; i++) {
            let hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic).derivePath(derivationPath + "/" + i);
            console.log(hdNode);
            let wallet = new ethers.Wallet(hdNode.privateKey);
            wallets.push(wallet);
        }
        return wallets;
}

let derivationPath = "m/44'/60'/0'/0";

console.log(deriveFiveWalletsFromHdNode(mnemonic, derivationPath));

// 5) Sign a Transaction

async function signTransaction(wallet, toAddress, value) {
    let transaction = {
        nonce: 0,
        gasLimit: 21000,
        gasPrice: ethers.utils.bigNumberify("2000000000"),
        to: toAddress,
        value: ethers.utils.parseEther(value),
        data: "0x"
    };
    return wallet.sign(transaction);
}

let wallets = deriveFiveWalletsFromHdNode(mnemonic, derivationPath);
let wallet = wallets[1];
let recipient = "0x933b946c4fec43372c5580096408d25b3c7936c5";
let value = "1.0";

(async() => {
    let signedTransaction = await signTransaction(wallet, recipient, value);
    console.log("Signed Transaction:\n" + signedTransaction); })();

console.log();
