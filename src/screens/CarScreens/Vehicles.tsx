
import { AlertDialog, Button, Center,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import LoadingScreens from '../Home/LoadingPage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const CarHistory =({route} :any)=> {

   let Provider:string = route.params.Paramskeys[0];
   let type:string = route.params.Paramskeys[1];
   let fee:number = route.params.Paramskeys[2];
   let serviceId:number = route.params.Paramskeys[3];
   let providerId:string =  route.params.Paramskeys[4];


  const [brand1, setVehicleBrand1] = useState("");
  const [reg1, setVehicleReg1] = useState("");
  const [color1, setColor] = useState("");
  const [model1, setVehicleModel1] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  const [id,setId]= useState('');
  const [id2,setId2]=useState([]);
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const getVehicles = async () =>{
   let Id = await AsyncStorage.getItem("USERID")

   console.log(Id);

    await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/GetVehicleByUserId/${Id}`,{
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
        .then(data => (setData(data.vehicle),setId(data.vehicle.Id),setIsLoading(false)))
        .catch(err => console.log(err))
};

const getContent = () =>{

  if(isLoading){
    return <LoadingScreens/>
  }
  return <View style={styles.Container}>
  <Center>
  <AlertDialog
    leastDestructiveRef={cancelRef}
    isOpen={isOpen}
    onClose={onClose}>
    <AlertDialog.Content>
      <AlertDialog.CloseButton />
      <AlertDialog.Header>Manage Car History</AlertDialog.Header>
      <AlertDialog.Body> What would you like to do?</AlertDialog.Body>
      <AlertDialog.Footer>
        <Button.Group space={0} alignContent={'center'} justifyContent={'center'}>
          <Button colorScheme="blue"  bg='#07137D' onPress={() => navigation.navigate('Requests', {paramKey:[brand1,reg1, color1, model1,Provider,type,fee,serviceId,providerId,id2]})}>
            Choose this vehicle
          </Button>
        </Button.Group>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
</Center>
<SafeAreaView>
  <FlatList
    data={data}
    renderItem={({item}) => {
      return (
        <TouchableOpacity onPress={() => {setIsOpen(!isOpen),setId2(item.Id), setVehicleBrand1(item.VehicleBrand), setVehicleReg1(item.RegNo), setVehicleModel1(item.VehicleModel), setColor(item.Color)}}>
           <SmallCard info={item}/>
        </TouchableOpacity>
      );
    }}
  /></SafeAreaView>
  <Button onPress={() => navigation.navigate("Registration Car")}  marginTop={"50"} marginLeft={"350"} width={"50"} height={"50"} bgColor={"blue.900"}><Icon name="pluscircle" size={20} color={"white"}/></Button>
</View>
}

useEffect(() =>{
  getVehicles()
},[])

     return(
      <NativeBaseProvider>
      {getContent()}
      </NativeBaseProvider>
     );
}

export default CarHistory;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white",},
});