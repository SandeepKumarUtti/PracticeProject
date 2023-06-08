import {combineReducers} from 'redux';
import addTask from '../addTask/addTask.reducer';
import getTasks from '../getTasks/getTasks.reducer';
const rootReducer = combineReducers({
  addTask,
  getTasks,
});

export default rootReducer;
