import React, { useState, useEffect, useContext, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text, Animated, Dimension } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapData from './jardins-partages.json'
import BottomSheet from '@gorhom/bottom-sheet';
import { UserContext } from './MainPage/UserContext';

export default function MainPageTwo() {
    const [selectedJardin, setSelectedJardin] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [filteredJardins, setFilteredJardins] = useState(MapData);
    const [searchQuery, setSearchQuery] = useState("");
    const [events, setEvents] = useState([]);
    const [eventTitle, setEventTitle] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [jardinsData, setJardinsData] = useState(MapData);
    const { currentUser } = useContext(UserContext);

    const bottomSheetRef = useRef(null);

    const handleMarkerPress = (jardin) => {
        setSelectedJardin(jardin);
        setEvents(jardin.evenements || []);
        setShowDetails(true);
        bottomSheetRef.current?.snapToIndex(1);
    };


    const addEvent = () => {
        const newEvent = {
            titre: eventTitle,
            date: eventDate,
            heure: eventTime,
            description: eventDescription,
        };

        const updatedJardins = jardinsData.map(jardin => {
            if (jardin.nom_ev === selectedJardin.nom_ev) {
                return {
                    ...jardin,
                    evenements: [...(jardin.evenements || []), newEvent]
                };
            }
            return jardin;
        });
        setJardinsData(updatedJardins);

        setEventTitle("");
        setEventDate("");
        setEventTime("");
        setEventDescription("");
    };


    const handleSearch = (query) => {
        setSearchQuery(query);

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
                {jardinsData.map((jardin, index) => (
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
                index={0}
                snapPoints={['25%', '50%', '100%']}
                enablePanDownToClose={false}
                onChange={(index) => {
                    if (index === -1) {
                        bottomSheetRef.current?.snapToIndex(0);
                        setShowDetails(false);
                    }
                }}
            >
                <View style={styles.contentContainer}>
                    {showDetails ? (
                        <>
                            <Text>{selectedJardin.nom_ev}</Text>
                            <Text>{selectedJardin.adresse}</Text>
                            {events.map((event, idx) => (
                                <View key={idx}>
                                    <Text>{event.titre}</Text>
                                    <Text>{event.date} à {event.heure}</Text>
                                    <Text>{event.description}</Text>
                                    <Text>Ajouté par: {currentUser}</Text>
                                </View>
                            ))}
                            <TextInput
                                placeholder="Titre de l'événement"
                                value={eventTitle}
                                onChangeText={setEventTitle}
                                style={styles.eventInput}
                            />
                            <TextInput
                                placeholder="Date (ex: 2023-10-01)"
                                value={eventDate}
                                onChangeText={setEventDate}
                                style={styles.eventInput}
                            />
                            <TextInput
                                placeholder="Heure (ex: 15:00)"
                                value={eventTime}
                                onChangeText={setEventTime}
                                style={styles.eventInput}
                            />
                            <TextInput
                                placeholder="Description"
                                value={eventDescription}
                                onChangeText={setEventDescription}
                                style={styles.eventInput}
                            />

                            <TouchableOpacity onPress={addEvent} style={styles.addButton}>
                                <Text style={styles.addButtonText}>Ajouter l'événement</Text>
                            </TouchableOpacity>
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
                                <TouchableOpacity key={index} onPress={() => handleMarkerPress(jardin)} style={styles.gardenItem}>
                                    <Text style={styles.gardenTitle}>{jardin.nom_ev}</Text>
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
        backgroundColor: '#f5f5f5'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white'
    },
    subText: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 5
    },
    searchBar: {
        width: '100%',
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#e9e9e9',
        marginBottom: 15
    },
    eventInput: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#e9e9e9',
        marginBottom: 10
    },
    addButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        marginBottom: 10
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    gardenItem: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        marginBottom: 10,
        alignItems: 'center'
    },
    gardenTitle: {
        fontWeight: 'bold',
        marginBottom: 5
    }
});
