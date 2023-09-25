import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { } from 'react-native-svg';

const LoginPage = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require('../assets/back_acceuil.jpg')} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Me créer un compte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Allez à la page principale</Text>
      </TouchableOpacity>
    </View>

  );
};

export default LoginPage;