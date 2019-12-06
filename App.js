/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'

import 'react-native-gesture-handler'

import Login from './client/components/login'
import GameScreen from './client/components/game-screen'
import StartScreen from './client/components/start-screen'
import SignUp from './client/components/signup'
import HuntScreen from './client/components/hunts'
import InstructionScreen from './client/components/instructions'

import {Provider} from 'react-redux'
import store from './client/store'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

console.disableYellowBox = true

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    StartScreen: StartScreen,
    HuntScreen: HuntScreen,
    GameScreen: GameScreen,
    InstructionScreen: InstructionScreen
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
