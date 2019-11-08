import { Text, View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});
