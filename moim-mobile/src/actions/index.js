export const SET_NUMBER = 'SET_NUMBER';
export const BORROW = 'BORROW';
export const PICK = 'PICK';

export const setNumberAction = amount => ({
    type: SET_NUMBER,
    amount: amount
})

export const borrow = amount => ({
    type: types.BORROW,
    amount
})

export const pick = email => ({
    type: types.PICK,
    email
})