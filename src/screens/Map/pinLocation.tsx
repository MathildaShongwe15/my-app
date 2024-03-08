import * as React from "react";
import { Button, View, Text, TextInput } from "react-native";
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';

const pinLocation = () => {

    const [location,setLocation] = useState();
    const [address, setAddress] = useState();


    useEffect(() =>{

        const getPermissions = async() =>{

           let {status} = await Location.requestBackgroundPermissionsAsync();
           if(status !== 'granted') {
            console.log("Please grant location permissions");
            return;
           }
           let currentLocation = await Location.getCurrentPositionAsync({});
           setLocation(currentLocation);
           console.log("Location:");
           console.log(currentLocation);
        };
        getPermissions();
    },[]);

    const geocode = async() =>{
        const geocodedLocation = await Location.geocodeAsync(address);
        console.log("Geocode Address:");
        console.log(geocodedLocation);
    }
    const reverseGeocode = async () =>{
        const reverseGeocode = await Location.reverseGeocodeAsync({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude
        });

        console.log("reverse geocoded:");
        console.log(reverseGeocode)
    }
  return (
    <View>
    <TextInput placeholder="Address" value={address} onChangeText={setAddress}/>
   <Button title="GeoCode Address" onPress={geocode}></Button>
   <Button title="Reverse Address" onPress={reverseGeocode}></Button></View>
  );
}
export default pinLocation;
;
