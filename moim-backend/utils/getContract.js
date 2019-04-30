const express = require('express');
const router = express.Router();

const contractConfig = require('../config');
const abi = require('../abi/Moim.json');
const Web3 = require('web3');
const PrivateKeyProvider = require("truffle-privatekey-provider");

// setting Contract Config
const privateKey = contractConfig.privateKey;
const contractAddr = contractConfig.contractAddr;
const provider = new PrivateKeyProvider(privateKey, contractConfig.network);
const web3 = new Web3(provider);
const contractInstance = web3.eth.Contract(abi, contractAddr);
const adminAddr = '0x1Cc180855d25D3B8A3090F04a30Cc27A5C63FfE1';

export function createLoan({
    borrowMail,
    lenderMail,
    postNum,
    lenderAmount
}) {
    return contractInstance.methods.createNewLoan(borrowMail, lenderMail, postNum, lenderAmount).send({
        gas: '210000',
        from: adminAddr
    }).then(res => {
        console.log(res);
    })
};


export function updateLoan({
    borrowMail,
    lenderMail,
    postNum,
    lenderAmount
}) {
    return contractInstance.methods.payBackLoan(borrowMail, lenderMail, postNum, lenderAmount).send({
        gas: '210000',
        from: adminAddr
    }).then(res => {
        console.log(res);
    })
};

export function updateLoan({
    borrowMail,
    lenderMail,
    postNum,
    lenderAmount
}) {
    contractInstance.methods.getLoanInfo(borrowMail, lenderMail, postNum).call().then(res => {
        console.log(res);
    })
};