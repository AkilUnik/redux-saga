import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/postSaga';
import postReducer from '../Reducers/postReducer';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
const store2 = createStore(postReducer, applyMiddleware(sagaMiddleware));

// Then run the saga
sagaMiddleware.run(rootSaga);
export default store2;
