/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-8-24
 * Time: 下午4:27
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, Button, View} from "react-native";

export class Screen2 extends Component {
  static propTypes = {};

  static navigationOptions = ({navigation}) => {
    const {headerRightOnPress} = navigation.state.params || {}
    return {
      headerTitle: '页面2'
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title={'Screen3'}
                onPress={_ => this.props.navigation.navigate('Screen3')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create();
