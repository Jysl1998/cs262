import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AddItem from './components/AddItem';
import List from './components/List';
import Home from './components/Home';

const AppNavigator = createStackNavigator({
    Home,
    AddItem,
    List
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
