import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import {useState, useEffect, useRef} from 'react';
import * as Location from 'expo-location';
import { Button} from "native-base";
import MapView ,{ AnimatedRegion, LatLng, PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import BottomSheet from "../../../components/BottomSheetComponent/bottomSheet";
import { useNavigation } from "@react-navigation/native";

import * as Device from 'expo-device';

const Tracking = ({route}:any) => {
  const navigation = useNavigation();

  const mapRef:any = useRef();

    let reqId:string =route.params.paramkey[6];

    const [location,setLocation] = useState();
    const [formattedaddress, setformattedAddress] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();

    const map = useRef<MapView | null>(null);

    const constructor=(props:any)=>{
        const state={
            latitude:latitude,
            longitude:longitude,
            routeCoordinates:[],
            distanceTravelled:0,
            prevLatLng:{},
            coordinates: new AnimatedRegion({
                latitude:latitude,
                longitude:longitude
            })
        }
    }

    const componentDidMount=()=>{
        const watchID = navigator.geolocation.watchPosition(
            position => {
                const {coordinate, routeCoordinates, distanceTravelled} :any = state;
                const {latitude,longitude} = position.coords;

                const newCoordinates = {
                    latitude,
                    longitude
                };

                if (Platform.OS === 'android' && !Device.isDevice) {

                }

            }
        )
    }

    useEffect(() =>{
      getPermissions();
     animateToRegion();
      },[]);

const [errorMsg, setErrorMsg] = useState('');

        const getPermissions = async() =>{


          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let currentLocation:any = await Location.getCurrentPositionAsync({});

              setLocation(currentLocation);
                console.log(location);
                setLatitude(currentLocation.coords.latitude);
                console.log(latitude);
                setLongitude(currentLocation.coords.longitude);

    }
    let text = 'Waiting..';

    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

   const state= {

        region: {
          latitude: latitude ? latitude :0,
          longitude: longitude ? longitude:0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
      };

    const reverseGeocode :any= async () =>{
        const reverseGeocode:any = await Location.reverseGeocodeAsync({
            longitude:longitude?longitude:0,
            latitude: latitude?latitude:0
        });
        setformattedAddress(reverseGeocode[0].formattedAddress);
    }
   const animateToRegion = () => {
      mapRef.current.animateToRegion(state.region, 1000);
      reverseGeocode();
   }

return(
 <View style={styles.Container}>
   <MapView style={styles.map11} ref={mapRef} >
    <Marker coordinate={state.region} title="MY LOCATION" description="SEEME"/>
   </MapView>
    <BottomSheet text={formattedaddress} heading={"Current Address:"} />
  <View style={{flexDirection: 'row'}}>
 <Button  w='210' h='50' bg='#07137D' onPress={()=> {updateRequest(),navigation.navigate('Order', {paramkey:[formattedaddress,route.params.paramkey[0],route.params.paramkey[1],route.params.paramkey[2]]})}}>Pin your location</Button>
  <Button  w='210' h='50' variant={'subtle'} colorScheme={'blue'} onPress={animateToRegion}>Current Location</Button>
 </View>
 </View>
);
}

export default Tracking;

const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white",},

     map11: {
      ...StyleSheet.absoluteFillObject,
    },
})
