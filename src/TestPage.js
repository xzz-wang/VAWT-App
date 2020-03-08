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
  TextInput,
} from 'react-native';

import {ListRow} from "./ListComponent.js";

export default class TestPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ip: 'http://128.54.53.100',
      name: "N/A",
      status: "N/A",
      temp: "N/A",
      wind: "N/A",
      battery: "N/A",
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'flex-start', flexDirection: 'column', margin: 40,}}>
        <TextInput
          style={{height: 40, width: 300, flex: 1}}
          placeholder="Type here to input IPAddress!"
          onChangeText={(ip) => this.setState({ip: ip})}
          value={this.state.ip}
        />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            fetch(this.state.ip)
            .then((response) => response.json())
            .then((data) => {
              this.setState({
                name: data.name,
                status: data.status,
                temp: data.temp,
                wind: data.wind,
                battery: data.battery,
              });
            })
            .catch((error) => {
              this.setState({name: 'error'});
              console.error(error);
            });
          }}
          >
          <Text style={{flex: 1, color: 'blue'}}>Fetch Data</Text>
        </TouchableOpacity>
        <Text style={{flex: 1}}>IP Address: {this.state.ip}</Text>
        <Text style={{flex: 1}}>name: {this.state.name}</Text>
        <Text style={{flex: 1}}>status: {this.state.status}</Text>
        <Text style={{flex: 1}}>temp: {this.state.temp}</Text>
        <Text style={{flex: 1}}>wind: {this.state.wind}</Text>
        <Text style={{flex: 1}}>battery: {this.state.battery}</Text>

      </SafeAreaView>
    );
  }
}

function fetchData(ipAddress) {
}
