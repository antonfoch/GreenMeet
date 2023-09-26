import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Button } from 'react-native';
import { } from 'react-native-svg';

const SignupPage = ({ navigation }) => {
  return (
    <View >
      <Text>GreenMeet</Text>
      <Button title="S'inscrire"
        onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default SignupPage;