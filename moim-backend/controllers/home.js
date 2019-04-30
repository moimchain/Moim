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
        lender,
        postNum,
        amount
    } = req.body;

    const result = await contract.createLoan(borrower, lender, postNum, amount);

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
        lender,
        postNum,
        amount
    } = req.body;

    const result = await contract.updateLoan(borrower, lender, postNum, amount);

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
        lender,
        postNum
    } = req.body;

    const result = await contract.getLoan(borrower, lender, postNum);

    if (result) {
        const payBackedAmountArray = converter(result[2]);
        const payBackedTimeArray = converter(result[3]);
        const loanInfo = {
            totalAmount: BigInt(result[0]).toString(),
            totalPayBackedAmount: BigInt(result[1]).toString(),
            payBackedAmountArray,
            payBackedTimeArray
        }

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

const converter = (arr) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(BigInt(arr[i]).toString());
    }
    return temp;
}