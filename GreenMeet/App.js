<<<<<<< HEAD
import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import {  } from 'react-native-svg';
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import background from './assets/background.png';
>>>>>>> refs/remotes/origin/main

export default function Accueil() {
  return (
<<<<<<< HEAD
    <View style={styles.accueil}>
      <ImageBackground
        style={styles.back_acceuil}
        source={require('./components/back_acceuil.jpg')}
      />
      <ImageBackground
        style={styles.logo}
        source={require('./components/image 34.png')}
      />
      <Text style={styles.title}>
        {`Bienvenue sur GreenMeet`}
      </Text>
      <View style={styles.group5}>
        <View style={styles.rectangle68} />
        <Text style={styles.identifiant}>
          {`Identifiant`}
        </Text>
      </View>
      <View style={styles.group6}>
        <View style={styles.rectangle67} />
        <Text style={styles.subtitle}>
          {`Mot de passe`}
        </Text>
      </View>
      {/* RN-Flow:: can be replaced with <SubmitButton  /> */}
      <View style={styles.submitButton}>
        <View style={styles.border} />
        <Text style={styles._title}>
          {`Connexion`}
        </Text>
      </View>
      <Text style={styles.__title}>
        {`Me créer un compte`}
      </Text>
=======
    <View style={styles.container}>
      <Image source={background} style={{width: 2730, height: 4096}} contentFit="cover"/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
>>>>>>> refs/remotes/origin/main
    </View>
  );
}

const styles = StyleSheet.create({
  	accueil: {
    flexShrink: 0,
    height: 844,
    width: 390,
    backgroundColor: "rgba(198, 195, 195, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
    back_acceuil: {
    position: "absolute",
    flexShrink: 0,
    top: -1772,
    left: -1220,
    width: 2730,
    height: 4096
},
  	logo: {
    position: "absolute",
    flexShrink: 0,
    top: 722,
    right: 129,
    bottom: 12,
    left: 138
},
  	title: {
    position: "absolute",
    flexShrink: 0,
    top: 82,
    right: 0,
    left: 0,
    height: 40,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Mulish",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0.10867942869663239
},
  	group5: {
    position: "absolute",
    flexShrink: 0,
    top: 280,
    height: 44,
    left: 33,
    width: 332
},
  	rectangle68: {
    position: "absolute",
    flexShrink: 0,
    width: 332,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderColor: "rgba(151, 151, 151, 1)",
    borderRadius: 10
},
  	identifiant: {
    position: "absolute",
    flexShrink: 0,
    top: 13,
    left: 130,
    width: 67,
    height: 18,
    textAlign: "center",
    color: "rgba(123, 123, 123, 1)",
    fontFamily: "Mulish",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.10867942869663239
},
  	group6: {
    position: "absolute",
    flexShrink: 0,
    top: 387,
    height: 44,
    left: 32,
    width: 334
},
  	rectangle67: {
    position: "absolute",
    flexShrink: 0,
    width: 334,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderColor: "rgba(151, 151, 151, 1)",
    borderRadius: 10
},
  	subtitle: {
    position: "absolute",
    flexShrink: 0,
    top: 14,
    left: 120,
    width: 87,
    height: 17,
    textAlign: "center",
    color: "rgba(123, 123, 123, 1)",
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.10867942869663239
},
  	submitButton: {
    position: "absolute",
    flexShrink: 0,
    top: 545,
    height: 50,
    left: 100,
    right: 99,
    alignItems: "flex-start",
    rowGap: 0
},
  	border: {
    position: "absolute",
    flexShrink: 0,
    right: 0,
    left: 0,
    height: 50,
    backgroundColor: "rgba(87, 128, 250, 1)",
    borderRadius: 10
},
  	_title: {
    position: "absolute",
    flexShrink: 0,
    top: 17,
    right: 16,
    left: 15,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Mulish",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.10867942869663239
},
  	__title: {
    position: "absolute",
    flexShrink: 0,
    top: 600,
    right: 115,
    left: 115,
    height: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Mulish",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.10867942869663239
}
})
