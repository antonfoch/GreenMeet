import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://data.smartidf.services/explore/embed/dataset/jardins-partages/map/?disjunctive.nom_ev&disjunctive.nom_gerant&disjunctive.type_espace_vert&disjunctive.type_jardin_partage&disjunctive.domaine&disjunctive.proprietaire_terrain&disjunctive.statut_plu&disjunctive.amenagements&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJwaWUiLCJmdW5jIjoiQ09VTlQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiJyYW5nZS1jdXN0b20iLCJwb3NpdGlvbiI6ImNlbnRlciJ9XSwieEF4aXMiOiJ0eXBlX2phcmRpbl9wYXJ0YWdlIiwibWF4cG9pbnRzIjo1MCwic29ydCI6InNlcmllMS0xIiwic2VyaWVzQnJlYWtkb3duIjoiIiwic2VyaWVzQnJlYWtkb3duVGltZXNjYWxlIjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJqYXJkaW5zLXBhcnRhZ2VzIiwib3B0aW9ucyI6eyJkaXNqdW5jdGl2ZS5ub21fZXYiOnRydWUsImRpc2p1bmN0aXZlLm5vbV9nZXJhbnQiOnRydWUsImRpc2p1bmN0aXZlLnR5cGVfZXNwYWNlX3ZlcnQiOnRydWUsImRpc2p1bmN0aXZlLnR5cGVfamFyZGluX3BhcnRhZ2UiOnRydWUsImRpc2p1bmN0aXZlLmRvbWFpbmUiOnRydWUsImRpc2p1bmN0aXZlLnByb3ByaWV0YWlyZV90ZXJyYWluIjp0cnVlLCJkaXNqdW5jdGl2ZS5zdGF0dXRfcGx1Ijp0cnVlLCJkaXNqdW5jdGl2ZS5hbWVuYWdlbWVudHMiOnRydWUsImJhc2VtYXAiOiI0NDhhZDAiLCJsb2NhdGlvbiI6IjIsNDMuNzgwNjEsMTAuOTI0ODEifX19XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&basemap=448ad0&location=6,44.93292,1.2063&static=false&datasetcard=true&scrollWheelZoom=false' }}
                style={styles.webView}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        flex: 1,
    },
});

export default App;
