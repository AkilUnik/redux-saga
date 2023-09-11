import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../Reducers/postReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/postSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: postReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);
export default store;
