/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-9-11
 * Time: 下午8:50
 * Desc:
 */
import React, {Component, PureComponent} from "react";
import {CheckBox, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

export class ListItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object,
    onPressItem: PropTypes.func,
    showCheckbox: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps({item, onPressItem, showCheckbox}) {
    console.log('ListItem',
      this.props.item === item,
      this.props.onPressItem === onPressItem,
      this.props.showCheckbox === showCheckbox,
    )
  }

  render() {
    const {item, onPressItem, showCheckbox} = this.props;

    console.log('ListItem render', item.id);

    return (
      <TouchableOpacity onPress={() => onPressItem(item)}>
        <View style={{
          margin: 10,
          padding: 10,
          backgroundColor: '#dbdbdb'
        }}>
          {showCheckbox && (
            <CheckBox value={item.checked}/>
          )}
          <Text style={{
            color: item.checked ? 'green' : 'red'
          }}>{item.checked ? '√' : '×'}</Text>
          <Text style={{
            color: item.checked ? 'green' : 'red'
          }}>{item.name}</Text>
          <Text style={{
            color: item.checked ? 'green' : 'red'
          }}>{item.sex}</Text>
          <Text style={{
            color: item.checked ? 'green' : 'red'
          }}>{item.age}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create();
