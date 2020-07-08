# Ethereum HD Wallet
A Hierarchical Deterministic Wallet represents a large tree of private keys, which can be reproduced from an initial seed. Each node in the tree is represented by an HDNode which can be branched. 

This is an implementation of a hierarchical wallet (HD wallet) for Ethereum in JavaScript using the Ethers.js library. The wallet will hold a BIP39 mnemonic phrase and will allow deriving private keys and addresses from it. The concept of hierarchical wallets (HD Wallets) is based on BIP39 and BIP44 specs. The HDNode class in the Ethers.js library holds a seed key + the ability to derive private keys by a certain derivation path.

## Installation
* Initialize a package.json 
```bash
npm init -y
```
* ethers.js
```bash
npm install --save ethers
```
## BIP39 and BIP44 Online 
Play a bit with the BIP39 online implementation here: [iancoleman](https://iancoleman.io/bip39). Generate/load mnemonics, derive Ethereum and Bitcoin keys and addresses. 

## 1A) Restore HD Wallet from Existing Mnemonic

Restore an HD node by given existing mnemonic words:
```
upset fuel enhance depart portion hope core animal innocent will athlete snack
```
To create an HD node from a mnemonic, use `ethers.utils.HDNode.fromMnemonic`. The HD node stores a key pair (publicKeyBytes has been truncated)

## 1B) Restore HD Wallet from Existing Mnemonic

When an ethers.Wallet instance is created from a mnemonic, it actually uses `HDNode.fromMnemonic`, derives once, and from the new HD node, it takes the private key to build the wallet.

## 2A) Generate a New Random HD Wallet from Random Mnemonic
Generate a new random HD node (generate random mnemonics). To create a random HD node, you can either do `ethers.Wallet.createRandom` and build the HD node from the mnemonic, or you can build the mnemonic from 16 bytes of entropy using `ethers.utils.HDNode.entropyToMnemonic`.

## 2B) Generate a New Random HD Wallet from Random Mnemonic
Create a random HD wallet using `ethers.Wallet.createRandom`.

## 3A) Save HD Wallet as JSON
Encrypt and save given HD node to a JSON document by password. To save the HD Wallet in an encrypted JSON format, you need the Wallet to include the mnemonic phrase. The mnemonic is encrypted in the `x-ethers` part of the json. 

## 3B) Load HD Wallet as JSON
Decrypt and load an HD node from a JSON document using a password. Use `ethers.Wallet.fromEncryptedJson(json, password)`.

## 4) Derive Keys from HD Wallet
Derive keys (and their associated addresses) from HD Wallet by given derivation path. Derivation path is `m/44'/60'/0'/0`.

## 5) Sign a Transaction
Take the second of the derived wallets and sign a transaction with a given recipient address and ether value.
* Ethereum Recipient Address
```
0x933b946c4fec43372c5580096408d25b3c7936c5 
```
### Module
MI2: Module 3: E1
