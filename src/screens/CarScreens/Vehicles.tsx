
import { AlertDialog, Button, Center,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import LoadingScreens from '../Home/LoadingPage';



const CarHistory =({route} :any)=> {



   let Provider:string = route.params.Paramskeys[0];
   let type:string = route.params.Paramskeys[1];
   let fee:number = route.params.Paramskeys[2];
   let serviceId:number = route.params.Paramskeys[3];
   let providerId:string =  route.params.Paramskeys[4];

 console.warn(providerId);
  const [brand, setVehicleBrand] = useState("");
  const [brand1, setVehicleBrand1] = useState("");
  const [reg1, setVehicleReg1] = useState("");
  const [color1, setColor] = useState("");
  const [model1, setVehicleModel1] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // setserviceType(type1);
  // console.warn(type);

  const [data, setData] = useState([]);
  const [length, getlength] = useState(0);
  const [id,setId]=useState('');
  const [id2,setId2]=useState([]);




  const getVehicles = async () =>{

    await fetch('https://5158-41-76-96-122.ngrok-free.app/GetVehicleById/ba0d8023-5c3d-4dd7-83a2-d6d80c2c3f43',{
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
        .then(data => (setData(data.vehicle),setId(data.vehicle.Id),console.log(data.vehicle),setIsLoading(false)))
        .catch(err => console.log(err))
};

const getContent = () =>{

  if(isLoading){
    return <LoadingScreens/>
  }
  return      <View style={styles.Container}>
  <Center>
  <AlertDialog
    leastDestructiveRef={cancelRef}
    isOpen={isOpen}
    onClose={onClose}
  >
    <AlertDialog.Content>
      <AlertDialog.CloseButton />
      <AlertDialog.Header>Manage Car History</AlertDialog.Header>
      <AlertDialog.Body>
        What would you like to do?
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <Button.Group space={1}>
          <Button variant="outline" colorScheme="blue" onPress={() => navigation.navigate('Requests', {paramKey:[brand1,reg1, color1, model1,Provider,type,fee,serviceId,providerId,id2]})}>
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

    const navigation = useNavigation();
    const [isOpen, setIsOpen] = React.useState(false);

   const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);
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