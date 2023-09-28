import React, { useState, useEffect, useContext, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text, Animated, Dimension } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapData from './jardins-partages.json'
import BottomSheet from '@gorhom/bottom-sheet';

export default function MainPageTwo() {
    const [selectedJardin, setSelectedJardin] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [filteredJardins, setFilteredJardins] = useState(MapData);
    const [searchQuery, setSearchQuery] = useState("");

    const bottomSheetRef = useRef(null);

    const handleMarkerPress = (jardin) => {
        setSelectedJardin(jardin);
        setShowDetails(true);
        bottomSheetRef.current?.snapToIndex(1);  // Monter à 50%
    };

    const handleSearch = (query) => {
        setSearchQuery(query);  // Stockez le texte de recherche

        if (query.trim() === "") {
            setFilteredJardins(MapData);
        } else {
            const filtered = MapData.filter(jardin =>
                jardin.nom_ev && jardin.nom_ev.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredJardins(filtered);
        }
    };


    return (
        <View style={styles.root}>
            <MapView
                style={{ flex: 1 }}
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
                        onPress={() => handleMarkerPress(jardin)}
                    />
                ))}
            </MapView>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}  // La position initiale sera celle de la barre de recherche (25%)
                snapPoints={['25%', '50%', '100%']}
                enablePanDownToClose={false}
                onChange={(index) => {
                    // Si l'utilisateur tente de fermer le BottomSheet en le glissant vers le bas
                    if (index === -1) {
                        bottomSheetRef.current?.snapToIndex(0);  // Retourner à la position de la barre de recherche
                        setShowDetails(false);
                    }
                }}
            >
                <View style={styles.contentContainer}>
                    {showDetails ? (
                        <>
                            <Text>{selectedJardin.nom_ev}</Text>
                            <Text>{selectedJardin.adresse}</Text>
                            <TouchableOpacity onPress={() => setShowDetails(false)}>
                                <Text>Retour à la recherche</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TextInput
                                placeholder="Rechercher un jardin..."
                                style={styles.searchBar}
                                value={searchQuery}
                                onChangeText={text => handleSearch(text)}
                                onFocus={() => bottomSheetRef.current?.snapToIndex(1)}
                            />
                            {searchQuery.trim() !== "" && filteredJardins.map((jardin, index) => (
                                <TouchableOpacity key={index} onPress={() => handleMarkerPress(jardin)}>
                                    <Text>{jardin.nom_ev}</Text>
                                    <Text style={styles.subText}>{jardin.adresse}</Text>
                                </TouchableOpacity>
                            ))}
                        </>
                    )}
                </View>

            </BottomSheet>


        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },

    subText: {
        fontSize: 12,
        color: 'gray',
    },
});