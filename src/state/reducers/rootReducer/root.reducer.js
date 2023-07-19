import {combineReducers} from 'redux';
import addTask from '../addTask/addTask.reducer';
import getTasks from '../getTasks/getTasks.reducer';
import deleteTasks from '../deleteTask/deleteTask.reducer';
import updateTasks from '../updateTask/updateTask.reducer';
const rootReducer = combineReducers({
  addTask,
  getTasks,
  deleteTasks,
  updateTasks,
});

export default rootReducer;
