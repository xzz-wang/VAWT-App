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


// One VT Status Detail page.
class VTStatusPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { navigation } = this.props;
    const status = navigation.getParam('status', 'N/A');
    const temp = navigation.getParam('temp', 'N/A');
    const wind = navigation.getParam('wind', 'N/A');
    const battery = navigation.getParam('battery', 'N/A');
    const power = navigation.getParam('power', 'N/A');

    return(
      <SafeAreaView style={vtStatusPageStyle.container}>
        <ScrollView style={[vtStatusPageStyle.container]} scrollEnabled={true} >

          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Text style={vtStatusPageStyle.heading}>Just A Random Turbine</Text>
            <Button title="R" ></Button>
          </View>

          <StatRow firstRow='true'>
            <Text style={vtStatusPageStyle.statRowLabel}>Status</Text>
            <Text style={[vtStatusPageStyle.statRowLabel, {textAlign: 'right',}]}>{status}</Text>
          </StatRow>

          <StatRowDisplay leftText='Core Temperature' rightText={temp + '˚C'}/>
          <StatRowDisplay leftText='Wind Speed' rightText={wind + ' m/s'} />
          <StatRowDisplay leftText='Battery Level' rightText={battery + '%'} />
          <StatRowDisplay leftText='Current Power' rightText='35.4 W' />

          <StatRow>
            <TouchableOpacity onPress={() => {Alert.alert("Rename Pressed!")}} >
              <Text style={vtStatusPageStyle.buttonStyle}>Rename</Text>
            </TouchableOpacity>
          </StatRow>


        </ScrollView>
      </SafeAreaView>
    );
  }
}

function StatRowDisplay(props) {
  return (
    <StatRow>
      <Text style={vtStatusPageStyle.statRowLabel}>{props.leftText}</Text>
      <Text style={[vtStatusPageStyle.statRowLabel, {textAlign: 'right',}]}>{props.rightText}</Text>
    </StatRow>
  );
}


function StatRow(props) {

  //const children = props.children;
  const children = props.children;

  if (props.firstRow != 'true') {
    return (
      <View style={vtStatusPageStyle.statRow}>
        {children}
      </View>
    );
  } else {
    return (
      <View style={[vtStatusPageStyle.statRow, {borderTopWidth: 0.0,}]}>
        {children}
      </View>
    )
  }
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

  statRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 0.3,

    fontSize: 24,
  },

  statRowLabel: {
    flex: 1,

    fontSize: 18,
  },

  buttonStyle: {
    color: "blue",
    fontSize: 18,
  },
});

export default VTStatusPage;
