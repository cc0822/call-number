import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Button, InputItem, List} from "antd-mobile";
import {LOGIN_REQUEST} from "../redux/reducers/login";


// @connect(
//   state => ({
//     username: state.login.username,
//     loading: state.login.loading
//   }),
//   dispatch => ({
//     login: bindActionCreators(LOGIN_REQUEST, dispatch)
//   })
// )
export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

    componentWillMount() {
        console.log('componentWillMount');
        // storage.load({
        //     key: 'macAddress'
        // }).then(mac => {
        //   console.log(mac)
        //     // const beforeSeconds = Math.floor((new Date().getTime() - Number(times)) / 1000);
        //     // if (beforeSeconds >= 0 && beforeSeconds < 60) {
        //     //     showModal('验证码发送过于频繁，请稍候再试');
        //     // } else {
        //     //     this.comClearTimer();
        //     // }
        // }).catch(err => {
        //     // this.comClearTimer();
        // });
    }

  login() {
    // const {username, password} = this.state;
    // this.props.login(username, password)
      storage.load({
          key: 'macAddress'
      }).then(mac => {
          console.log(mac)
          // const beforeSeconds = Math.floor((new Date().getTime() - Number(times)) / 1000);
          // if (beforeSeconds >= 0 && beforeSeconds < 60) {
          //     showModal('验证码发送过于频繁，请稍候再试');
          // } else {
          //     this.comClearTimer();
          // }
      }).catch(err => {
          // this.comClearTimer();
      });
  }

  render() {
    const {username, password} = this.state;
    const {loading} = this.props;

    return (
      <View style={styles.container}>
        <List>
          <InputItem
            value={username}
            onChange={(username) => {
              this.setState({username})
            }}
            placeholder="用户名"
          >
            用户名
          </InputItem>
          <InputItem
            type="password"
            value={password}
            onChange={(password: any) => {
              this.setState({password});
            }}
            placeholder="密码"
          >
            密码
          </InputItem>
        </List>
        <Button style={{marginTop: 50}}
                // loading={loading}
                // disabled={loading || !username || !password}
                onClick={_ => this.login()}>
          登录
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  otherOption: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  }
});
