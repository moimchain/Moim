const express = require('express');
const router = express.Router();

const contractConfig = require('../config');
const abi = require('../contractAbi/MoimAbi.json');
const Web3 = require('web3');
const PrivateKeyProvider = require("truffle-privatekey-provider");

// setting Contract Config
const privateKey = contractConfig.privateKey;
const contractAddr = contractConfig.contractAddr;
const provider = new PrivateKeyProvider(privateKey, contractConfig.network);
const web3 = new Web3(provider);
const contractInstance = web3.eth.Contract(abi, contractAddr);
const adminAddr = '0x1Cc180855d25D3B8A3090F04a30Cc27A5C63FfE1';

// exports.getReceipt = (hash) => {
//     console.log(hash);
// };

exports.createLoan = (
    borrower, lenderAdrr, amountList, postNum
) => {
    try {
        contractInstance.methods.createNewLoan(borrower, lenderAdrr, amountList, postNum).send({
            gas: '1010000',
            from: adminAddr
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};


exports.updateLoan = (
    borrower, postNum, repayValue
) => {
    try {
        contractInstance.methods.payBackLoan(borrower, postNum, repayValue).send({
            gas: '1010000',
            from: adminAddr
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

exports.getLoan = async (
    borrowMail,
    postNum
) => {
    return await contractInstance.methods.getLoanInfo(borrowMail, postNum).call();
};

exports.byteConverter = (arr) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(web3.utils.fromAscii(arr[i]));
    }
    return temp;
}

exports.hexConverter = (arr) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(web3.utils.toAscii(arr[i]).toString().replace("\u0000", ""));
    }
    return temp;
}