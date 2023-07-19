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
  return {
    type: ADD_TASK,
    payload: data,
  };
};
export const DELETE_TASK = 'DELETE_TASK';
export const DELETED_TASK = 'DELETED_TASK';
export const deleteTask = data => {
  return {
    type: DELETE_TASK,
    payload: data,
  };
};

export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATED_TASK = 'UPDATED_TASK';
export const updateTask = data => {
  return {
    type: UPDATE_TASK,
    payload: data,
  };
};
