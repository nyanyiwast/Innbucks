import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function StartSceenBackground() {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.backgroundImage}
    ></ImageBackground>
  )
}

const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})