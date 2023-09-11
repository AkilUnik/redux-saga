import {
  FETCH_POSTS_REQUEST,
  FETCH_POST_ERROR,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
} from '../ActionTypes/ActionTypes';

export const fetchPostsApiRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsApiPending = () => {
  return {
    type: FETCH_POST_PENDING,
  };
};

export const fetchPostsApiSuccess = data => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostsApiError = err => {
  return {
    type: FETCH_POST_ERROR,
    payload: err,
  };
};
