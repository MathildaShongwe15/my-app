import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack,Text, NativeBaseProvider, Button, Center} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid'
import { StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/AntDesign";
const RequestsCart = ({route}:any) => {

  let brand:string = route.params.paramKey[0];
  let color:string =route.params.paramKey[1];
  let reg:string =route.params.paramKey[2];
  let model:string = route.params.paramKey[3];
  let type:string =route.params.paramKey[5];
  let provider:string=route.params.paramKey[4];
  let fee:number=route.params.paramKey[6];
  let serviceId:number = route.params.paramKey[7];
  let providerId:number = route.params.paramKey[8];
  let VehicleId:number = route.params.paramKey[9];
  let VatAdded = (fee + 100) *  0.15;



  const [reqId, setReqId] = useState("");


console.warn(serviceId,providerId,VehicleId);

  console.warn(provider);
   const navigation = useNavigation();
   const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    headingVehicle: "Vehicle:",
    headingRegistration: "Registration number:",
    headingColor:"Color:",
    headingService:"Service Type:",
    headingLocation:"Service Provider:",

    valueVehicle: brand + " " +model,
    valueReg:reg,
    valueColor:color,
    valueService:type,
    valueLocation:provider,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    headingVehicle: "Booking fee:",
    headingRegistration: "Service fee:",
    headingService:"VAT(15%):",
    headingLocation:"Total:",

    valueVehicle:"R 100.00",
    valueReg:"R "+ fee + ".00",
    valueService:"R " + VatAdded + ".00",
    valueLocation:"R 227.00",
  },

];
function RemovePendingRequest ()  {


route.params.paramKey.length = 0;
route.params.paramKey[0] = "";
console.warn(route.params.paramKey[0]);


}


const postServiceRequest = async () =>{

  await fetch('https://5466-105-224-65-25.ngrok-free.app/ServiceRequestCreate',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body: JSON.stringify(
        {
          Id:uuid.v4(),
          serviceid:serviceId,
          userid:"ba0d8023-5c3d-4dd7-83a2-d6d80c2c3f43",
          vehicleid:VehicleId,
          serviceProviderId:providerId,
          qauntity:0,
          type:"",
          spare:1,
          amount: 0,

        })

      })
      .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok'),
          console.log(response)
        }
        console.log("response is okay", response)

        return response.json();
      })
      .then(data =>(setReqId(data.request.Id),console.log(reqId) ))
      .catch(err => console.log(err))
};


useEffect(() =>{

},[])
//const[requestNum,setRequestNum] = useState("");


  return(
  <Box  style={styles.Container}>

       <View style={{flexDirection: 'row'}}>
      <Heading fontSize="xl" p="4" pb="3" color={"#07137D"}  fontWeight={'500'}>
        Review Request Reciept
      </Heading>
      <Icon name={"profile"} size={25} color={"#07137D"} style={{marginTop:18, marginLeft:5}} />
      </View>
      <Text  style={styles.SubTitle}>Here is your Pending Request: </Text>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2"  backgroundColor={"#ffff"}>
            <HStack space={[2, 3]} justifyContent="space-between">

              <VStack marginLeft={5}>
                <Text _dark={{
            color: "warmGray.50"
          }} color="warmGray.600"  marginTop={0} fontSize={"sm"} fontWeight={'600'}>
                  {item.headingVehicle}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} bold  marginTop={3} fontSize={"sm"} fontWeight={'600'}>
                  {item.headingRegistration}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} bold  marginTop={3} fontSize={"sm"} fontWeight={'600'}>
                  {item.headingColor}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200",
          }} bold marginTop={3} fontSize={"sm"} fontWeight={'600'}>
                  {item.headingService}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} bold marginTop={3} fontSize={"sm"} fontWeight={'600'}>
                  {item.headingLocation}
                </Text>
              </VStack>
              <Spacer />
              <VStack>
              <Text fontSize="sm" _dark={{
          color: "warmGray.50"
        }} color="coolGray.500" alignSelf="flex-start">
                {item.valueVehicle}
              </Text>
              <Text fontSize="sm" _dark={{
          color: "warmGray.50"
        }} color="coolGray.500" alignSelf="flex-start"  marginRight={20} marginTop={4} >
                {item.valueReg}
              </Text>
              <Text fontSize="sm" _dark={{
          color: "warmGray.50"
        }} color="coolGray.500" alignSelf="flex-start"  marginRight={20} marginTop={4} >
                {item.valueColor}
              </Text>
              <Text fontSize="sm" _dark={{
          color: "warmGray.50"
        }} color="coolGray.500" alignSelf="flex-start"  marginRight={20} marginTop={5} >
                {item.valueService}
              </Text>
              <Text fontSize="sm" _dark={{
          color: "warmGray.50"
        }} color="coolGray.500" alignSelf="flex-start"  marginRight={20} marginTop={2} >
                {item.valueLocation}
              </Text>
          </VStack>
            </HStack>

          </Box>} keyExtractor={item => item.id} />
          <Center>

<Text style={styles.SubTitle2}>Please Note: Payment will be completed onsite</Text>

</Center>
<View style={{flexDirection: 'row'}}>


            <Button size="md" variant='subtle'  colorScheme="red" mt="5" mb="16" ml='5' w="180" h='50' onPress={() => navigation.navigate('BottomTabs',{screen: 'Menu'})} >
              Cancel Request
            </Button>
            <Button  size="md" bg={'#07137D'}  colorScheme="blue" mt="5" w="180" ml='2'  h="50" onPress={() =>{ postServiceRequest(),navigation.navigate('Maps', {paramkey: [provider,brand,model,serviceId,VehicleId,providerId,reqId]})}} >
              Confirm Request
            </Button>
            </View>



    </Box>

  );

  };
  const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "#fff"},
    Title:{marginTop:50, color:"#07137D"},
    SubTitle:{marginTop:0,color:"#07137D", marginLeft:20,fontWeight:"400"},
    SubTitle2:{marginBottom:130, padding:0,color:"#07137D",fontWeight:"700"},
    Img:{marginTop:20}

  });
  export default RequestsCart;