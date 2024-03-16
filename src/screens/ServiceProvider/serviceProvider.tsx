import { AlertDialog, Button, Center,  Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet,Text } from "react-native";
import BlockCard from "../../../components/CardComponent/BlockCard"
import Mdblockcard from "../../../components/CardComponent/mdBlockCard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Menu =({route}:any)=> {


  let Id: any = route.params.ParamKey[1];
  let typeService: any = route.params.ParamKey[0];

  const [data, setData] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const navigation = useNavigation();


  const getProviders = async () =>{
    await fetch(`https://5471-41-76-96-122.ngrok-free.app/GetProviderByService/${Id}`,{
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
    const handleItemPress = (name:string,servicefee:number) => {
       // Navigate to different screens based on item data

        if (typeService === 'oil and water') {
          navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee]});
        }
        if (typeService === 'Towing') {
          navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee]});
        }
        if (typeService === 'Jump Start') {
          navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee]});
         }
        if (typeService === 'Tyre Change') {
        navigation.navigate('Tyre',{Paramskeys: [name,typeService,servicefee]});
        }
        if (typeService === 'Fuel') {
         navigation.navigate('Fuel',{Paramskeys: [name,typeService,servicefee]});
        }
       if(typeService === 'Lock-Smith') {
         navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee]});
      }
    }
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
              <TouchableOpacity  onPress={()=> handleItemPress(item.Name,item.ServiceFee)}>
                 <Mdblockcard info={item}/>
                 </TouchableOpacity>
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