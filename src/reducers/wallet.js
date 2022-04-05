// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, RECEIVE_CURRENCIES_SUCCESS,
  RECEIVE_CURRENCIES_FAILURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case RECEIVE_CURRENCIES_SUCCESS:
    return { ...state, isFetching: false, currencies: action.currencies };
  case RECEIVE_CURRENCIES_FAILURE:
    return { ...state, isFetching: false, error: action.error };
  // case RECEIVE_EXPENSES:
  //   return { ...state, expenses: action.expenses };
  default:
    return state;
  }
};

export default wallet;
