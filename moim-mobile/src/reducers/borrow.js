import { types } from '../actions';

const initialState = {
    amount: 0,
};

const borrow = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.BORROW:
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
}

export default borrow