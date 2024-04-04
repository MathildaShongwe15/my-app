import { useNavigation } from "@react-navigation/native";
import {Text, Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreens from '../Home/LoadingPage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment'
const ReqInfo = ({route}:any) => {

let reqId:number = route.params.ParamKey;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [latitude, setLat] = useState();
  const [longitude, setlong] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const updateStats = async () =>{

    try{
     const Id = AsyncStorage.getItem("PROVID")
            await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/ServiceRequestUpdate/${Id}`,{
                method: 'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({reqPending:0,reqCancelled:0, reqCompleted:+ 1, reqLogged:1 })


                }) .then(response => {
                 if(!response.ok){
                   throw new Error('Network response not ok'),
                   console.log(response)
                 }
                 console.log("response is okay", response)

                 return response.json();
               })

     }
     catch(err){
       console.error(err)
     }
     };
  const getRequestSelected = async () =>{
        await fetch(`https://enormous-reasonably-raptor.ngrok-free.app/AllServiceRequestsById/${reqId}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
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
          .then(data => (setData(data.requests),setIsLoading(false),setlong(data.requests.Longitude), setLat(data.requests.Latitude)))
          .catch(err => console.log(err))
  }

  const value:any =  AsyncStorage.getItem("LAT");

useEffect(()=>{
    getRequestSelected();

},[])

const navigation = useNavigation();
const getContent = () =>{
  if(isLoading){
    return <LoadingScreens/>
  }
  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <VStack space={3} mt="2">
              <Text style={{fontWeight:'400', fontSize:18, color:"#07137D", marginTop:0}}>Service Request for {data.Users.First_Name} { data.Users.Last_Name} </Text>
              <FormControl>
                <FormControl.Label>Date and Time</FormControl.Label>
                <Input variant="filled" editable={false}  placeholder={moment(data.CreatedAt).format('MMMM Do YYYY, h:mm:ss a')}  bg="muted.50"   value={firstName} onChangeText={text => setFirstName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Service Type</FormControl.Label>
                <Input variant="filled" placeholder={data.Services.Type}  bg="muted.50"  value={lastName} onChangeText={text => setLastName(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Vehicle Registration Number</FormControl.Label>
                <Input variant="filled" placeholder={data.Vehicle.RegNo}  bg="muted.50"  value={email} onChangeText={text => setEmail(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Vehicle Brand</FormControl.Label>
                <Input variant="filled" placeholder={data.Vehicle.VehicleBrand} bg="muted.50"  value={phoneNumber} onChangeText={text => setPhoneNumber(text)}  />
              </FormControl>
              <FormControl>
                <FormControl.Label>Vehicle Model</FormControl.Label>
                <Input variant="filled" placeholder={data.Vehicle.VehicleModel} bg="muted.50"  value={phoneNumber} onChangeText={text => setPhoneNumber(text)}  />
              </FormControl>
              <FormControl>
              <FormControl.Label>Additional Information</FormControl.Label>
                <Input variant="filled" placeholder={data.Vehicle.Description} bg="muted.50"  value={phoneNumber} onChangeText={text => setPhoneNumber(text)}  />
              </FormControl>
               <Button size="md" colorScheme="blue" mt="5" width={280} backgroundColor={"#07137D"} onPress={()=> navigation.navigate("RouteMap",{paramKey:[latitude,longitude,reqId]})}>
                  Accept and View Pinned Location
            </Button>
            </VStack>
          </Box>
        </Center>
      </View>
    </NativeBaseProvider>
  );
}

  return(
    <NativeBaseProvider>
       {getContent()}
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white", alignItems: "center" },
});
export default ReqInfo;
