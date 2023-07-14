import {call, takeEvery} from 'redux-saga/effects';
import {LOGIN} from '../../actions/login/loginActions';
import {loginUser} from '../../service/registerUser/registerUser';
import {navigate} from '../../../utilities/navigation/navigation';

export default function* loginUserWatcherSaga() {
  yield takeEvery(LOGIN, loginUserWorker);
}
function* loginUserWorker(action) {
  try {
    const taskResponse = yield call(loginUser, action.payload);
    console.log('user token', taskResponse);
    yield call(navigate, 'Home');
  } catch (err) {
    console.log(err);
  }
}
