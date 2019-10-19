// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs"; 

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }, Contact: {
    screen: ContactScreen
  }
},{
        initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});