import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { } from 'react-native-svg';

const LoginPage = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
      <Text>Allez à la page d'inscription</Text>
    </TouchableOpacity>
  );
};

export default LoginPage;