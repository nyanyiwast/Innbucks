import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <ApplicationProvider {...eva} theme={eva.light}> 
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={StartScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginScreen} />   
    </Stack.Navigator>
  </NavigationContainer>
  </ApplicationProvider>
  );
}
