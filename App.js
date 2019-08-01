/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useScreens } from 'react-native-screens';
import { createStackNavigator, createAppContainer } from "react-navigation";

useScreens();

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.verticalContainer}>
        <View style={styles.centeredContainer}>
          <Text>Hi I'm the FIRST screen</Text>
        </View>
        <View style={styles.flexOne}>
          <TouchableOpacity
            style={[styles.centeredContainer, styles.buttonExtras]}
            onPress={() => this.props.navigation.push('Second')}
          >
            <Text style={styles.buttonText}>Tap me for second screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.verticalContainer}>
        <View style={styles.centeredContainer}>
          <Text>Hi I'm the SECOND screen</Text>
        </View>
        <View style={styles.flexOne}/>
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
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  buttonExtras: {
    backgroundColor: '#3A8EED',
    borderRadius: 20,
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
