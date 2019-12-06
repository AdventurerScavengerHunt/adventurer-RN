import React from 'react'
import {Text, View, Button, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
//------------------------------------------------------------------
import {fetchAllHunts} from '../store/hunts'
import {
  fetchCreatedHuntLocations,
  fetchDroppingHuntLocations
} from '../store/huntLocations'
import {styles} from '../styles'
//------------------------------------------------------------------
class Hunts extends React.Component {
  async componentDidMount() {
    await this.props.fetchAllHunts()
  }
  //------------------------------------------------------------------
  async handleSelectedHunt(huntId) {
    //Drops any old hunts for user
    await this.props.fetchDroppingHuntLocations(this.props.user.id)
    //Post to create hunts and put on state
    await this.props.fetchCreatedHuntLocations(this.props.user.id, huntId)
    this.props.navigate('GameScreen')
  }
  //------------------------------------------------------------------
  render() {
    const hunts = this.props.hunts
    return (
      <ImageBackground
        source={{
          uri:
            'https://cdn.vox-cdn.com/thumbor/JrouYZWSJNcepH5ZAhzVdUA7Muw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/63616039/171109_08_11_37_5DS_0545.0.jpg'
        }}
        style={{width: '100%', height: '100%'}}
      >
        <Text style={styles.header}>Choose A Scavenger Hunt:</Text>
        {hunts.map(hunt => (
          <View key={hunt.id}>
            <Button
              title={hunt.name}
              onPress={() => this.handleSelectedHunt(hunt.id)}
            />
          </View>
        ))}
      </ImageBackground>
    )
  }
}
//------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    hunts: state.hunts,
    navigate: ownProps.navigation.navigate
  }
}
//------------------------------------------------------------------

const mapDispatchToProps = dispatch => {
  return {
    fetchAllHunts: () => dispatch(fetchAllHunts()),
    fetchCreatedHuntLocations: (userId, huntId) =>
      dispatch(fetchCreatedHuntLocations(userId, huntId)),
    fetchDroppingHuntLocations: (userId, huntId) =>
      dispatch(fetchDroppingHuntLocations(userId, huntId))
  }
}
//------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Hunts)
