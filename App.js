/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useScreens } from 'react-native-screens';
import { bold } from 'ansi-colors';

useScreens();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const buttonPressed = () => {};

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hi I'm the FIRST screen</Text>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.push('Second')}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3A8EED', borderRadius: 20, margin: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Tap me for second screen</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Hi I'm the SECOND screen</Text>
        </View>
        <View style={{flex: 1}}/>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
  initialRouteName: "Home",
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
