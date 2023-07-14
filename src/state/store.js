import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer/root.reducer';
import rootSaga from './sagas/rootSaga/root.saga';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
