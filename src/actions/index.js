// Coloque aqui suas actions
import fetchWallet from '../service/fetchApi';

export const ACTION_USER_LOGIN = (email) => ({ type: 'USER_LOGIN', email });

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES_SUCCESS = 'RECEIVE_CURRENCIES_SUCCESS';
export const RECEIVE_CURRENCIES_FAILURE = 'RECEIVE_CURRENCIES_FAILURE';

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
