import * as React from "react";
import { View, TextInput,StyleSheet, ActivityIndicator, Keyboard, SafeAreaView, ScrollView } from "react-native";
import {useState, useEffect, useRef} from 'react';
import * as Location from 'expo-location';
import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack ,Text, Center,Button, Input} from "native-base";
import MapView ,{ LatLng, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet from "../../../components/BottomSheetComponent/bottomSheet";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const PinLocation = ({route}:any) => {
  const navigation = useNavigation();

  const mapRef = useRef();

    let reqId:string =route.params.paramkey[6];


    const [location,setLocation] = useState();
    const [formattedaddress, setformattedAddress] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    const [searchText, setSearchText] = useState("");
    const [results,setResults] = useState<any[]>();
    const map = useRef<MapView | null>(null);



    const updateRequest = async () =>{

   try{
    console.warn("JUST ARRIVED REQUEST",reqId);
           await fetch(`https://5466-105-224-65-25.ngrok-free.app/ServiceRequestUpdate/${reqId}`,{
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

    useEffect(() =>{
      getPermissions();
     animateToRegion();
      },[]);

// const searchPlaces =async ()=>{
//   if(!searchText.trim().length) return;
//   const INTITAL_LNG = longitude;
//   const INTITAL_LAT = latitude;

//   const input = searchText.trim();
//   const location = `${INTITAL_LAT},${INTITAL_LNG}&radius=2000`
//   const url = `${GOOGLE_MAPS_APIKEY}?query=${input}&location=${location}`
//   try{
//     const resp = await fetch(url);
//     const json = await resp.json();
//     console.log(json);
//     if(json && json.results){
//       const coords: LatLng[] = []
//       for(const item of json.results){

//         //console.log(item.geometry);
//         coords.push({
//           latitude: item.geometry.location.lat,
//           longitude: item.geometry.location.lng,
//         })

//       }
//       setResults(json.results)
//       if(coords.length){
//         map.current?.fitToCoordinates(coords,
//           {
//             edgePadding:{
//                top:50,
//                right:50,
//                bottom:50,
//                left:50
//             }, animated:true
//           })
//           Keyboard.dismiss();

//       }
//     }

//   }
//   catch(e){
//     console.error(e);
//   }

// }



        const getPermissions = async() =>{

           let {status} = await Location.requestBackgroundPermissionsAsync();
           if(status !== 'granted') {
            console.log("Please grant location permissions");
            return;
           }
           let currentLocation = await Location.getCurrentPositionAsync({});
           setLocation(currentLocation);
           setLatitude(currentLocation.coords.latitude);
           setLongitude(currentLocation.coords.longitude);

        };

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

   <Center>
   </Center>


   <BottomSheet text={formattedaddress} heading={"Current Address:"} />

  <View style={{flexDirection: 'row'}}>
 <Button  w='210' h='50' bg='#07137D' onPress={()=> {updateRequest(),navigation.navigate('Order', {paramkey:[formattedaddress,route.params.paramkey[0],route.params.paramkey[1],route.params.paramkey[2]]})}}>Pin your location</Button>
  <Button  w='210' h='50' variant={'subtle'} colorScheme={'blue'} onPress={animateToRegion}>Current Location</Button>
 </View>

 </View>
);
}

export default PinLocation;

const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white",},

     map11: {
      ...StyleSheet.absoluteFillObject,
    },
    searchBox:{
      position:'absolute',
      width:'90%',
      borderRadius:8,
      borderWidth:1,
      borderColor:"#aaa",
      backgroundColor:"white",
      padding:8,
      height:'20%',
      alignSelf:'center',
      marginTop:60
    },
    seacrhBoxField:{
       borderColor:"#777",
       borderWidth:1,
       borderRadius:4,
       paddingHorizontal:8,
       paddingVertical:4,
       fontSize:18,
       marginBottom:8,
    },
    buttonCtnr:{
      alignItems:'center',
      justifyContent:'center',
      padding:15,
      backgroundColor:"#26f",
      borderRadius:8,
      height:50
    },
    buttonLabel:{
      fontSize:18,
      color:'white'
    }


  });
