import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View>
        <View>
            <Text style={styles.welcomeTitle}>Welcome back,</Text>
        </View>
        <View style={styles.card}>
        <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.logoTitle}>InnBucks</Text>
        </View>
        <View>
            <Text style={styles.balanceTitle}>Your Balance</Text>
            <Text style={styles.balance}>$100.00</Text>
            <Text style={styles.currency}>USD</Text>
            <Text style={styles.username}>Sedrick Nyanyiwa</Text>
            <Text style={styles.accountNumber}>0712 345 678</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'purple',
        width: 350,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 22,
        top: 50,
        borderRadius: 20
    },
    logo: {
        width: 40,
        height: 40,
        bottom: 0,
        marginLeft: 280
    },
    balanceTitle: {
        color: 'white',
        fontSize: 15,
        bottom: 50,
        marginRight: 200
    },
    balance: {
        color: 'white',
        bottom: 50,
        fontSize: 29
    },
    currency: {
        color: 'gray',
        fontWeight: 'bold',
        bottom: 75,
        fontSize: 10,
        marginLeft: 120
    },
    logoTitle: {
        color: 'white',
        bottom: 0,
        fontSize: 10,
        marginLeft: 280
    },
    username: {
        color: 'white',
    },
    accountNumber: {
        color: 'white',
        bottom: 20,
        marginLeft: 230
    },
    welcomeTitle: {
        color: 'white',
        top: 50,
        marginLeft: 23,
        fontSize: 30,
        marginBottom: 20
    }
})