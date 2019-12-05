'use strict'

import React, {Component} from 'react'

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroNode,
  ViroSurface
} from 'react-viro'

import {connect} from 'react-redux'

import {fetchAllHuntLocations} from '../store/huntLocations'

import {View} from 'react-native'

//import * as ModelData from '../model/ModelItems'

class ARScreen extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      level: 0
    }

    // bind 'this' to functions
    // this._onInitialized = this._onInitialized.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchHuntLocations(this.props.user.id)
    let currLevel = this.props.huntLocations.filter(
      loc => loc.huntLocation.visited
    ).length

    this.setState({
      level: currLevel
    })
  }

  _onClick() {
    console.log("CLICKITY")
    this.props.handleFound(
      parseFloat(this.props.huntLocations[this.state.level].latitude),
      parseFloat(this.props.huntLocations[this.state.level].longitude)
    )
  }

  // _onInitialized(state, reason) {
  //   if (state === ViroConstants.TRACKING_NORMAL) {
  //     this.setState({
  //       text: 'Hello World!'
  //     })
  //   } else if (state === ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  // }

  render() {
    //let modelItem = ModelData.getModelArray()[0]
    return (
      <View style={{flex: 1}}>
        <ViroARScene>
          <ViroAmbientLight color="#ffffff" intensity={200} />
          {this.props.arScreen.showObject && (
            <ViroNode
              position={[0, -1, -1]}
              dragType="FixedToWorld"
              //onDrag={()=>{}}

            >
              <ViroSpotLight
                innerAngle={5}
                outerAngle={25}
                direction={[0, -1, 0]}
                position={[0, 5, 0]}
                color="#ffffff"
                castsShadow={true}
                shadowMapSize={2048}
                shadowNearZ={2}
                shadowFarZ={7}
                shadowOpacity={0.7}
              />

              <Viro3DObject
                source={require('../res/emoji_smile/emoji_smile.vrx')}
                resources={[
                  require('../res/emoji_smile/emoji_smile_diffuse.png'),
                  require('../res/emoji_smile/emoji_smile_normal.png'),
                  require('../res/emoji_smile/emoji_smile_specular.png')
                ]}
                position={[0, 1, -2]}
                scale={[0.3, 0.3, 0.3]}
                type="VRX"
                onClick={() => {this._onClick()}}
              />

              <ViroSurface
                rotation={[-90, 0, 0]}
                position={[0, -0.001, 0]}
                width={2.5}
                height={2.5}
                arShadowReceiver={true}
              />
            </ViroNode>
          )}
        </ViroARScene>
      </View>
    )
  }
}
//-----------------------------------------------------------
const mapStateToProps = state => {
  return {
    arScreen: state.arScreen,
    user: state.user,
    huntLocations: state.huntLocations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHuntLocations: userId => dispatch(fetchAllHuntLocations(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ARScreen)


