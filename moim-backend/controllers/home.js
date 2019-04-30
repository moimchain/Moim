const contract = require('../utils/getContract');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
    let token = "empty"
    console.log(req.body);
    if (req.user) {
        token = req.user.tokens.find(token => token.kind === 'facebook');
    }
    res.json({
        hello: 'world',
        auth: token
    });
}

exports.borrow = async (req, res) => {
    console.log(req.body);

    let {
        borrower,
        lenderList,
        amountList,
        postNum
    } = req.body;

    const lenderAdrr = await contract.byteConverter(lenderList);
    console.log(lenderList);
    const result = await contract.createLoan(borrower, lenderAdrr, amountList, postNum);

    if (result) {
        console.log(result);
        res.json({
            ok: true
        });
    } else {
        console.log(result);
        res.json({
            ok: false
        });
    }
}

exports.repay = async (req, res) => {
    console.log(req.body);

    let {
        borrower,
        postNum,
        repayValue
    } = req.body;

    const result = await contract.updateLoan(borrower,
        postNum, repayValue);

    if (result) {
        console.log(result);
        res.json({
            ok: true
        });
    } else {
        console.log(result);
        res.json({
            ok: false
        });
    }
}

exports.getLoanInfo = async (req, res) => {
    console.log(req.body);

    let {
        borrower,
        postNum
    } = req.body;

    const result = await contract.getLoan(borrower, postNum);

    if (result) {
        const lenderArray = contract.hexConverter(result[0]);
        const lenderAmountArray = bigIntConverter(result[1]);
        const payBackedAmountArray = bigIntConverter(result[3]);
        const payBackedTimeArray = bigIntConverter(result[4]);

        const loanInfo = {
            lenderArray,
            lenderAmountArray,
            totalPayBackedAmount: BigInt(result[2]).toString(),
            payBackedAmountArray,
            payBackedTimeArray
        }
        console.log(loanInfo);
        res.json({
            ok: true,
            loanInfo
        });
    } else {
        console.log('error');
        res.json({
            ok: false
        });
    }

}

const bigIntConverter = (arr) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(BigInt(arr[i]).toString());
    }
    return temp;
}