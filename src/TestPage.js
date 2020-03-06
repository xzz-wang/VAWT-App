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
      input: '',
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
          onChangeText={(ip) => this.setState({input: ip})}
          value={this.state.text}
        />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            fetch(this.state.input)
            .then((response) => {
              var obj = JSON.parse(response);
              this.setState({
                status: obj.status,
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
        <Text style={{flex: 1}}>IP Address: {this.state.input}</Text>
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
