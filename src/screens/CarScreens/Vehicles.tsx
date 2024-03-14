
import { AlertDialog, Button, Center,  NativeBaseProvider, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';



const CarHistory =({route} :any)=> {

  let typeService:string = route.params.Paramskeys ?? 'no Data';

 console.warn(typeService)
  const [brand, setVehicleBrand] = useState("");
  const [brand1, setVehicleBrand1] = useState("");
  const [reg1, setVehicleReg1] = useState("");
  const [color1, setColor] = useState("");
  const [model1, setVehicleModel1] = useState("");


  // setserviceType(type1);
  // console.warn(type);

  const [data, setData] = useState([]);
  const[length, getlength] = useState(0);
  const [id,setId]=useState('');
  const [id2,setId2]=useState([]);




  const getVehicles = async () =>{

    await fetch('https://0c3c-41-76-96-122.ngrok-free.app/GetAllVehicles',{
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
        .then(data => (setData(data.vehicle), console.log(data.vehicle)))
        .catch(err => console.log(err))

};


const DeleteVechicle = async() =>{

  await fetch(`https://0c3c-41-76-96-122.ngrok-free.app/DeleteVehicle/${id2}`,{
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
                <Button variant="outline" colorScheme="blue" onPress={() => navigation.navigate('Requests', {paramKey:[brand1,reg1, color1, model1,typeService]})}>
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
        <Button onPress={() => navigation.navigate("Registration Car")}  marginTop={"490"} marginLeft={"350"} width={"50"} height={"50"} bgColor={"blue.900"}><Icon name="pluscircle" size={20} color={"white"}/></Button>
                </View>
      </NativeBaseProvider>


     );
}


export default CarHistory;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white",},
});