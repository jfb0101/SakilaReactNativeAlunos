import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListFilmsContainer } from './src/components/list-films/ListFilmsContainer';
import { Login } from './src/components/login/Login';
import { LoginContainer } from './src/components/login/LoginContainer';
import { ListFilmsScreen } from './src/screens/ListFilmsScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { StackParamList } from './src/screens/StackParamList';

const Stack = createNativeStackNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}/>

        <Stack.Screen
          name="ListFilms"
          component={ListFilmsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
