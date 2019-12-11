import React from 'react'
import {View, Button, Image} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
//------------------------------------------------------------------
import {coordDist} from '../../coordinate-logic'
import {styles} from '../styles'
//------------------------------------------------------------------
const MapViewScreen = props => {
  let huntMarker = props.huntMarker
  let userLoc = props.userLoc
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

  let onRegionChangeComplete = region => {
    props.updateMapPosition(
      region.latitude,
      region.longitude,
      region.latitudeDelta,
      region.longitudeDelta
    )
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          style={styles.mapStyle}
          region={props.region}
          onRegionChangeComplete={onRegionChangeComplete}
        >
          {/* Current user location marker */}
          <Marker coordinate={userLoc}>
            <View style={styles.userLocMarker} />
          </Marker>
          {/* Database hunt location render */}
          {!huntMarker ||
          coordDist(
            userLoc.latitude,
            userLoc.longitude,
            parseFloat(huntMarker.latitude),
            parseFloat(huntMarker.longitude)
          ) > minSeeDist ? null : (
            <Marker
              key={huntMarker.id}
              coordinate={{
                latitude: parseFloat(huntMarker.latitude),
                longitude: parseFloat(huntMarker.longitude)
              }}
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
                    ? styles.huntLocMarkerMapFound
                    : styles.huntLocMarkerMap
                ]}
              />
            </Marker>
          )}
        </MapView>
      </View>
      {/* Switch View Button */}
      <View style={styles.switchView}>
        <Button title="AR" onPress={() => props.switchToAR()} />
      </View>
    </View>
  )
}

export default MapViewScreen
