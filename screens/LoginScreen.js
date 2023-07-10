import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from '@ui-kitten/components';
import PhoneInput from 'react-native-phone-number-input';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.backgroundImage}>

    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Log in to InnBucks</Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="ZW"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={{borderRadius: 20, backgroundColor: '#FFFFFF'}}
        onChangeFormattedText={text => {
        setphoneNumber(text);
        }}
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Button
          style={styles.loginButton}
          status='primary'
          onPress={()=> navigation.push('Home')}
          >
          Login
        </Button>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        {/* <Text style={styles.signupText}>Don't have an account?</Text> */}
        <TouchableOpacity 
        style={styles.signupButton}
        onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.signupButtonText}>Sign Up For InnBucks</Text>
        </TouchableOpacity>
      </View>

    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: 300,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
  },
  loginButton: {
    padding: 15,
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: 300,
    alignItems: 'center'
  },
  signupButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  phoneContainer: {
    width: 300,
    height: 50,
    borderRadius: 20,
    marginBottom: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});