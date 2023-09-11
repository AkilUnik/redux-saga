import {
  FETCH_POSTS_REQUEST,
  FETCH_POST_ERROR,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
} from '../ActionTypes/ActionTypes';

const initialState = {
  posts: [],
  error: null,
  loading: false,
};

const postReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_POST_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_POST_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    }
    case FETCH_POST_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
  }
};

export default postReducer;
