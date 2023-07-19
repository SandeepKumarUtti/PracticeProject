import {call, put, takeEvery} from 'redux-saga/effects';
import {DELETED_TASK, DELETE_TASK} from '../../actions/taskActions/taskActions';
import taskService from '../../service/tasks/tasksApi';

export default function* deleteTaskWatcherSaga() {
  yield takeEvery(DELETE_TASK, deleteTaskWorker);
}
function* deleteTaskWorker(action) {
  try {
    console.log('action', action);
    const taskResponse = yield call(taskService.delete, action.payload.id);
    console.log('taskResponse', taskResponse);
    yield put({type: DELETED_TASK, payload: action.payload});
  } catch (err) {
    console.log('error', err);
  }
}
