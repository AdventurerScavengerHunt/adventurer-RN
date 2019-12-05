import React from 'react'
import {View, Button, TouchableHighlight, Image} from 'react-native'
//------------------------------------------------------------------
import {coordDist} from '../../coordinate-logic'
import {styles} from '../styles'
//------------------------------------------------------------------
//VIRO
import {ViroARSceneNavigator} from 'react-viro'
import InitialARScene from './init-AR-screen'
//------------------------------------------------------------------
const ARViewScreen = props => {
  let userLoc = props.userLoc
  let huntMarker = props.huntMarker
  let minSeeDist = props.minSeeDist
  let minFindDist = props.minFindDist
  let distanceToHuntMarker
  if (huntMarker) {
    distanceToHuntMarker = coordDist(
      userLoc.latitude,
      userLoc.longitude,
      parseFloat(huntMarker.latitude),
      parseFloat(huntMarker.longitude)
    )
  }

  return (
    <View style={{flex: 1}}>
      <ViroARSceneNavigator initialScene={{scene: InitialARScene}} />
      {/* Database hunt location render */}
      {!huntMarker || distanceToHuntMarker > minSeeDist ? null : (
        <View style={styles.treasureImageView}>
          <TouchableHighlight
            onPress={() =>
              props.handleFound(
                parseFloat(huntMarker.latitude),
                parseFloat(huntMarker.longitude)
              )
            }
          >
            <Image
              source={{
                uri:
                  'http://www.i2clipart.com/cliparts/3/9/a/2/clipart-treasure-chest-39a2.png'
              }}
              style={[
                distanceToHuntMarker <= minFindDist
                  ? styles.huntLocMarkerARFound
                  : styles.huntLocMarkerAR
              ]}
            />
          </TouchableHighlight>
        </View>
      )}
      {/* Switch View Button */}
      <View style={styles.switchView}>
        <Button title="MAP" onPress={() => props.switchToMap()} />
      </View>
    </View>
  )
}

export default ARViewScreen
