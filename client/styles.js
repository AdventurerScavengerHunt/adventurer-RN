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
    marginHorizontal: 16,
  },
  // HEADER STYLES
  loginHeader: {
    fontSize: 48,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    fontFamily: 'roboto',
    color: 'rgb(165, 42, 42)',
    textShadowColor: 'black',
    textShadowRadius: 2
  },
  header: {
    marginBottom: 30,
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'monospace',
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
    backgroundColor: '#FAFAFA',
    borderColor: '#E65100',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 16
  },
  errorMessageText: {
    margin: 7,
    color: 'red'
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
  buttonStyle: {
    margin: 8,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10
  },
  loginButton: {
    backgroundColor: 'rgb(165, 42, 42)',
    width: 72,
    height: 42,
  },
  signUpButton: {
    backgroundColor: '#E65100',
    width: 72,
    height: 42
  },
  createAccountButton: {
    backgroundColor: 'rgb(165, 42, 42)',
    width: 186,
    height: 42
  },
  // INSTRUCTIONS SCREEN STYLES
  textWindow: {
    padding: 16,
    backgroundColor: '#FAFAFA',
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
    alignItems: 'center',
    backgroundColor: 'rgb(153, 204, 255)',
    borderColor: 'rgb(0, 102, 255)',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10
  },
  riddleText: {
    textAlign: 'center'
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
