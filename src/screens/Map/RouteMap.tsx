import React from "react";
import MapView, {Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {StyleSheet} from 'react-native'
const coordinates = [
    {
        latitude: -26.142941,
        longitude: 28.038143

    },
    {
        latitude:  -26.0433333,
         longitude: 28.0644444
    }
]
const GOOGLE_MAPS_APIKEY = 'AIzaSyBE7eraggD4Ut8Nybtq-1KaPCE8LG4P8eU';


const RouteMap = () => {

    return (

        <MapView   style={styles.map}>

            <MapViewDirections
                origin={coordinates[0]}
                destination={coordinates[1]}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="red">
            </MapViewDirections>
        </MapView>
    )
}
export default RouteMap;
const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});