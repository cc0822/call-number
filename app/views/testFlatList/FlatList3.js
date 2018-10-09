/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-9-11
 * Time: 下午8:19
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, FlatList, View, Text, Button} from "react-native";
import data from "./data";
import NavUtils from "../../utils/NavUtils";
import {ListItem} from "./ListItem";
import {PureListItem} from "./PureListItem";

export class FlatList3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.slice(0, 1),
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

  resetData() {
    const id = this.state.data.length;

    this.setState({
      data: [...this.state.data, {
        id,
        name: 'name' + id,
        sex: 'sex' + id,
        age: 'age' + id,
      }]
    })
  }

  updateData() {
    const newData = [...this.state.data];
    newData[0].checked = !newData[0].checked;
    this.setState({data: newData});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title={'showCheckbox'} onPress={() => {
          this.setState({showCheckbox: !this.state.showCheckbox})
        }}/>
        <Button title={'跳转'} onPress={() => {
          NavUtils.navTo('FlatList3')
        }}/>
        <Button title={'resetData'} onPress={() => this.resetData()}/>
        <Button title={'updateData'} onPress={() => this.updateData()}/>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          extraData={this.state.showCheckbox}
          renderItem={({item}) => (
            <PureListItem item={item}
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
