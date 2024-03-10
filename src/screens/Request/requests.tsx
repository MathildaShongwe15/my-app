import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack,Text, NativeBaseProvider, Button} from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Example = () => {
    
   
   const navigation = useNavigation();
   
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
        AsyncStorage.setItem("IDReq",id)
        console.log("id has arrived",await AsyncStorage.getItem("ID"))
};

    return <NativeBaseProvider>
      <Box>

        <Heading fontSize="xl" p="4" pb="3">
          Requests Pending
        </Heading>
        <FlatList data={data} renderItem={({
        item
      }) => <Box borderBottomWidth="0.2" _dark={{
        borderColor: "muted.50"
      }} borderColor="blue.900" pl={["0", "4"]} pr={["0", "5"]} py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" marginLeft="3" source={{
            uri: item.avatarUrl
          }} />
                <VStack>
                  <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
                    {item.fullName}
                  </Text>
                  <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                    {item.recentText}
                  </Text>
                  <Text fontSize="xs" _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
                </VStack>
                <Spacer />
                <Button
                mt="8"
                ml=""
                w="100"
                colorScheme="green"
                variant="outline"
               onPress={() => navigation.navigate("Services")}
              >
                Approve
              </Button>
              <Button
                mt="8"
                mr="50"
                w="100"
                colorScheme="red"
                variant="outline"
               onPress={() => navigation.navigate("Tyre")}
              >
                Decline
              </Button>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
      </Box></NativeBaseProvider>
      ;
  };

  export default Example;