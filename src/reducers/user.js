// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
  case 'USER_LOGIN':
    return { ...state, ...action.value };
  default:
    return state;
  }
};

export default user;
