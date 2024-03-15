import { AlertDialog, Button, Center,  Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text } from "react-native";
import BlockCard from "../../../components/CardComponent/BlockCard"
import Mdblockcard from "../../../components/CardComponent/mdBlockCard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Menu =({route}:any)=> {


  let Id: any = route.params.ParamKey[1];

  const [data, setData] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const navigation = useNavigation();


  const getProviders = async () =>{
    await fetch(`https://9b31-105-224-43-9.ngrok-free.app/GetProviderByService/${Id}`,{
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
      .then(data => (setData(data.providers)))
      .catch(err => console.log(err))



};

useEffect(() =>{
getProviders()

},[])


     return(

      <NativeBaseProvider>
       <View style={styles.Container}>
        <Heading style={styles.Heading1}>
         Choose a Service Provider
       </Heading>
       <Text style={styles.sub}>All services you need </Text>

       <FlatList
          data={data}
          renderItem={({item}) => {
            return (
                 <Mdblockcard info={item}/>

            );
          }}
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