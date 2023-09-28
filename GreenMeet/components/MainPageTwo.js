import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text, Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps'
import MapData from './jardins-partages.json'
import { UserContext } from './MainPage/UserContext';

export default function MainPageTwo() {
    return(
        <View style={styles.root}>
            <MapView
                style={{ flex: 1 }} // Utilisez flex: 1 pour que la carte prenne tout l'écran disponible
                initialRegion={{
                    latitude: 48.8534,
                    longitude: 2.3488,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {MapData.map((jardin, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: jardin.geo_point_2d.lat,
                            longitude: jardin.geo_point_2d.lon
                        }}
                        title={jardin.nom_ev}
                        description={jardin.adresse}
                    />
                ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
     root: {
        height: "100%",
        width: "100%",
    },
});