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
import { ListRow } from './ListComponent.js';


// One VT Status Detail page.
class VTStatusPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    const {name, status, temp, wind, battery, power} = props.route.params;

    return(
      <SafeAreaView style={vtStatusPageStyle.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={[vtStatusPageStyle.container]} scrollEnabled={true} >

          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Text style={vtStatusPageStyle.heading}>{name}</Text>
          </View>

          <ListRow firstRow='true'>
            <Text style={vtStatusPageStyle.statRowLabel}>Status</Text>
            <Text style={[vtStatusPageStyle.statRowLabel, {textAlign: 'right',}]}>{status}</Text>
          </ListRow>

          <StatRowDisplay leftText='Core Temperature' rightText={temp + '˚C'}/>
          <StatRowDisplay leftText='Wind Speed' rightText={wind + ' m/s'} />
          <StatRowDisplay leftText='Battery Level' rightText={battery + '%'} />
          <StatRowDisplay leftText='Current Power' rightText={power + ' W'}/>

          <ListRow>
            <TouchableOpacity onPress={() => {Alert.alert("Rename Pressed!")}} >
              <Text style={vtStatusPageStyle.buttonStyle}>Rename</Text>
            </TouchableOpacity>
          </ListRow>


        </ScrollView>
      </SafeAreaView>
    );
  }
}

function StatRowDisplay(props) {
  return (
    <ListRow>
      <Text style={vtStatusPageStyle.statRowLabel}>{props.leftText}</Text>
      <Text style={[vtStatusPageStyle.statRowLabel, {textAlign: 'right',}]}>{props.rightText}</Text>
    </ListRow>
  );
}



const vtStatusPageStyle = StyleSheet.create({
  container: {
    flex: 1
  },

  heading: {
    textAlign: 'auto',
    padding: 20,
    fontSize: 32,
  },

  buttonStyle: {
    color: "blue",
    fontSize: 18,
  },

  statRowLabel: {
    flex: 1,
    fontSize: 18,
  },
});

export default VTStatusPage;
