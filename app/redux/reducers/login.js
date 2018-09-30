/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-4-8
 * Time: 下午4:51
 * Desc: login reducer
 */
import {createAction, createReducer} from 'redux-act';

//不需要校验登录状态的页面
export const notAuthScreens = ['Login', 'Register']

const initialState = {
  loading: false,
  username: '',
  user: null,
  loginSuccess: false
};

export const SET_LOGIN_USERNAME = createAction('SET_LOGIN_USERNAME', (username) => ({username}));
export const LOGIN_REQUEST = createAction('LOGIN_REQUEST', (username, password) => ({username, password}));
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS', (user) => ({user}));
export const LOGIN_FAIL = createAction('LOGIN_FAIL');
export const LOGOUT = createAction('LOGOUT');

export default createReducer({
  [SET_LOGIN_USERNAME]: (state, {username}) => {
    return {
      ...state,
      username
    };
  },

  [LOGIN_REQUEST]: (state, {username}) => {
    return {
      ...state,
      loading: true,
      username
    };
  },

  [LOGIN_SUCCESS]: (state, user) => {
    return {
      ...state,
      loading: false,
      user,
      loginSuccess: true
    };
  },

  [LOGIN_FAIL]: (state) => {
    return {
      ...state,
      loading: false
    };
  },

  [LOGOUT]: (state) => {
    return {
      ...state,
      user: null,
      loginSuccess: false
    };
  }
}, initialState);