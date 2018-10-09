/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-8-24
 * Time: 下午4:29
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, Button} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

export class Screen3 extends Component {
  static propTypes = {};

  static navigationOptions = ({navigation}) => {
    const {headerRightOnPress} = navigation.state.params || {}
    return {
      headerTitle: '标题'
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Button title={'Screen4'}
              onPress={_ => this.props.navigation.navigate('Screen4')}
      />
    );
  }
}

const styles = StyleSheet.create();
