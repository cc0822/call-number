import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LOGOUT} from "../redux/reducers/login";
import DeviceInfo from 'react-native-device-info';

@connect(
  state => ({}),
  dispatch => ({
    logout: bindActionCreators(LOGOUT, dispatch)
  })
)

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        macAddress: null
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
      DeviceInfo.getMACAddress().then(mac => {
          storage.save({
              key: 'macAddress',
              data: mac
          });
          this.setState({
              macAddress: mac
          })
      })
  }

  componentDidMount() {
    console.log('componentDidMount');
    //['willBlur', 'willFocus', 'didFocus', 'didBlur'].forEach(event => {
      // this.props.navigation.addListener(
      //   event,
      //   payload => {
      //     console.log(event, payload)
      //   }
      // );
    //});
  }

  render() {
      const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title={'登录'}
                onPress={() => navigate('Login')}
        />
          <Text>macAddress:{this.state.macAddress}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create();
