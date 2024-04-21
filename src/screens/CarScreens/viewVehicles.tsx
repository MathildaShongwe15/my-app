
import { AlertDialog, Box, Button, Center,  NativeBaseProvider, VStack, useToast,Text} from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View,StyleSheet } from "react-native";
import SmallCard from "../../../components/CardComponent/CardSmall"
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../Context/AuthContext";


const CarHistory =()=> {

  const [data, setData] = useState([]);
  const [id2,setId2]=useState([]);
  const [statusCode, setStatus] = useState({});

  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const{userState}:any = useAuth();

  const getVehicles = async () =>{
    let Id = await AsyncStorage.getItem("USERID");

    await fetch(`https://content-calm-skunk.ngrok-free.app/GetVehicleByUserId/${Id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },})
        .then(response => {
          if(!response.ok){
            throw new Error('Network response not ok')
          }
          console.log("response is okay", response)
          return response.json();
        })
        .then(data => (setData(data.vehicle), console.log(data.vehicle)))
        .catch(err => console.log(err))
};

const DeleteVechicle = async() =>{
  await fetch(`https://content-calm-skunk.ngrok-free.app/DeleteVehicle/${id2}`,{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json',
      },
    })
      .then(response => {
        if(!response.ok){
          setStatus(response.status);
          throw new Error('Network response not ok')
        }
        setStatus(response.status);
        console.log("response is okay", response)
        return response.json();
      })
      .catch(err => console.log(err))
      getVehicles();
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

useFocusEffect(
  React.useCallback(() => {
    // Fetch data when the screen is focused (navigated back to)
    getVehicles();
  }, [])
);

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