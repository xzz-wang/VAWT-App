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

class DeviceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlatList
        data={sampleData}
        renderItem={renderListItem.bind(this)}
        keyExtractor={item => item.id}
      />
    );
  }

}

function renderListItem({item}) {
  return (<Button
        title={item.name}
        onPress={() => {this.props.navigation.navigate('Details', item);}}
      />);

}

const sampleData = [{
    id: 1,
    name: 'Just A Turbine',
    status: 'normal',
    time: null,
    temp: 26.01,
    wind: 3.4,
    battery: 0.94,
    power: 35.4,
  },
  {
    id: 2,
    name: 'Another Turbine',
    status: 'dead',
    time: null,
    temp: 30.01,
    wind: 6.4,
    battery: 0.0,
    power: 0.0,
}];

export const generalListStyle = StyleSheet.create({
  listRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 0.3,

    fontSize: 24,
  },

  listRowLabel: {
    flex: 1,

    fontSize: 18,
  },
});

export default DeviceList;
