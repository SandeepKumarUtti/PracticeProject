import {all, fork} from 'redux-saga/effects';
import addTaskWatcherSaga from '../addTask/addTask.saga';
import getTasksWatcherSaga from '../getTasks/getTasks.saga';
import registerUserWatcherSaga from '../register/registerUser.saga';
import loginUserWatcherSaga from '../register/loginUser.saga';
import deleteTaskWatcherSaga from '../deleteTask/deleteTask.saga';
import updateTaskSagaWatcher from '../updateTask/updateTask.saga';

export default function* rootSaga() {
  yield all([...watchers.map(watcher => fork(watcher))]);
}

export const watchers = [
  addTaskWatcherSaga,
  getTasksWatcherSaga,
  deleteTaskWatcherSaga,
  updateTaskSagaWatcher,
  loginUserWatcherSaga,
  registerUserWatcherSaga,
];
