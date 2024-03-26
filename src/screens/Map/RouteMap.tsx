import React, { useEffect, useState } from "react";
import MapView, {Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {StyleSheet} from 'react-native'
import * as Location from 'expo-location';
import { Button } from "native-base";

const RouteMap = ({route}:any) => {

  let latitude:number = route.params?.paramKey[0];
  let longitude:number = route.params?.paramKey[1];
  let reqId:string = route.params?.paramKey[2];

  console.log("blink twiccce",  route.params?.paramKey)


  const [latitudeUser,setLatitudeUser] = useState();
  const [longitudeUser,setLongitudeUser] = useState();

  const [location,setLocation] = useState();

  const updateRequestStatus = async () =>{

    try{
     console.warn("JUST ARRIVED REQUEST",reqId);
            await fetch(`https://5466-105-224-65-25.ngrok-free.app/ServiceRequestUpdateStatus/${reqId}`,{
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(
                 {
                  Accepted:true
                })
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



  const getPermissions = async() =>{

    let {status} = await Location.requestBackgroundPermissionsAsync();
    if(status !== 'granted') {
     console.log("Please grant location permissions");
     return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);

    console.log(currentLocation.coords.latitude);
    console.log(currentLocation.coords.longitude);

    setLatitudeUser(currentLocation.coords.latitude);
    setLongitudeUser(currentLocation.coords.longitude);


   // console.log("BITCH IM HERE AS THE DRIVER:" ,latitudeUser,longitudeUser)

 };

 useEffect(() =>{
    getPermissions();

},[]);


let  mylat:number = latitudeUser? latitudeUser: 0;
let  mylong:number = longitudeUser? longitudeUser:0;
console.log("DIM",mylat, mylong);


    const coordinates = [
        {
            latitude: latitude,
            longitude: longitude
        },
        {
            latitude:  mylat,
             longitude: mylong
        }
    ];
    console.log("coordsss",coordinates[1])

    const state= {

        region: {
          latitude: latitude ? latitude :0,
          longitude: longitude ? longitude:0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
      };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBE7eraggD4Ut8Nybtq-1KaPCE8LG4P8eU';
    return (
        <MapView   style={styles.map} initialRegion={state.region}>
           <Marker coordinate={coordinates[0]} title={"Request Location"} description={"Pinned Location for customer"}/>
           <Marker coordinate={coordinates[1]}/>
            <MapViewDirections
                origin={coordinates[1]}
                destination={coordinates[0]}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="red">
            </MapViewDirections>
            {/* <Button onPress={() => updateRequestStatus()}>ACCEPT REQUEST</Button> */}
        </MapView>
    )
}
export default RouteMap;
const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});