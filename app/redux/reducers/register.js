/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-4-4
 * Time: 下午4:54
 * Desc: authorize reducer
 */
import {createAction, createReducer} from 'redux-act';

const initialState = {
  loading: false,
  username: null,
  password: null
};

export const REGIST_REQUEST = createAction('REGIST_REQUEST', (username, password) => ({username, password}));
export const REGIST_SUCCESS = createAction('REGIST_SUCCESS', (username, password) => ({username, password}));
export const REGIST_FAIL = createAction('REGIST_FAIL');

export default createReducer({
  [REGIST_REQUEST]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },

  [REGIST_SUCCESS]: (state, {username, password}) => {
    return {
      ...state,
      loading: false,
      username,
      password
    };
  },

  [REGIST_FAIL]: (state) => {
    return {
      ...state,
      loading: false
    };
  }
}, initialState);