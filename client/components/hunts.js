import React from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
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
      <View style={styles.screenView}>
        <Text style={styles.header}>Choose A Scavenger Hunt:</Text>
        <ScrollView>
          <View style={styles.buttonColumn}>
            {hunts.map(hunt => (
              <TouchableOpacity
                key={hunt.id}
                style={[styles.buttonStyle, styles.secondaryButton]}
                onPress={() => this.handleSelectedHunt(hunt.id)}
              >
                <Text style={styles.buttonText}>{hunt.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
