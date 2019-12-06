import React, {Component} from 'react'
import {
  View,
  Button,
  Text,
  PermissionsAndroid
} from 'react-native'
import {connect} from 'react-redux'
import Geolocation from 'react-native-geolocation-service'
//------------------------------------------------------------------
import {
  fetchAllHuntLocations,
  fetchVisitedHuntLocation,
  fetchDroppingHuntLocations
} from '../store/huntLocations'
import {coordDist} from '../../coordinate-logic'
import {styles} from '../styles'
import ARViewScreen from './AR-view-screen'
import MapViewScreen from './map-view-screen'
//------------------------------------------------------------------
//classifies if component is currently mounted
let mounted = true
//determines default zoom for map
const LATITUDE_DELTA = 0.00922
const LONGITUDE_DELTA = 0.00421

let minSeeDist = 100 //sets minimum distance user needs to be from hunt location marker to see it
let minFindDist = 50 //min distance to select hunt location marker

//------------------------------------------------------------------
class GameScreen extends Component {
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
      won: false,
      gameview: 'AR'
    }
    this.handleFound = this.handleFound.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.backToStart = this.backToStart.bind(this)
    this.requestLocationPermission = this.requestLocationPermission.bind(this)
    this.switchToAR = this.switchToAR.bind(this)
    this.switchToMap = this.switchToMap.bind(this)
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
      ) < minFindDist
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
    Geolocation.getCurrentPosition(
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
  switchToMap() {
    this.setState({gameview: 'MAP'})
  }
  switchToAR() {
    this.setState({gameview: 'AR'})
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
    let huntMarkers = this.props.huntLocations
    let userLoc = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    let region = this.state
    let level = this.state.level
    let huntMarker = this.props.huntLocations[level]
    return (
      <View style={{flex: 1}}>
        {/* Load in AR or Map View */}
        {this.state.gameview === 'AR' ? <ARViewScreen huntMarker={huntMarker} userLoc={userLoc} minSeeDist={minSeeDist} minFindDist={minFindDist} handleFound={this.handleFound} switchToMap={this.switchToMap} /> : <MapViewScreen huntMarker={huntMarker} userLoc={userLoc} minSeeDist={minSeeDist} minFindDist={minFindDist} region={region} handleFound={this.handleFound} switchToAR={this.switchToAR} />}
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
        {/* Riddle Window */}
        {huntMarkers[0] && (
          <View style={styles.riddleWindow}>
            <Text style={styles.riddleText}>
              Riddle:{'\n'}
              {huntMarkers[level].riddle}
              {'\n'}
            </Text>
            {/* Back Button */}
            {this.locationTracking ? (
              <View>
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
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)