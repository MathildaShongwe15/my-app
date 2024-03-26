
import { AlertDialog, Box, Button, Center,  NativeBaseProvider, VStack, useToast,Text} from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";



const CarHistory =()=> {

 //console.warn(typeService)
  const [brand, setVehicleBrand] = useState("");
  const [brand1, setVehicleBrand1] = useState("");
  const [reg1, setVehicleReg1] = useState("");
  const [color1, setColor] = useState("");
  const [model1, setVehicleModel1] = useState("");


  // setserviceType(type1);
  // console.warn(type);

  const [data, setData] = useState([]);
  const [length, getlength] = useState(0);
  const [id,setId]=useState('');
  const [id2,setId2]=useState([]);
  const [statusCode, setStatus] = useState({});




  const getVehicles = async () =>{
    let Id = await AsyncStorage.getItem("USERID")
    console.log("VEHICLES ID",Id);
    await fetch(`https://5466-105-224-65-25.ngrok-free.app/GetVehicleById/${Id}`,{
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

  await fetch(`https://5466-105-224-65-25.ngrok-free.app/DeleteVehicle/${id2}`,{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json',
      },
    })
      .then(response => {
        if(!response.ok){
          setStatus(response.status);
          throw new Error('Network response not ok'),
          console.log(response)
        }
        setStatus(response.status);
        console.log("response is okay", response)
        return response.json();
      })
      .catch(err => console.log(err))
};

const toast = useToast();
const checkToast = () =>{
  if(statusCode == 200){

        toast.show({
          placement: "bottom",
          render: () => {
            return <Box bg="#65B741" px="10" py="5" mb={705} rounded="md" >
                    <Text>You have successfully deleted your vehicle</Text>
                  </Box>
          }
        })

  }
  if(statusCode == 400){

      toast.show({
        render: () => {
          return <Box bg="red.500"px="10" py="5" mb={705}  rounded="md" >
                  <Text>Something went wrong!</Text>
                </Box>
        }
      })

  }
}

const checkResponse=()=>{
  checkToast();
  DeleteVechicle();

}
useEffect(() =>{
  getVehicles();

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
            <AlertDialog.Header >Manage Car History</AlertDialog.Header>
            <AlertDialog.Body>
              What would you like to do?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                variant={'subtle'}
                  colorScheme="red"
                  onPress={checkResponse}
                  ref={cancelRef}
                  onClose={onClose}
                >
                  Delete
                </Button>
                <Button  colorScheme="blue"  bgColor={'#07137D'} onPress={() => navigation.navigate('EditVehicles', {ParamKey:id2})}>
                  Update this vehicle
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
              <TouchableOpacity onPress={() => {setIsOpen(!isOpen),setId2(item.Id)}}>
                 <SmallCard info={item}/>
              </TouchableOpacity>
            );
          }}
        /></SafeAreaView>
        <Button onPress={() => navigation.navigate("Registration Car")}  marginTop={"5"} marginLeft={"350"} width={"50"} height={"50"} bgColor={"blue.900"}><Icon name="pluscircle" size={20} color={"white"}/></Button>
                </View>
      </NativeBaseProvider>


     );
}


export default CarHistory;

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white",},
});