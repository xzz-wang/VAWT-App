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
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';


// Import Customized Components
import VTStatusPage from './VTStatusPage.js';
import DeviceList from './DeviceList.js';

// Setup the navigation stack
const RootStack = createStackNavigator(
  {
    Home: DeviceList,
    Details: VTStatusPage,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);


// Main Layout
function App () {
  return (
    <AppContainer />
  );
}




//





export default App;
