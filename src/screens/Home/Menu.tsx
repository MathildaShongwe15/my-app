import { AlertDialog, Button, Center,  Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text } from "react-native";
import BlockCard from "../../../components/CardComponent/BlockCard"
import LgBlockCard from "../../../components/CardComponent/LgBlockCard"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';

import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import AntIcon from "react-native-vector-icons/AntDesign";

const Menu =()=> {
  const [data, setData] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const navigation = useNavigation();






  const getServices = async () =>{
    await fetch('https://0c3c-41-76-96-122.ngrok-free.app/AllServices',{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
      },})
      .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok'),
          console.log(response)
        }
        console.log("response is okay", response)
        return response.json();
      })
      .then(data => (setData(data.services)))
      .catch(err => console.log(err))



};
const getServicesById = async() =>{

  await fetch(`https://0c3c-41-76-96-122.ngrok-free.app/GetServiceById/${serviceId}`,{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
      },
    })
      .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok'),
          console.log(response)
        }
        console.log("response is okay", response)
        return response.json();
      })
      .catch(err => console.log(err))
};
useEffect(() =>{
  getServices()

},[])
const count: Int32 = 0;
const Categories = [
    {
      image: require("../../../assets/pics/Prof.png"),
      name: "Home " ,
      RegNumber:"Return home" ,
      nav:"Home",
      id:1
    },
    {
      image: require("../../../assets/pics/carIcon.png"),
      name: "My Vehicles"  ,
      RegNumber:"Vehicles Added" ,
      nav:"My Vehicles",
      id:2
    },
    {
      image: require("../../../assets/pics/cart.png"),
      name: "Requests",
      RegNumber:"Pending requests",
      nav:"Requests",
      id:3
    },
    {
      image: require("../../../assets/pics/img.png"),
      name: "Profile"  ,
      RegNumber:"Update user Profile" ,
      nav:"Profile",
      id:4
    },
    {
        image: require("../../../assets/pics/History.png"),
        name: "Request History"  ,
        RegNumber:"Past Requests" ,
        id:5
      },
      {
        image: require("../../../assets/pics/settings.png"),
        name: "Settings"  ,
        RegNumber:"Manage account" ,
        id:6
      },
  ];
  const requests = [
    {
      image: require("../../../assets/pics/Prof.png"),
      name: "Home " ,
      RegNumber:"Return home" ,
      nav:"Home",
      id:6
    },
    {
      image: require("../../../assets/pics/carIcon.png"),
      name: "My Vehicles"  ,
      RegNumber:"Vehicles Added" ,
      nav:"My Vehicles",
      id:5
    },
    {
      image: require("../../../assets/pics/cart.png"),
      name: "Requests",
      RegNumber:"Pending requests",
      nav:"Requests",
      id:9
    },
    {
      image: require("../../../assets/pics/img.png"),
      name: "Profile"  ,
      RegNumber:"Update user Profile" ,
      nav:"Profile",
      id:10
    },
    {
        image: require("../../../assets/pics/History.png"),
        name: "Request History"  ,
        RegNumber:"Past Requests" ,
        id:14
      },
      {
        image: require("../../../assets/pics/settings.png"),
        name: "Settings"  ,
        RegNumber:"Manage account" ,
        id:12
      },
  ];

  // Function to handle item press



     return(

      <NativeBaseProvider>
       <View style={styles.Container}>
       <Heading style={styles.Heading}>
         Browse categories

       </Heading>
       <Text style={styles.sub}>Navigate more</Text>
        <FlatList
          data={Categories}
          renderItem={({item}) => {
            return (
              <TouchableOpacity  onPress={() => navigation.navigate(item.nav , setServiceId(item.Id))}>
                 <BlockCard info={item}/>

              </TouchableOpacity>
            );
          }}
          keyExtractor={(items) => items.id.toString()}
          horizontal

          // showsHorizontalScrollIndicator={false}
        //  alwaysBounceVertical={false}
        />

       <Heading style={styles.Heading1}>
         Make a new Request


       </Heading>
       <Text style={styles.sub}>Request Services You Need</Text>

        <FlatList
          data={data}
          renderItem={({item}) => {
            return (

                 <LgBlockCard info={item}/>

            );
          }}

          horizontal
          showsHorizontalScrollIndicator={false}


        />

 </View>


      </NativeBaseProvider>


     );
}


export default Menu;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", },
  Heading:{marginLeft:20,marginTop:30,color:"#07137D"},
  Heading1:{marginLeft:20,marginTop:20,color:"#07137D"},
  sub:{marginLeft:20,marginTop:5,color:"#AAAAAA"}
});