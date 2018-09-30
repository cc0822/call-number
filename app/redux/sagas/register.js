/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-4-4
 * Time: 下午4:56
 * Desc: authorize saga
 */
import {takeLatest, put} from "redux-saga/effects";
import {REGIST_FAIL, REGIST_REQUEST, REGIST_SUCCESS} from "../reducers/register";
import {SET_LOGIN_USERNAME} from "../reducers/login";
import {Toast} from "antd-mobile";
import NavUtils from "../../utils/NavUtils";

export const delayed = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 1000)
});

function* REGIST_REQUEST_HANDLE({payload: {username, password}}) {
  try {

    yield delayed();
    yield put(REGIST_SUCCESS(username, password));
    yield put(SET_LOGIN_USERNAME(username));
    NavUtils.navBack();
    Toast.success('注册成功');
  } catch (e) {
    Toast.fail('注册失败');
    yield put(REGIST_FAIL())
  }
};

export default function* register() {
  yield takeLatest(REGIST_REQUEST, REGIST_REQUEST_HANDLE)
};