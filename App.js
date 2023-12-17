import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// importing screens 
import SignInHome from './src/screens/SignInHome'
import UserSignIn from './src/screens/UserSignIn'
import UserSignUp from './src/screens/UserSignUp'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SignInHome"
          component={SignInHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserSignIn"
          component={UserSignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserSignUp"
          component={UserSignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
