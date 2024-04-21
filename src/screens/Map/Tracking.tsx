import * as React from "react";
import { View, StyleSheet, Platform, Dimensions, TouchableOpacity } from "react-native";
import {useState, useEffect, useRef} from 'react';
import * as Location from 'expo-location';
import { Button} from "native-base";
import MapView ,{ AnimatedRegion, LatLng, MapMarker, PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import BottomSheet from "../../../components/BottomSheetComponent/bottomSheet";
import { useNavigation } from "@react-navigation/native";

import * as Device from 'expo-device';
import { Polyline } from "react-native-svg";

const Tracking = () => {

  const mapRef:any = useRef();
    // let { marker }:any = this;
    const marker = useRef<MapMarker | null>(null);


    const [location,setLocation] = useState();
    const [formattedaddress, setformattedAddress] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    let { calcDistance }:any = this;
    let { state }:any = this;
    let { setState }:any = this;

    let { WatchID }:any = this;

    const map = useRef<MapView | null>(null);
    const haversine = require('haversine')

    const {width, height} = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.2;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

         state={
            latitude:latitude,
            longitude:longitude,
            routeCoordinates:[],
            distanceTravelled:0,
            prevLatLng:{},
            coordinate: new AnimatedRegion({
                latitude:latitude,
                longitude:longitude
            }),
          }

         WatchID = navigator.geolocation.watchPosition(
            position => {
              
                const {coordinate, routeCoordinates, distanceTravelled} :any = state;
                const {latitude,longitude} = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };

                if (Platform.OS === 'android' && !Device.isDevice) {
                  marker.current?. animateMarkerToCoordinate?.(newCoordinate, 500);
                }
                else{
                  routeCoordinates.timing(newCoordinate).start();
                }

                setState =({
                   latitude,
                   longitude,
                   routeCoordinates: routeCoordinates.concat([newCoordinate]),
                   distanceTarvelled:distanceTravelled + calcDistance(newCoordinate),
                   prevLatLng :newCoordinate

                });
            },

            error => console.log(error),
            {enableHighAccuracy:true, timeout:2000, maximumAge:1000}
        )
    

    calcDistance = (newLatLng: LatLng): number => {
      const { prevLatLng }: { prevLatLng: LatLng } = state;
      return haversine(prevLatLng, newLatLng) || 0;
    };


    const getMapRegion =()=>({
       latitude:state.latitude,
       longitude:state.longitude,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta: LONGITUDE_DELTA

    })


return <View>
<MapView ref={getMapRegion}>
      {/* <Polyline coordinates={state.routeCoordinates} strokeWidth={5}/> */}
      <Marker.Animated ref={marker} coordinate={state.coordinate}/>

    </MapView>
 </View>

  }


  export default Tracking;