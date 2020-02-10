/**
 *  Author: Xuezheng Wang
 *  All rights reserved
 */


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ListRow} from "./ListComponent.js";

class DeviceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlatList
        data={sampleData}
        renderItem={renderListItem.bind(this)}
        keyExtractor={(item) => item.name}
        style={deviceListStyle.flatListStyle}
      />
    );
  }

}

function renderListItem({item, index, separators}) {
  const firstRow = index == 0 ? 'true' : 'false';

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <ListRow firstRow={firstRow}>
        <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('Details', item);}}
            style={deviceListStyle.touchBoxStyle} >
          <View style={deviceListStyle.thumbnailStyle} />
          <Text style={deviceListStyle.buttonTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      </ListRow>
    </>
  );

}


const sampleData = [
  {
    name: 'Just A Turbine',
    status: 'normal',
    time: null,
    temp: 26.01,
    wind: 3.4,
    battery: 0.94,
    power: 35.4,
  },
  {
    name: 'Another Turbine',
    status: 'dead',
    time: null,
    temp: 30.01,
    wind: 6.4,
    battery: 0.0,
    power: 0.0,
  },
  {
    name: 'We won\'t have three turbine',
    status: 'dead',
    time: null,
    temp: 30.01,
    wind: 6.4,
    battery: 0.0,
    power: 0.0,
  },
];

const deviceListStyle = StyleSheet.create({
  flatListStyle: {
    backgroundColor: "#FFFFFF",
  },

  buttonTextStyle: {
    fontSize: 20,
    margin: 16,
    flex: 1,
  },

  touchBoxStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  thumbnailStyle: {
    height: 60,
    width: 60,
    backgroundColor: 'skyblue',
  },


});


export default DeviceList;
