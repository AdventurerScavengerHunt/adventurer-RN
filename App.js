/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler'

import Login from './javascript/components/login';
import MapScreen from './javascript/components/map-screen';
import StartScreen from './javascript/components/start-screen';
import SignUp from './javascript/components/signup';
import HuntScreen from './javascript/components/hunts';


import { Provider } from 'react-redux';
import store from './javascript/store';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'SHAKE ME,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    StartScreen: StartScreen,
    HuntScreen: HuntScreen,
    MapScreen: MapScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});