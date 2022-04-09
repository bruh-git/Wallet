// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES_FAILURE,
  RECEIVE_CURRENCIES_SUCCESS,
  RECEIVE_EXPENSES_FAILURE,
  RECEIVE_EXPENSES_SUCCESS, REQUEST_CURRENCIES,
  REQUEST_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [], // currencies traz todas as moedas da Api ex.: USD
  expenses: [ // expenses traz todas as depesas digitadas nos inptus
  ],
  isFetching: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case RECEIVE_CURRENCIES_SUCCESS:
    return { ...state, isFetching: false, currencies: action.currencies };
  case RECEIVE_CURRENCIES_FAILURE:
    return { ...state, isFetching: false, error: action.error };
  case REQUEST_EXPENSES:
    return { ...state };
  case RECEIVE_EXPENSES_SUCCESS:
    return { ...state, expenses: [...state.expenses, action.expense] }; // junta o novo estado com os que ja estão lá.
  case RECEIVE_EXPENSES_FAILURE:
    return { ...state, error: action.error };
  default:
    return state;
  }
};

export default wallet;
