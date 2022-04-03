// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: 'BRL',
    expenses: 0,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET':
    return { ...state, ...action.value };
  default:
    return state;
  }
};

export default wallet;
