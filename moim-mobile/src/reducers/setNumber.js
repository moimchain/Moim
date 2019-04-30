import { types } from '../actions';

const initialState = {
    amount: 0,
    friends: [],
};

const setNumber = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_NUMBER:
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
}

export default setNumber