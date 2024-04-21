import React, { useEffect, useState } from "react";
import MapView, {Marker, Polyline} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {StyleSheet} from 'react-native'
import * as Location from 'expo-location';

const RouteMap = ({route}:any) => {

  const GOOGLE_MAPS_APIKEY = 'AIzaSyBE7eraggD4Ut8Nybtq-1KaPCE8LG4P8eU';

  let latitude:number = route.params?.paramKey[0];
  let longitude:number = route.params?.paramKey[1];
  let reqId:string = route.params?.paramKey[2];

  const [latitudeUser,setLatitudeUser] = useState();
  const [longitudeUser,setLongitudeUser] = useState();
  const [location,setLocation] = useState();

  const updateRequestStatus = async () =>{

    try{
            await fetch(`https://ec9b-41-76-96-122.ngrok-free.app/ServiceRequestUpdateStatus/${reqId}`,{
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
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if(status !== 'granted') {
     console.log("Please grant location permissions");
     return;
    }
    else{
      try{
        let currentLocation:any = await Location.getCurrentPositionAsync({});
         setLocation(currentLocation);
         setLatitudeUser(currentLocation.coords.latitude);
         setLongitudeUser(currentLocation.coords.longitude);
      }
      catch(error){
          getPermissions();
      }
    }
    console.log(currentLocation.coords.latitude);
    console.log(currentLocation.coords.longitude);
 };

 useEffect(() =>{
    getPermissions();

},[]);

let  mylat:number = latitudeUser? latitudeUser: 0;
let  mylong:number = longitudeUser? longitudeUser:0;

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

    const state= {
        region: {
          latitude: latitude ? latitude :0,
          longitude: longitude ? longitude:0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
      };

    return (
        <MapView  style={styles.map} initialRegion={state.region}>
           <Marker coordinate={coordinates[0]} title={"Request Location"} description={"Pinned Location for customer"}/>
           <Marker coordinate={coordinates[1]}/>
                 {/* <Polyline coordinates={coordinates} strokeWidth={5}/> */}

            <MapViewDirections
                origin={coordinates[1]}
                destination={coordinates[0]}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
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