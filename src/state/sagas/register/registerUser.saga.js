import {call, takeEvery} from 'redux-saga/effects';
import {REGISTER} from '../../actions/login/loginActions';
import {registerUser} from '../../service/registerUser/registerUser';

export default function* registerUserWatcherSaga() {
  yield takeEvery(REGISTER, registerUserWorker);
}
function* registerUserWorker(action) {
  try {
    const takeResponse = yield call(registerUser, action.payload);
    console.log('success', takeResponse);
  } catch (err) {
    console.log(err);
  }
}
