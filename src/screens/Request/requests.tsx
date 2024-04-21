
import { Box, FlatList, HStack, Heading, Spacer, VStack,Text, NativeBaseProvider, Button, Center} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid'
import { StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
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


   const navigation = useNavigation();
   const data = [{
    id: "1",
    headingVehicle: "Vehicle:",
    headingRegistration: "Registration number:",
    headingColor:"Color:",
    headingService:"Service Type:",
    headingLocation:"Service Provider:",

    valueVehicle: brand + " " +model,
    valueReg:color,
    valueColor:reg,
    valueService:type,
    valueLocation:provider,
  },
  {
    id: "2",
    headingVehicle: "Booking fee:",
    headingRegistration: "Service fee:",

    valueVehicle:"R 100.00",
    valueReg:"R "+ fee + ".00",
    valueLocation:"R 227.00",
  },

];




useEffect(() =>{

},[])

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
                    <Button  size="md" bg={'#07137D'}  colorScheme="blue" mt="5" w="180" ml='2'  h="50" onPress={() =>{ navigation.navigate('Maps', {paramkey: [provider,brand,model,serviceId,VehicleId,providerId]})}} >
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
