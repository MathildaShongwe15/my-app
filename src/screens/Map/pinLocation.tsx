import * as React from "react";
import { View, TextInput,StyleSheet, ActivityIndicator } from "react-native";
import {useState, useEffect, useRef} from 'react';
import * as Location from 'expo-location';
import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack ,Text, Center,Button} from "native-base";
import MapView ,{ PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet from "../../../components/BottomSheetComponent/bottomSheet";
import { useNavigation } from "@react-navigation/native";



const PinLocation = ({route}:any) => {
  const navigation = useNavigation();

  const mapRef = useRef();
    // let brand:string = route.params.paramKey[0];
    // let color:string =route.params.paramKey[1];
    // let reg:string =route.params.paramKey[2];
    // let serviceId:string = route.params.paramKey[3];
    // const [serviceid, setService] = useState("");
    // setService(serviceId);
    let reqId:string =route.params.paramkey[6];

    // let fee:""number=route.params.paramKey[6];
    const [location,setLocation] = useState();
    const [address, setAddress] = useState();
    const [formattedaddress, setformattedAddress] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();


    const updateRequest = async () =>{

   try{
    console.warn("JUST ARRIVED REQUEST",reqId);
           await fetch(`https://cb5c-41-76-96-122.ngrok-free.app/ServiceRequestUpdate/${reqId}`,{
               method: 'PUT',
               headers:{
                   'Accept': 'application/json',
                   'Content-Type':'application/json'
               },
               body: JSON.stringify(
                {
                  serviceid: await route.params.paramkey[3],
                  userid:"ba0d8023-5c3d-4dd7-83a2-d6d80c2c3f43",
                  vehicleid:await route.params.paramkey[4],
                  service_provider_id:await route.params.paramkey[5],
                  qauntity:"",
                  type:"",
                  spare:0,
                  amount:0,
                  longitude:longitude,
                  latitude:latitude})
               }) .then(response => {
                if(!response.ok){
                  throw new Error('Network response not ok'),
                  console.log(response)
                }
                console.log("response is okay", response)

                return response.json();
              })

    }
    catch(err){
      console.error(err)
    }
    };


  const refreshButton=()=>{
    useEffect(() =>{
      getPermissions();
      animateToRegion();

      },[])
  }


    useEffect(() =>{
      getPermissions();
      animateToRegion();
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
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
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
    const animateToRegion = () => {
      mapRef.current.animateToRegion(state.region, 1000);
      reverseGeocode();
   }
console.warn("END",route.params.paramkey);

  return (

 <View style={styles.Container}>
     <MapView style={styles.map11} ref={mapRef} >
    <Marker coordinate={state.region} title="MY LOCATION" description="SEEME"/>
   </MapView>
    <Center>

   {/* <Button title="GeoCode Address" onPress={geocode}></Button> */}

   </Center>

   <Button onPress={()=> updateRequest()}>PRESS ME</Button>
  <BottomSheet text={formattedaddress} heading={"Current Address:"} />
<Button onPress={()=> navigation.navigate('Order', {paramkey:[formattedaddress,route.params.paramkey[0],route.params.paramkey[1],route.params.paramkey[2]]})}>PRESS ME</Button>



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
