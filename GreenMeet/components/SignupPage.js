import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Button } from 'react-native';
import { } from 'react-native-svg';

const SignupPage = ({ navigation }) => {
  return (
    <View >
      <ImageBackground source={require('../assets/back_acceuil.jpg')} />
      <Text>GreenMeet</Text>
      <Button title="Inscription"
        onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default SignupPage;