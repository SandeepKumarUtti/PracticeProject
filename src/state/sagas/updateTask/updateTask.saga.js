import {call, put, takeEvery} from 'redux-saga/effects';
import {UPDATED_TASK, UPDATE_TASK} from '../../actions/taskActions/taskActions';
import taskService from '../../service/tasks/tasksApi';
export default function* updateTaskSagaWatcher() {
  yield takeEvery(UPDATE_TASK, updateTaskSaga);
}
function* updateTaskSaga(action) {
  try {
    const takeResponse = yield call(taskService.update, action.payload);
    yield put({type: UPDATED_TASK, payload: takeResponse});
  } catch (err) {
    console.log(err);
  }
}
