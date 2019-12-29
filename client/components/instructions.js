import React from 'react'
import {Text, View} from 'react-native'
import {styles} from '../styles'
//------------------------------------------------------------------
const Instructions = () => {
  return (
    <View style={styles.screenView}>
      <Text style={styles.header}>Are you ready to be an adventurAR? </Text>
      <Text style={styles.textWindow}>
        After you start a new game, select which scavenger hunt theme you would
        like.
        {'\n'}
        {'\n'}Locations with clues to follow will be preloaded for you to
        find.
        {'\n'}
        {'\n'}Switch between AR View and Map View to help you track down the
        next location.
        {'\n'}
        {'\n'}When you walk towards each location, a treasure chest will pop up.
        Once you're close enough, the treasure chest will glow, click on the
        treasure chest to get your points!
        {'\n'}
        {'\n'}Find all the locations to win the scavenger hunt!
      </Text>
    </View>
  )
}

export default Instructions
