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
    height: Dimensions.get('window').height
  },
  userLocMarker: {
    backgroundColor: 'blue',
    borderColor: 'lightblue',
    borderWidth: 2,
    padding: 3,
    borderRadius: 100
  },
  huntLocMarker: {
    height: 20,
    width: 20
  },
  huntLocTestMarker: {
    backgroundColor: 'red',
    borderColor: 'pink',
    borderWidth: 2,
    padding: 5,
    borderRadius: 50
  },
  scoreBlock: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    top: '5%',
    left: '5%'
  },
  redBoxText: {
    color: 'goldenrod',
    fontSize: 20
  },
  textWindow: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '70%',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5
  },
  winMessage: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    position: 'absolute',
    top: '30%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  //LOGIN SCREEN STYLES
  errorMessageText: {
    textDecorationColor: 'red'
  },
  aboveError: {
    margin: 7
  },
  buttonRow: {flexDirection: 'row', justifyContent: 'space-evenly'},
  //HEADER STYLES
  header: {
    fontSize: 27,
    marginBottom: 20,
    padding: 10
  },
  aboveHeader: {
    margin: 30
  },
  //FORM STYLES
  form: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    margin: 10
  }
})
