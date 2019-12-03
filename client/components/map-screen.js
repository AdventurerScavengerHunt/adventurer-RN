import React, {Component} from 'react'
import {
  View,
  Button,
  Text,
  SafeAreaView,
  PermissionsAndroid
} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import {connect} from 'react-redux'
//------------------------------------------------------------------
import {
  fetchAllHuntLocations,
  fetchVisitedHuntLocation,
  fetchDroppingHuntLocations
} from '../store/huntLocations'
import {coordDist} from '../../coordinate-logic'
import {styles} from '../styles'
//------------------------------------------------------------------
//classifies if component is currently mounted
let mounted = true
//determines default zoom for map
const LATITUDE_DELTA = 0.00922
const LONGITUDE_DELTA = 0.00421
//------------------------------------------------------------------
class MapScreen extends Component {
  //------------------------------------------------------------------
  static navigationOptions = {
    headerLeft: null
  }
  constructor() {
    super()
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      level: 0,
      score: 0,
      won: false
    }
    this.handleFound = this.handleFound.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.backToStart = this.backToStart.bind(this)
    this.requestLocationPermission = this.requestLocationPermission.bind(this)
  }
  //----------------FUNCTIONS--------------------------------------
  async componentDidMount() {
    mounted = true
    this.requestLocationPermission()
    //-------------------HUNTS---------------------------------------------
    await this.props.fetchHuntLocations(this.props.user.id)
    let initialScore = this.props.huntLocations.filter(
      loc => loc.huntLocation.visited
    ).length

    this.setState({
      score: initialScore,
      level: initialScore
    })
  }
  //------------------------------------------------------------------
  async handleFound(targetLat, targetLong) {
    //variable declarations
    let huntLocs = this.props.huntLocations
    let huntLocId = huntLocs[this.state.level].huntLocation.locationId
    let withinDistance =
      coordDist(
        this.state.latitude,
        this.state.longitude,
        targetLat,
        targetLong
      ) < 100
    let levelsToComplete = this.props.huntLocations.length - this.state.level

    //conditional logic
    if (withinDistance) {
      levelsToComplete--
      //update visited to "true" for this location
      await this.props.fetchVisitLocation(this.props.user.id, huntLocId)
      //increment score
      this.setState(prevState => {
        return {score: prevState.score + 1}
      })

      if (levelsToComplete > 0) {
        //Increment next level
        this.setState(prevState => {
          return {level: prevState.level + 1}
        })
      } else {
        this.setState({won: true})
        await this.props.fetchDropLocations(this.props.user.id)
        setTimeout(() => {
          this.props.navigate('StartScreen')
        }, 4000)
      }
    }
  }
  //------------------------------------------------------------------
  async requestLocationPermission() {
    //-------------------LOCATION PERMISSIONS-------------------------------
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'AdventurAR App Location Permission',
          message:
            'AdventurAR App needs access to your location to run the scavenger hunts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      )
      console.log('Permission status: ', granted)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //-------SET LOCATION TRACKING------------------------------------------
        this.locationTracking = setInterval(this.updatePosition, 2000)
      }
    } catch (err) {
      console.warn(err)
    }
  }
  //------------------------------------------------------------------
  updatePosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        if (mounted) {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        }
      },
      error => {
        console.log('update position error')
        console.log('error: ', error)
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 0}
    )
  }
  //------------------------------------------------------------------
  backToStart() {
    this.props.navigate('StartScreen')
  }
  //------------------------------------------------------------------
  componentWillUnmount() {
    mounted = false
    clearInterval(this.locationTracking)
  }
  //------------------------------------------------------------------
  render() {
    let huntMarker = this.props.huntLocations[this.state.score]
    let huntMarkers = this.props.huntLocations
    let userLoc = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    let huntMarkerCoords = {
      latitude: parseFloat(huntMarker.latitude),
      longitude: parseFloat(huntMarker.longitude)
    }
    let level = this.state.level
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <MapView style={styles.mapStyle} region={this.state}>
            {/* Current user location marker */}
            <Marker coordinate={userLoc}>
              <View style={styles.userLocMarker} />
            </Marker>
            {/* Testing database hunt location marker */}
            {!huntMarker ||
            coordDist(
              userLoc.latitude,
              userLoc.longitude,
              huntMarkerCoords.latitude,
              huntMarkerCoords.longitude
            ) > 100 ? null : (
              <Marker
                key={huntMarker.id}
                coordinate={huntMarkerCoords}
                image={{
                  uri:
                    'http://www.i2clipart.com/cliparts/3/9/a/2/clipart-treasure-chest-39a2.png'
                }}
              >
                <View style={styles.huntLocMarker} />
              </Marker>
            )}
          </MapView>
        </View>
        {/* Score block based on level */}
        {huntMarkers[0] && (
          <View style={styles.scoreBlock}>
            <Text style={styles.redBoxText}>Score</Text>
            <Text style={styles.redBoxText}>
              {this.state.score} / {huntMarkers.length}
            </Text>
          </View>
        )}
        {this.state.won && (
          <View style={styles.winMessage}>
            <Text style={styles.redBoxText}>YOU WIN!!!!!!!!!</Text>
          </View>
        )}
        {huntMarkers[0] && (
          <View style={styles.textWindow}>
            <Text>{huntMarkers[level].riddle}</Text>
            {/* TESTING PARAMETERS */}
            <Text>
              TARGET: {huntMarkers[level].latitude} :{' '}
              {huntMarkers[level].longitude}
            </Text>
            <Text>
              CURR: {this.state.latitude} : {this.state.longitude}
            </Text>
            {coordDist(
              this.state.latitude,
              this.state.longitude,
              huntMarkers[level].latitude,
              huntMarkers[level].longitude
            ) < 100 ? (
              <Text>Ya found me!</Text>
            ) : (
              <Text>Keep searchin'!</Text>
            )}
            {/* Button Selections */}
            {this.locationTracking ? (
              <View>
                <Button
                  title="FOUND"
                  onPress={() =>
                    this.handleFound(
                      huntMarkers[level].latitude,
                      huntMarkers[level].longitude
                    )
                  }
                />
                <Button
                  title="BACK TO START SCREEN"
                  onPress={() => this.backToStart()}
                />
              </View>
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
        )}
      </SafeAreaView>
    )
  }
}
//------------------------------------------------------------------
const mapStateToProps = (state, ownProps) => {
  return {
    huntLocations: state.huntLocations,
    user: state.user,
    navigate: ownProps.navigation.navigate
  }
}
//------------------------------------------------------------------
const mapDispatchToProps = dispatch => {
  return {
    fetchHuntLocations: userId => dispatch(fetchAllHuntLocations(userId)),
    fetchVisitLocation: (userId, locationId) =>
      dispatch(fetchVisitedHuntLocation(userId, locationId)),
    fetchDropLocations: userId => dispatch(fetchDroppingHuntLocations(userId))
  }
}
//------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
