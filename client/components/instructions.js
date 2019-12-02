import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../styles';
//------------------------------------------------------------------
const Instructions = () => {
  return (
    <View style={styles.aboveHeader}>
      <Text style={styles.header}>Are you ready to be an adventurAR? </Text>
      <Text></Text>
      <Text>
        After you start a new game, select which scavenger hunt theme you would
        like. Locations will be preloaded for you to find. Once you walk to each
        location, a button will pop up saying that you have found the target
        location. Click that button. Find all the locations to win the scavenger
        hunt!
      </Text>
    </View>
  );
};

export default Instructions;
