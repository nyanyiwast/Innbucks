import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button } from '@ui-kitten/components';

export default function StartScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.backgroundImage}>

      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        

        <View style={{bottom: 30}}>
        <Text style={styles.title}>InnBucks</Text>
        </View>

        <View>
            <Text style={styles.subtitle}>
                Welcome to Zimbabwe{'`'}s Ultimate {'\n'} Loyalty {'&'} Rewards {'\n'}Programme
            </Text>
        </View>

        <Button
          style={styles.button}
          status='primary'
          onPress={() => navigation.push('Register')}
          >
          Register
        </Button>

        <Button
          style={styles.button}
          status='basic'
          onPress={() => navigation.push('Login')}
          >
          Login
        </Button>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    width: 300, 
    borderRadius: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 32,
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 32,
    color: 'white',
    textAlign: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});