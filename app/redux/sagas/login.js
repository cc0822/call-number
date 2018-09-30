/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-4-4
 * Time: 下午4:56
 * Desc: authorize saga
 */
import {takeLatest, put, select} from "redux-saga/effects";
import AV from "leancloud-storage";
import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "../reducers/login";
import {Toast} from "antd-mobile";
import NavUtils from "../../utils/NavUtils";
import {delayed} from "./register";

function* LOGIN_REQUEST_HANDLE({payload: {username, password}}) {
  try {
    yield delayed();
    const register = yield select(state => state.register);
    if (username !== register.username) {
      throw '用户名不正确'
    }
    if (password !== register.password) {
      throw '密码不正确'
    }
    const user = {username, password};
    yield put(LOGIN_SUCCESS(user));
    Toast.success('登陆成功', 0.5);
    setTimeout(_ => NavUtils.navBack(), 500)
  } catch (e) {
    Toast.fail(e);
    yield put(LOGIN_FAIL())
  }
};

export default function* login() {
  yield takeLatest(LOGIN_REQUEST, LOGIN_REQUEST_HANDLE)
};