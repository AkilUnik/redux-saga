import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_POSTS_REQUEST} from '../ActionTypes/ActionTypes';
import axios from 'axios';
import {
  fetchPostsApiError,
  fetchPostsApiPending,
  fetchPostsApiSuccess,
} from '../Actions/Action';
const fetchPostsApi = async () => {
  console.log('calling post api');
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

function* fetchPosts() {
  console.log('fetchPost called');
  try {
    yield put(fetchPostsApiPending());
    const data = yield call(fetchPostsApi);
    // console.log('post data ', data);
    yield put(fetchPostsApiSuccess(data));
  } catch (err) {
    yield put(fetchPostsApiError(err));
  }
}

function* watchFetchPost() {
  console.log('watcher post saga called');
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default function* rootSaga() {
  console.log('root saga is called');
  yield watchFetchPost();
}
