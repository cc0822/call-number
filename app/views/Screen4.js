/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-8-24
 * Time: 下午4:29
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

export class Screen4 extends Component {
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
      <Text>Screen4</Text>
    );
  }
}

const styles = StyleSheet.create();
