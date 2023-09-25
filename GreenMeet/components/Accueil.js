import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import background from '../background.png';


const Accueil = () => {
  return (
    <View style={styles.container}>
        <Image source={{uri: background}} style={{width: 2730, height: 4096}} contentFit="cover"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Accueil;