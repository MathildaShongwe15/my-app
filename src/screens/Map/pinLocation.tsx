import * as React from "react";
import { Button, View, TextInput,StyleSheet, ActivityIndicator } from "react-native";
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack ,Text, Center,} from "native-base";
import MapView ,{ PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet from "../../../components/BottomSheetComponent/bottomSheet";



const PinLocation = ({route}:any) => {

  let typeService:string = route.params.Paramskeys ?? 'no Data';
  console.warn(typeService);

  const [location,setLocation] = useState();
  const [address, setAddress] = useState();
  const [formattedaddress, setformattedAddress] = useState();
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();



    useEffect(() =>{
      getPermissions();

      },[])


        const getPermissions = async() =>{

           let {status} = await Location.requestBackgroundPermissionsAsync();
           if(status !== 'granted') {
            console.log("Please grant location permissions");
            return;
           }
           let currentLocation = await Location.getCurrentPositionAsync({});
           setLocation(currentLocation);
           console.log("Location:");
           console.log(currentLocation.coords.latitude);
           console.log(currentLocation.coords.longitude);

           setLatitude(currentLocation.coords.latitude);
           setLongitude(currentLocation.coords.longitude);


           console.log("BITCH IM HERE:" ,latitude,longitude)

        };




    const geocode = async() => {
        const geocodedLocation = await Location.geocodeAsync(address);
        console.log("Geocode Address:");
        console.log(await geocodedLocation);

    }
  console.log(latitude,longitude);
   const state= {

        region: {
          latitude: latitude ? latitude :0,
          longitude: longitude ? longitude:0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        },
      };

    const reverseGeocode = async () =>{
        const reverseGeocode = await Location.reverseGeocodeAsync({
            longitude:longitude,
            latitude: latitude
        });

        console.log("reverse geocoded:");
        console.log(reverseGeocode)
        console.log(reverseGeocode[0].formattedAddress);
        setformattedAddress(reverseGeocode[0].formattedAddress);
    }


  return (


 <View style={styles.Container}>

     <MapView style={styles.map11}  >
    <Marker coordinate={state.region} title="MY LOCATION" description="SEEME"/>
   </MapView>
    <Center>
    <Heading fontSize="xl" p="4" pb="3">
        Current Address
      </Heading>
    <TextInput placeholder="Address" value={formattedaddress} />
   {/* <Button title="GeoCode Address" onPress={geocode}></Button> */}
   <Button  title="Get Current Address" onPress={reverseGeocode} ></Button>

   </Center>


  <BottomSheet text={formattedaddress} heading={"Current Address:"} />



</View>
  )
  }
export default PinLocation;

const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white",},

     map11: {
      ...StyleSheet.absoluteFillObject,
    },
  });
