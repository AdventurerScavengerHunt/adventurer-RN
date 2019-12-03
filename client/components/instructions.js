import React from 'react'
import {Text, View, ImageBackground} from 'react-native'
import {styles} from '../styles'
//------------------------------------------------------------------
const Instructions = () => {
  return (
    <ImageBackground
      source={{
        uri:
          'https://cdn.vox-cdn.com/thumbor/JrouYZWSJNcepH5ZAhzVdUA7Muw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/63616039/171109_08_11_37_5DS_0545.0.jpg'
      }}
      style={{width: '100%', height: '100%'}}
    >
      <View style={styles.aboveHeader}>
        <Text style={styles.header}>Are you ready to be an adventurAR? </Text>
        <Text style={styles.textWindow}>
          After you start a new game, select which scavenger hunt theme you
          would like.
          {'\n'}{'\n'}Locations will be preloaded for you to find.
          {'\n'}{'\n'}Once you walk to each location, a treasure chest will pop up. Click on the
          treasure chest to get your points. Then, the next location will load.
          {'\n'}{'\n'}Find all the locations to win the scavenger hunt!
        </Text>
      </View>
    </ImageBackground>
  )
}

export default Instructions
