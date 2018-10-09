/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-9-11
 * Time: 下午8:19
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, FlatList, View, Text, TouchableOpacity, Button, CheckBox} from "react-native";
import data from "./data";

export class FlatList1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showCheckbox: false
    };
  }

  onPressItem({id, checked, ...other}) {
    const newData = [...this.state.data];
    newData.splice(id, 1, {
      id, checked: !checked, ...other
    });
    console.log('newData', newData);
    this.setState({data: newData});
  };

  renderItem = ({item}) => {
    console.log('renderItem', item.id);
    return (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <View style={{
          margin: 10,
          padding: 10,
          backgroundColor: '#dbdbdb'
        }}>
          {this.state.showCheckbox && (
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
    )
  }

  render() {
    return (
      <View>
        <Button title={'showCheckbox'} onPress={() => {
          this.setState({showCheckbox: !this.state.showCheckbox})
        }}/>
        <FlatList data={this.state.data}
                  extraData={this.state.showCheckbox}
                  renderItem={this.renderItem}
                  keyExtractor={({id}) => String(id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create();
