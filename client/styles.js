import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  // MAP SCREEN STYLES
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  huntLocMarker: {
    height: 120,
    width: 120
  },
  treasureImageView: {
    top: Dimensions.get('window').height / 3,
    left: Dimensions.get('window').width / 3,
    position: 'absolute'
  },
  scoreBlock: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height / 20,
    left: Dimensions.get('window').height / 20
  },
  redBoxText: {
    color: 'goldenrod',
    fontSize: 20
  },
  textWindow: {
    position: 'absolute',
    top: '80%',
    alignItems: 'center',
    backgroundColor: 'rgb(153, 204, 255)',
    borderColor: 'rgb(0, 102, 255)',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    margin: 5
  },
  riddleWindow: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.5,
    left: Dimensions.get('window').width / 4,
    alignItems: 'center',
    backgroundColor: 'rgb(153, 204, 255)',
    borderColor: 'rgb(0, 102, 255)',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20
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
  //LOGIN SCREEN STYLES
  errorMessageText: {
    color: 'red'
  },
  aboveError: {
    margin: 7
  },
  buttonRow: {flexDirection: 'row', justifyContent: 'space-evenly'},
  signUpText: {
    color: 'gray',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  //HEADER STYLES
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
    alignSelf: 'center',
    fontFamily: 'monospace',
    textShadowColor: 'black',
    textShadowRadius: 1
  },
  aboveHeader: {
    margin: 30
  },
  //FORM STYLES
  form: {
    backgroundColor: 'rgb(153, 204, 255)',
    borderColor: 'rgb(0, 102, 255)',
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    margin: 10
  },
  formInput: {
    backgroundColor: 'rgb(230, 242, 255)',
    borderColor: 'rgb(220,220,220)',
    borderWidth: 2,
    borderRadius: 15
  }
})
