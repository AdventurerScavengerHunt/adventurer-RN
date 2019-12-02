import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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
    alignItems: 'center'
  },
  winMessage: {
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    position: 'absolute',
    top: '30%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center'
  }
})
