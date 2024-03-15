import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack,Text, NativeBaseProvider, Button, Center} from "native-base";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet} from "react-native";
const RequestsCart = ({route}:any) => {




   const navigation = useNavigation();
   const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    headingVehicle: "Vehicle:",
    headingRegistration: "Registration number:",
    headingColor:"Color:",
    headingService:"Service Type:",
    headingLocation:"Service Provider:",

    valueVehicle: route.params.paramKey[0] + " " +route.params.paramKey[3],
    valueReg:route.params.paramKey[1],
    valueColor:route.params.paramKey[2],
    valueService:route.params.paramKey[4],
    valueLocation:'route.params.paramKey[5]',

  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    headingVehicle: "Booking Charge:",
    headingRegistration: "Service Charge:",
    headingService:"Taxes:",
    headingLocation:"Total:",

    valueVehicle:"R 50.00",
    valueReg:"R 150.00",
    valueService:"R 27.00",
    valueLocation:"R 227.00",
  },

];
function RemovePendingRequest ()  {


route.params.paramKey.length = 0;
route.params.paramKey[0] = "";
console.warn(route.params.paramKey[0]);


}

useEffect(() =>{


},[])
  return <Box>

      <Heading fontSize="xl" p="4" pb="3" >
        Review Request Reciept
      </Heading>
      <Text  style={styles.SubTitle}>Request Number: R02563</Text>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2"  backgroundColor={"#EEEDEB"}>
            <HStack space={[2, 3]} justifyContent="space-between">

              <VStack marginLeft={5}>
                <Text _dark={{
            color: "warmGray.50"
          }} color="warmGray.600" bold marginTop={0} fontSize={"md"}>
                  {item.headingVehicle}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} bold  marginTop={3} fontSize={"md"}>
                  {item.headingRegistration}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} bold  marginTop={3} fontSize={"md"}>
                  {item.headingColor}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200",
          }} bold marginTop={3} fontSize={"md"}>
                  {item.headingService}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} bold marginTop={3} fontSize={"md"}>
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
        }} color="coolGray.500" alignSelf="flex-start"  marginRight={20} marginTop={4} >
                {item.valueLocation}
              </Text>
          </VStack>
            </HStack>

          </Box>} keyExtractor={item => item.id} />
          <Center>

<Text style={styles.SubTitle2}>Please Note: Payment will be completed onsite</Text>

</Center>
          <Center>
            <Button  size="md" variant="outline"  colorScheme="blue" mt="10" w="300" onPress={() =>{navigation.navigate('Order')}} >
              Confirm Request
            </Button>
            <Button size="md" variant="outline"  colorScheme="blue" mt="10" w="300" onPress={() => RemovePendingRequest()} >
              Clear Request
            </Button>

          </Center>


    </Box>;



  };
  const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: "white"},
    Title:{marginTop:50, color:"#07137D"},
    SubTitle:{marginTop:0,color:"#07137D", marginLeft:20,fontWeight:"700"},
    SubTitle2:{marginTop:10, padding:0,color:"#A8A196"},
    Img:{marginTop:20}

  });
  export default RequestsCart;