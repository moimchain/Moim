import { combineReducers } from 'redux';
import { borrow } from './borrow';
import { setNumber } from './setNumber';

export default combineReducers({
    borrow,
    setNumber
});