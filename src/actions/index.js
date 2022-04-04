// Coloque aqui suas actions
import fetchWallet from '../service/fetchApi';

export const ACTION_USER_LOGIN = (value) => ({ type: 'USER_LOGIN', value });

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

// AQUI ESTA O THUNK
export function fetchCurrencies() {
  return async (dispatch) => {
    // avisa para a aplicacao que estamos iniciado o fetch
    dispatch(requestCurrencies());
    try {
      // faz o fetch da api
      const result = await fetchWallet();
      const currencies = Object.keys(result).filter((el) => el !== 'USDT');
      dispatch(receiveCurrenciesSuccess(currencies));
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}
