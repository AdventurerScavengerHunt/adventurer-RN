import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(252,194,47)'
  },
  screenView: {
    top: 50,
    marginHorizontal: 16
  },
  startScreenView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  // HEADER STYLES
  loginHeader: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 36,
    fontFamily: 'roboto',
    fontSize: 48,
    fontWeight: 'bold',
    color: 'rgb(165, 42, 42)',
    textShadowColor: 'black',
    textShadowRadius: 2
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 36,
    fontFamily: 'roboto',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'rgb(165, 42, 42)',
    textShadowColor: 'black',
    textShadowRadius: 2
  },
  // FORM STYLES
  form: {
    padding: 16
  },
  formInput: {
    margin: 2,
    backgroundColor: '#FFCC80',
    borderRadius: 10,
    fontSize: 16
  },
  errorMessageText: {
    margin: 7,
    color: 'red'
  },
  // TEXT BUTTON STYLES (due to v. 0.59.9 button limitations)
  buttonStyle: {
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%',
    height: 42
  },
  startScreenButtonStyle: {
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    width: '100%',
    height: 84
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold'
  },
  startScreenButtonText: {
    fontSize: 24
  },
  tertiaryButtonText: {
    color: 'white',
    textShadowColor: '#E65100',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold'
  },
  primaryButton: {
    backgroundColor: 'rgb(165, 42, 42)'
  },
  secondaryButton: {
    backgroundColor: '#E65100'
  },
  tertiaryButton: {
    backgroundColor: '#FF9800',
    borderColor: '#E65100',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed'
  },
  disabledButton: {
    backgroundColor: '#E0E0E0'
  },
  // LOGIN SCREEN STYLES
  loginScreenView: {
    top: 100,
    marginHorizontal: 16
  },
  buttonColumn: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  // INSTRUCTIONS SCREEN STYLES
  textWindow: {
    padding: 16,
    backgroundColor: '#FFCC80',
    borderColor: '#E65100',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
    color: 'black'
  },
  // GAME SCREEN STYLES
  scoreBlock: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height / 20,
    left: Dimensions.get('window').height / 20
  },
  switchView: {
    position: 'absolute',
    top: Dimensions.get('window').height / 20,
    right: Dimensions.get('window').height / 20
  },
  redBoxText: {
    color: 'goldenrod',
    fontSize: 20
  },
  riddleWindow: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.45,
    left: Dimensions.get('window').width / 7.25,
    width: Dimensions.get('window').width / 1.3,
    padding: 16,
    backgroundColor: '#FFCC80',
    borderColor: '#E65100',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
    color: 'black'
  },
  riddleText: {
    textAlign: 'center',
    color: 'black'
  },
  winMessage: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    position: 'absolute',
    top: Dimensions.get('window').height / 3,
    left: Dimensions.get('window').width / 4,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  // MAP VIEW SCREEN STYLES
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute'
  },
  userLocMarker: {
    backgroundColor: 'blue',
    borderColor: 'lightblue',
    borderWidth: 2,
    padding: 3,
    borderRadius: 100
  },
  huntLocMarkerMap: {
    height: 20,
    width: 20
  },
  huntLocMarkerMapFound: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(218,165,32,0.7)',
    borderColor: 'rgba(218,165,32,0.7)',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 100
  },
  // AR VIEW SCREEN STYLES
  treasureImageView: {
    top: Dimensions.get('window').height / 3,
    left: Dimensions.get('window').width / 3,
    position: 'absolute'
  },
  huntLocMarkerAR: {
    height: 120,
    width: 120
  },
  huntLocMarkerARFound: {
    height: 120,
    width: 120,
    backgroundColor: 'rgba(218,165,32,0.7)',
    borderColor: 'rgba(218,165,32,0.7)',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 100
  }
})
