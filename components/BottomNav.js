import React, { useState } from 'react'
import { View, StyleSheet } from'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQrcode, faHouse, faTools, faUser } from '@fortawesome/free-solid-svg-icons'


export default function BottomNav() {
    const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <FontAwesomeIcon
          icon={faHouse} 
          size="30"
          color="white"
        />
      </View>
      <View style={styles.view2}>
      <FontAwesomeIcon
          icon={faQrcode} 
          size="30"
          color="white"
        />
      </View>
      <View style={styles.view1}>
        <FontAwesomeIcon
          icon={faTools} 
          size="30"
          color="white"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        bottom: 20,
        marginTop: 20,
        backgroundColor: 'purple',
        borderRadius: 20,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
      },
      view1: {
        // flex: 1,
        height: 70,
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      view2: {
        // flex: 1,
        height: 70,
        borderRadius: 20,
        marginLeft: 90,
        marginRight: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
})