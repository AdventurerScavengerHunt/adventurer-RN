/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import 'react-native-gesture-handler'

import Login from './client/components/login'
import MapScreen from './client/components/map-screen'
import StartScreen from './client/components/start-screen'
import SignUp from './client/components/signup'
import HuntScreen from './client/components/hunts'
import InstructionScreen from './client/components/instructions'

import {Provider} from 'react-redux'
import store from './client/store'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//VIRO
import {ViroARSceneNavigator} from 'react-viro'
import InitialARScene from './client/components/HelloWorldSceneAR'
let ARScene = () => {
  return <ViroARSceneNavigator initialScene={{scene: InitialARScene}} />
}

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    StartScreen: StartScreen,
    HuntScreen: HuntScreen,
    MapScreen: MapScreen,
    InstructionScreen: InstructionScreen
    // ARScene: ARScene
  },
  {
    initialRouteName: 'Login'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
