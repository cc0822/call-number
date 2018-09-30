/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-4-4
 * Time: 下午3:00
 * Desc: react-navigation 整合 redux
 */
import React, {Component} from 'react';
import {addNavigationHelpers, NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import AppRouter from "./routes";
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import {BackHandler} from "react-native";
import NavUtils from "../utils/NavUtils";
import {notAuthScreens} from "../redux/reducers/login";

const addListener = createReduxBoundAddListener("root");

@connect(state => ({
  nav: state.nav,
  loginSuccess: state.login.loginSuccess,
}))
export default class AppWithNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillReceiveProps({loginSuccess}) {
    // 如果用户当前未登录　且当前页面不是登录页面　则直接跳转至登录界面
    if (!loginSuccess && !notAuthScreens.includes(NavUtils.currentRouteName())) {
      NavUtils.navTo('Login')
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <AppRouter navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener
      })}/>
    );
  }
}