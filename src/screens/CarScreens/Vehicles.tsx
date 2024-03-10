
import { AlertDialog, Button, Center,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


const CarHistory =()=> {
  const [brand, setVehicleBrand] = useState([]);
  const [reg, setVehicleReg] = useState([]);
  const [data, setData] = useState([]);
  const[length, getlength] = useState(0);
  const [id,setId]=useState('');


  const getVehicles = async () =>{

    await fetch('https://c43a-41-76-96-122.ngrok-free.app/GetAllVehicles',{
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
        .then(data => (setData(data.vehicle),getlength(data.vehicle.length),setVehicleReg(data.vehicle[0].VehicleModel),(setVehicleBrand(data.vehicle[0].VehicleBrand)),(setId(data.vehicle[1].Id))))
      //   .then(data => {const renderData = data.vehicle.forEach(element => {
      //     return(
      //     <SmallCard info={element}/>
      // )
      //   });})
        .catch(err => console.log(err))
        AsyncStorage.setItem("ID",id)
        console.log("id has arrived",await AsyncStorage.getItem("ID"))
};

console.log("Bitch",data);
const loopingId =()=>{
 for(let i = 0; i < data.length;i++){
     return data[i].Id;
 }
}
const DeleteVechicle = async() =>{


  const ID = AsyncStorage.getItem("ID");

  console.log(await ID);
  await fetch('https://c43a-41-76-96-122.ngrok-free.app/DeleteVehicle/2bqo0e8b-6fab-423f-b582-a2d9258906b2',{
      method:'DELETE',
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
  getVehicles()

},[])
const count: Int32 = 0;


const HistoryData = [
   {
      name: "Car " + (count  + 1) +": " + brand ,
      RegNumber:"Registration Number:" + reg  ,
      id:1
    },

  ];
   // countT = 0;
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = React.useState(false);

   const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);
     return(

      <NativeBaseProvider>
       <View style={styles.Container}>
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
              <Button.Group space={2}>
                <Button
                  colorScheme="red"
                  onPress={DeleteVechicle}
                  ref={cancelRef}
                >
                  Delete
                </Button>
                <Button variant="outline" colorScheme="blue" onPress={onClose}>
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
          // keyExtractor={(x,i :Int32 =0) => i}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                 <SmallCard info={item}/>
              </TouchableOpacity>



            );
          }}
        />
       {/* <Button onPress={() => navigation.navigate("Requests")}  marginTop={"490"} marginLeft={"350"} width={"50"} height={"50"} bgColor={"blue.900"}><Icon name="pluscircle" size={20} color={"white"}/></Button> */}

      </SafeAreaView></View>
      </NativeBaseProvider>


     );
}


export default CarHistory;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white",},
});