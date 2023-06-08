import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_TASK, GOT_TASK} from '../../actions/taskActions/taskActions';
import taskService from '../../service/tasks/tasksApi';

export default function* getTasksWatcherSaga() {
  yield takeEvery(GET_TASK, fetchTasks);
}
function* fetchTasks() {
  try {
    const taskResponse = yield call(taskService.getAll);
    yield put({type: GOT_TASK, payload: taskResponse});
  } catch (err) {
    console.log(err);
  }
}
