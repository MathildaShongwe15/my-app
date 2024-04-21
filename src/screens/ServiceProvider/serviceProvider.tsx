import { Button, Heading,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View,StyleSheet,Text } from "react-native";
import Mdblockcard from "../../../components/CardComponent/mdBlockCard";
import { useNavigation } from "@react-navigation/native";
import LoadingScreens from '../Home/LoadingPage';
import Icon from "react-native-vector-icons/AntDesign";
import { useAuth } from "../../../Context/AuthContext";
import { ProgressProvider, useStep } from "../../../Context/ProgressContext";
import Btn from '../../../components/ProgressComponent/ButtonComponent'
import ProgressIndicator from "../../../components/ProgressComponent/ProgressIndicator";
const Menu =({route}:any)=> {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  let ServiceId: any = route.params.ParamKey[1];
  let typeService: any = route.params.ParamKey[0];

  const getProviders = async () =>{

    await fetch(`https://content-calm-skunk.ngrok-free.app/GetProviderByService/${ServiceId}`,{
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
      .then(data => (setData(data.providers),setIsLoading(false)))
      .catch(err => console.log(err))
};

const getContent = () =>{
  const {updateProgress} = useStep()
  if(isLoading){
    return <LoadingScreens/>
  }
  return(
  <View style={styles.Container}>
    <View style={{flexDirection: 'row'}}>
  <Heading style={styles.Heading1}>
   Choose a Service Provider
 </Heading>
 <Icon name={"caretright"} size={15} color={"#07137D"} style={{marginTop:30, marginLeft:10}} />
</View>
 <Text style={styles.sub}>All services you need </Text>

 <FlatList
    data={data}
    renderItem={({item}) => {
      return (
        <TouchableOpacity  onPress={()=> handleItemPress(item.Name,item.ServiceFee, item.Id)}>
           <Mdblockcard info={item}/>
           </TouchableOpacity>
      );
    }}
  />
          <Button width={100}height={10} onPress={updateProgress}>Hello</Button>
</View>
)
}

useEffect(() =>{
getProviders()
},[])

    const handleItemPress = (name:string,servicefee:number,ProviderId:string) => {

        if (typeService === 'oil and water') {
          navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee,ServiceId,ProviderId]});
        }
        if (typeService === 'Towing') {
          navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee,ServiceId,ProviderId]});
        }
        if (typeService === 'Jump Start') {
          navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee,ServiceId,ProviderId]});
         }
        if (typeService === 'Tyre Change') {
        navigation.navigate('Tyre',{Paramskeys: [name,typeService,servicefee,ServiceId,ProviderId]});
        }
        if (typeService === 'Fuel') {
         navigation.navigate('Fuel',{Paramskeys: [name,typeService,servicefee,ServiceId,ProviderId]});
        }
       if(typeService === 'Lock-Smith') {
         navigation.navigate('My Vehicles',{Paramskeys: [name,typeService,servicefee,ServiceId,ProviderId]});
      }
    }
     return(
      <NativeBaseProvider>
        {getContent()}
      </NativeBaseProvider>
     );
}

export default Menu;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", },
  Heading:{marginLeft:20,marginTop:30,color:"#07137D"},
  Heading1:{marginLeft:20,marginTop:20,color:"#07137D", fontWeight:'500', fontSize:22},
  sub:{marginLeft:20,marginTop:5,color:"#07137D"}
});