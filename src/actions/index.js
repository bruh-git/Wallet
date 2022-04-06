// Coloque aqui suas actions
import fetchWallet from '../service/fetchApi';
import { RECEIVE_CURRENCIES_FAILURE,
  RECEIVE_CURRENCIES_SUCCESS,
  RECEIVE_EXPENSES_FAILURE,
  RECEIVE_EXPENSES_SUCCESS, REQUEST_CURRENCIES,
  REQUEST_EXPENSES } from './actionTypes';

export const ACTION_USER_LOGIN = (email) => ({ type: 'USER_LOGIN', email });

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrenciesSuccess = (currencies) => ({
  type: RECEIVE_CURRENCIES_SUCCESS,
  currencies,
});

export const receiveCurrenciesFailure = (error) => ({
  type: RECEIVE_CURRENCIES_FAILURE,
  error,
});

export const requestAddExpense = () => ({
  type: REQUEST_EXPENSES,
});

export const receiveAddExpenseSucess = (expense) => ({
  type: RECEIVE_EXPENSES_SUCCESS,
  // value: expense,
  expense,
});

export const receiveAddExpenseFailure = (error) => ({
  type: RECEIVE_EXPENSES_FAILURE,
  error,
});

//  THUNK
export const fetchCurrencies = () => async (dispatch) => {
  // avisa para a aplicacao que estamos iniciado o fetch
  dispatch(requestCurrencies());
  try {
    // faz o fetch da api
    const json = await fetchWallet();
    const filterFetch = Object.keys(json).filter((el) => el !== 'USDT');
    dispatch(receiveCurrenciesSuccess(filterFetch));
  } catch (error) {
    dispatch(receiveCurrenciesFailure());
  }
};

export const fetchExpenses = () => async (dispatch) => {
  dispatch(requestAddExpense());
  try {
    const json = await fetchWallet();
    dispatch(receiveAddExpenseSucess(json));
  } catch (error) {
    dispatch(receiveAddExpenseFailure());
  }
};
