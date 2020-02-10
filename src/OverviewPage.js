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

export default function OverviewPage({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
          style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch'}}
          onPress={() => navigation.openDrawer()}>
        <Text style={{fontSize: 18, flex: 1, margin: 100}}>
          Hi there this is just a overview page.
          {"\n\n"}
          Please click anywhere or swipe right from left edge to open the drawer.
        </Text>
        <View style={{flex: 1, minHeight: 80}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
