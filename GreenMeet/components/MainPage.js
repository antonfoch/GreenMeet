import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Btn_loc from '../assets/ic_loc.png'; // Importez Ic_loc depuis le fichier approprié
import Ic_gesture from '../assets/ic_gesture.png'; // Importez Ic_gesture depuis le fichier approprié
import Ic_menu from '../assets/ic_menu.png'; // Importez Ic_menu depuis le fichier approprié

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={Btn_loc} style={styles.btnLocImage} /> {/* Utilisez l'image Ic_loc */}
            <View style={styles.btn_loc}>
                {/* ... Autres éléments ... */}
            </View>
            {/* ... Autres éléments ... */}

            <Image source={Ic_gesture} style={styles.icGestureImage} /> {/* Utilisez l'image Ic_gesture */}

            <View style={styles.navbar_x}>
                <View style={styles.navbtn}>
                    <Image source={Ic_menu} style={styles.icMenuImage} /> {/* Utilisez l'image Ic_menu */}
                </View>
            </View>

            {/* Rectangle 1223 */}
            <View style={styles.rectangle1223}>
                <Text style={styles.rechercherdansGreenMeet}>
                    {`Rechercher dans GreenMeet`}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLocImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    icGestureImage: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    icMenuImage: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    rectangle1223: {
        width: 303,
        height: 37,
        backgroundColor: "rgba(217, 217, 217, 1)",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Ajoutez cette ligne pour permettre le positionnement absolu
    },
    rechercherdansGreenMeet: {
        fontSize: 15,
        fontFamily: 'Mulish',
        textAlign: "center",
    },
    // Ajoutez d'autres styles selon vos besoins
});
