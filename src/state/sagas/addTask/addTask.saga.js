import {put, call, takeEvery} from 'redux-saga/effects';
import {ADDED_TASK, ADD_TASK} from '../../actions/taskActions/taskActions';
import taskService from '../../service/tasks/tasksApi';

export default function* addTaskWatcherSaga() {
  yield takeEvery(ADD_TASK, addTaskWorker);
}
function* addTaskWorker(action) {
  try {
    const taskResponse = yield call(taskService.add, action.payload);
    yield put({type: ADDED_TASK, payload: taskResponse});
  } catch (err) {
    console.log(err);
  }
}
