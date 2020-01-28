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
} from 'react-native';

class DeviceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Button
        title="Hi"
        onPress={() => {this.props.navigation.navigate('Details', getSampleData());}}
      />
    );
  }

}

function getSampleData() {
  return ({
    status: 'normal',
    time: null,
    temp: 26.01,
    wind: 3.4,
    battery: 0.94,
    power: 35.4,
  });
}


export default DeviceList;
