export const GET_TASK = 'GET_TASKS';
export const GOT_TASK = 'GOT_TASKS';
export const getTasks = () => {
  return {
    type: GET_TASK,
  };
};
export const ADD_TASK = 'ADD_TASK';
export const ADDED_TASK = 'ADDED_TASK';
export const addTask = data => {
  console.log('action', data);
  return {
    type: ADD_TASK,
    payload: data,
  };
};
