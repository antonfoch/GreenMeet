import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function Settings() {
    const [extended, setExtended] = useState(false);

    const toggleExtension = () => {
        setExtended(!extended);
    };

    const onGestureEvent = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            if (nativeEvent.translationY < 0) {
                setExtended(true);
            } else {
                setExtended(false);
            }
        }
    };

    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/back_arrow.png')} style={styles.back} />
                <Text style={styles.header}>REGLAGES</Text>
            </View>
            <View style={styles.bottomBar}>
                <TextInput
                    placeholder="Rechercher les paramètres..."
                    style={styles.searchBar}
                />
                <PanGestureHandler onGestureEvent={onGestureEvent}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={toggleExtension}
                    >
                    </TouchableOpacity>
                </PanGestureHandler>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        height: 844,
        width: 390,
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        top:'20%'
    },
    header: {
        fontSize: 30,
        marginLeft: '17%',
    },
    back: {
        width: 20,
        height: 20,
        marginLeft: '5%'
    },
    bottomBar: {
        alignItems: 'center',
        top:'10%',
        paddingTop: 20,
    },
    searchBar: {
        width: '80%',
        height: 40,
        borderColor: '#9590AD',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
});