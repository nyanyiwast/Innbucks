import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHistory, faMoneyBillTrendUp ,faMoneyBills, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/homeBackground.png')}
      style={styles.backgroundImage}>
    <View style={styles.container}>
      <Card />
      {/* <BottomNav /> */}
    </View>

    <View style={styles.containerCards}>
      <View style={styles.view1}>
        <FontAwesomeIcon
          icon={faMoneyBills} 
          size="100"
          color="white"
        />
        <Text style={{color: 'white', fontSize: 30}}>Change</Text>
      </View>
      <View style={styles.view2}>
      <FontAwesomeIcon
          icon={faHistory} 
          size="100"
          color="white"
        />
        <Text style={{color: 'white', fontSize: 30}}>History</Text>
      </View>
    </View>

    <View style={styles.containerCards}>
      <View style={styles.view3}>
      <FontAwesomeIcon
          icon={faMoneyBillTrendUp} 
          size="100"
          color="white"
        />
        <Text style={{color: 'white', fontSize: 30}}>Bills</Text>
      </View>
      <View style={styles.view4}>
      <FontAwesomeIcon
          icon={faMoneyBillTransfer} 
          size="100"
          color="white"
        />
        <Text style={{color: 'white', fontSize: 30}}>Change</Text>
      </View>
    </View>
    <BottomNav />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 1000
  },
  container: {
    bottom: 140
  },
  containerCards: {
    flexDirection: 'row',
    bottom: 50,
    marginTop: 20
  },
  view1: {
    // flex: 1,
    backgroundColor: 'yellow', 
    width: 170,
    height: 170,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    // flex: 1,
    backgroundColor: 'purple', 
    width: 170,
    height: 170,
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    // flex: 1,
    backgroundColor: 'lightgreen', 
    width: 170,
    height: 170,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    // flex: 1,
    backgroundColor: 'red', 
    width: 170,
    height: 170,
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

})