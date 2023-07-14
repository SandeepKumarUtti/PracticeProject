export const REGISTER = 'REGISTER';
export const register = data => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const LOGIN = 'LOGIN';
export const login = data => {
  return {
    type: LOGIN,
    payload: data,
  };
};
