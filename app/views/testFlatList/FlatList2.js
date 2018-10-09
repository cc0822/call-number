/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-9-11
 * Time: 下午8:19
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, FlatList, View, Text, Button, TouchableOpacity, CheckBox} from "react-native";
import data from "./data";
import {ListItem} from "./ListItem";
import NavUtils from "../../utils/NavUtils";

export class FlatList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showCheckbox: true
    };
  }

  onPressItem = ({id, checked, ...other}) => {
    const newData = [...this.state.data];
    newData.splice(id, 1, {
      id, checked: !checked, ...other
    });
    console.log('newData', newData);
    this.setState({data: newData});
  };

  render() {
    return (
      <View>
        <Button title={'showCheckbox'} onPress={() => {
          this.setState({showCheckbox: !this.state.showCheckbox})
        }}/>
        <Button title={'跳转'} onPress={() => {
          NavUtils.navTo('FlatList2')
        }}/>
        <FlatList data={this.state.data}
                  extraData={this.state.showCheckbox}
                  renderItem={({item}) => (
                    <ListItem item={item}
                              onPressItem={this.onPressItem}
                              showCheckbox={this.state.showCheckbox}
                    />
                  )}
                  keyExtractor={({id}) => String(id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create();
