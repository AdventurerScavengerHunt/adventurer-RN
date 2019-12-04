'use strict'

import React, {Component} from 'react'

import {ViroARScene} from 'react-viro'

import {View} from 'react-native'

export default class ARScreen extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      text: 'Initializing AR...'
    }

    // bind 'this' to functions
    // this._onInitialized = this._onInitialized.bind(this)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ViroARScene></ViroARScene>
      </View>
    )
  }

  //LATER TO USE WITH 3D OBJECTS
  // _onInitialized(state, reason) {
  //   if (state === ViroConstants.TRACKING_NORMAL) {
  //     this.setState({
  //       text: 'Hello World!'
  //     })
  //   } else if (state === ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  // }
}
