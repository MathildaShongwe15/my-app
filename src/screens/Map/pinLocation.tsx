import * as React from "react";
import { View, TextInput,StyleSheet, Platform } from "react-native";
import {useState, useEffect, useRef, useCallback} from 'react';
import * as Location from 'expo-location';
import { Button, Input} from "native-base";
import MapView, { Marker } from "react-native-maps";
import BottomSheet from "../../../components/BottomSheetComponent/bottomSheet";
import { useNavigation } from "@react-navigation/native";
import * as Device from 'expo-device';
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid'
import { ProgressProvider, useStep } from "../../../Context/ProgressContext";


 const PinLocation = ({route}:any) => {
  const navigation = useNavigation();

  const mapRef:any = useRef();

    const [location,setLocation] = useState();
    const [formattedaddress, setformattedAddress] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    const [searchText, setSearchText] = useState("");
    const [results,setResults] = useState<any[]>();
    const map = useRef<MapView | null>(null);

 let provider:string = route.params.paramkey[0];
 let brand:string =route.params.paramkey[1];
 let model:string = route.params.paramkey[2];
 let serviceId:number = route.params.paramkey[3];
 let VehicleId:number = route.params.paramkey[4];
 let providerId:number = route.params.paramkey[5];
 let value:boolean = route.params.paramkey[6];

console.warn(value);

 let { states }:any = this
 const {updateProgress}:any = useStep();


 const postServiceRequest = async () =>{
  let UserId = await AsyncStorage.getItem("USERID");
 await fetch('https://mutt-one-calf.ngrok-free.app/ServiceRequestCreate',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body: JSON.stringify(
        {
          Id:uuid.v4(),
          serviceid:serviceId,
          userid:UserId,
          vehicleid:VehicleId,
          serviceProviderId:providerId,
          qauntity:0,
          type:"",
          spare:value,
          amount: 0,
          accepted:0,
          longitude:longitude,
          latitude:latitude
        })
      })
      .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok'),
          console.log(response)
        }
        console.log("response is okay", response)
        return response.json();
      })

      }


    useEffect(() =>{
      getPermissions();
      animateToRegion();
      },[]);

const [errorMsg, setErrorMsg] = useState('');

        const getPermissions = async() =>{

          if (Platform.OS === 'android' && !Device.isDevice) {
            setErrorMsg(
              'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
            );
            return;
          }
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
  <ProgressProvider >
 <View style={styles.Container}>
   <MapView style={styles.map11} ref={mapRef} >
    <Marker coordinate={state.region} title="MY LOCATION" description="SEEME"/>
   </MapView>
    <BottomSheet text={formattedaddress} heading={"Current location:"} />
  <View style={{flexDirection: 'row'}}>
 <Button  w='210' h='50' bg='#07137D' onPress={()=> {updateProgress() ,postServiceRequest(),navigation.navigate('Order', {paramkey:[formattedaddress,provider,brand,model]})}}>Pin your location</Button>

  <Button  w='210' h='50' variant={'subtle'} colorScheme={'blue'} onPress={animateToRegion}>Current Location</Button>
 </View>
 </View>
 </ProgressProvider>
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