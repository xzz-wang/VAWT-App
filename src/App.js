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
import 'react-native-gesture-handler';


// Navigation 4.x
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// Navigation 5.x
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Import Customized Components
import VTStatusPage from './VTStatusPage.js';
import DeviceList from './DeviceList.js';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AccentColor = 'green';

// Main Layout
function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="ListView"
          component={ListView}
          options={{
            title: 'List of Devices',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ListView() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DeviceList}
        options={{
          title: 'Device List',
          headerStyle: {
            backgroundColor: AccentColor,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Details"
        component={VTStatusPage}
        options={{
          headerStyle: {
            backgroundColor: AccentColor,
          }}
        }
      />
    </Stack.Navigator>
  );
}


// // Setup the navigation stack - 4.x
// const RootStack = createStackNavigator(
//   {
//     Home: DeviceList,
//     Details: VTStatusPage,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
//
// const AppContainer = createAppContainer(RootStack);








export default App;
