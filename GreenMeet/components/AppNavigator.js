import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MainPage from './MainPage';
import CreateEvent from './Profile/CreateEvent'
import Profile from './Profile/Profile'
import Settings from './Profile/Settings'

const Stack = createStackNavigator();



const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
