import {CheckBox, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {pure} from "recompose";

/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-9-12
 * Time: 上午10:25
 * Desc:
 */
function ListItem({item, onPressItem, showCheckbox}) {

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
  )
}

export const PureListItem = pure(ListItem);