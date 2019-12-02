import React from 'react'
import {Text, View, Button} from 'react-native'
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
    this.props.navigate('MapScreen')
  }
  //------------------------------------------------------------------
  render() {
    const hunts = this.props.hunts
    return (
      <View style={styles.aboveHeader}>
        <Text style={styles.header}>Choose A Scavenger Hunt:</Text>
        {hunts.map(hunt => (
          <View key={hunt.id}>
            <Button
              title={hunt.name}
              onPress={() => this.handleSelectedHunt(hunt.id)}
            />
          </View>
        ))}
      </View>
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
