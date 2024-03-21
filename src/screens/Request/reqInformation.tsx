import { useNavigation } from "@react-navigation/native";
import {Text, Avatar,Box,Center,FormControl,Input,NativeBaseProvider,VStack,View,Button} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import LoadingScreens from '../Home/LoadingPage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ReqInfo = ({route}:any) => {

let reqId:number = route.params.ParamKey;
console.log("reqid", reqId)

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [latitude, setLat] = useState();
  const [longitude, setlong] = useState();

  const [isLoading, setIsLoading] = useState(true);

 const [data, setData] = useState({});

  const getRequestSelected = async () =>{
        await fetch(`https://5158-41-76-96-122.ngrok-free.app/AllServiceRequestsById/${reqId}`,{

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
   console.log("blink",longitude, latitude)
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
            <Center>
              <Avatar
                bg="amber.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="lg"
              >
                NB
                <Avatar.Badge bg="yellow.500" />
              </Avatar>
            </Center>
            <VStack space={3} mt="2">
              <Text style={{fontWeight:'400', fontSize:16, color:"#07137D", marginTop:5}}>Service Request for {data.Users.First_Name} { data.Users.Last_Name} </Text>
              <FormControl>
                <FormControl.Label>Date and Time</FormControl.Label>
                <Input variant="filled"  placeholder={data.CreatedAt}  bg="muted.50"   value={firstName} onChangeText={text => setFirstName(text)} />
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

               <Button size="lg" colorScheme="blue" mt="10" width={280} backgroundColor={"#07137D"} onPress={()=> navigation.navigate("RouteMap", {paramKey:[latitude,longitude,reqId]})}>
                  View Pinned Location
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
