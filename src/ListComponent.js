/**
 *  Some generic component related to the list items used in the app.
 *  Copyright @ VAWT 2020
 *  Author: Xuezheng Wang
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

export function ListRow(props) {

  //const children = props.children;
  const children = props.children;

  if (props.firstRow != 'true') {
    return (
      <View style={generalListStyle.listRow}>
        {children}
      </View>
    );
  } else {
    return (
      <View style={[generalListStyle.listRow, {borderTopWidth: 0.0,}]}>
        {children}
      </View>
    )
  }
}



const generalListStyle = StyleSheet.create({
  listRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 0.3,

    fontSize: 24,
  },
});
