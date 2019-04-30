import * as types from "../actions/types";

const initialState = {
    amount: 0,
    friends: [
        {
            name: "Jiwon",
            email: "bjiwon2005@gmail.com",
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            value: 0,
            chosen: false,
        },
        {
            name: "Melissa",
            email: "melissa@gmail.com",
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
            value: 0,
            chosen: false,
        },
        {
            name: "Conan",
            email: "conan@gmail.com",
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
            value: 0,
            chosen: true,
        },
        {
            name: "Klaytn",
            email: "klaytn@gmail.com",
            avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
            value: 0,
            chosen: false,
        },
        {
            name: "John",
            email: "John@gmail.com",
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
            value: 0,
            chosen: false,
        },
        {
            name: "Mark",
            email: "mark@gmail.com",
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
            value: 0,
            chosen: false,
        },
    ],
    isRepayment: false,
    postNum: 10000,
    totalAmount: 0,
    totalPayBackedAmount: 0,
    payBackedAmountArray: [],
    payBackedTimeArray: [],
}

export function loanInfo(state = initialState, action) {
    switch (action.type) {
        case types.SET_AMOUNT:
            var newState = {
                ...state,
                amount: action.amount,
                postNum: action.postNum,
                isRepayment: action.isRepayment,
            };
            return newState;
        case types.BORROW:
            var newState = {
                ...state,
                friends: action.friends,
                postNum: action.postNum,
            };
            return newState;
        case types.CHOOSE:
            var newState = {
                ...state,
                friends: action.friends,
            };
            return newState;
        case types.REPAY:
            var newState = {
                ...state,
                amount: action.amount,
                isRepayment: true,
            };
            return newState;
        case types.GET_LOAN_INFO:
            var newState = {
                ...state,
                totalAmount: action.totalAmount,
                totalPayBackedAmount: action.totalPayBackedAmount,
                payBackedAmountArray: action.payBackedAmountArray,
                payBackedTimeArray: action.payBackedTimeArray,
            };
            return newState;
        case types.CLEAN_UP:
            return initialState;
        default:
        return state;
  }
}

// { totalAmount: ‘7777777’,
//     totalPayBackedAmount: ‘11000’,
//     payBackedAmountArray: [ ‘10000’, ‘1000’ ],
//     payBackedTimeArray: [ ‘1556617235’, ‘1556617287’ ] }