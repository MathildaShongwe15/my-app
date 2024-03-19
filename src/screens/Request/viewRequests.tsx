import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack,Text, NativeBaseProvider, Button} from "native-base";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Example = () => {
    // const data = [{
    //   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //   fullName: "Aafreen Khan",
    //   timeStamp: "12:47 PM",
    //   recentText: "Towing Request",
    //   avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    // }, {
    //   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //   fullName: "Sujitha Mathur",
    //   timeStamp: "11:11 PM",
    //   recentText: "Petrol Request",
    //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    // }, {
    //   id: "58694a0f-3da1-471f-bd96-145571e29d72",
    //   fullName: "Anci Barroco",
    //   timeStamp: "6:22 PM",
    //   recentText: "Towing Request",
    //   avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    // }, {
    //   id: "68694a0f-3da1-431f-bd56-142371e29d72",
    //   fullName: "Aniket Kumar",
    //   timeStamp: "8:56 PM",
    //   recentText: "Towing Request",
    //   avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    // }, ];
   // const switchNavigator = createSwitchNavigator();
   const navigation = useNavigation();
   const [serviceName, setServiceName] = useState("");
   const [userFName, setFName] = useState("");
   const [userLName, setLName] = useState("");
   const [timeStamp, setTimeStamp] = useState("");
   const [data, setData] = useState("");



   const getReq = async () =>{

    await fetch('https://cb5c-41-76-96-122.ngrok-free.app/UserRequestByProviderId/546426ef-30f6-4406-9646-1dd310aa38e6',{
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
        .then(data => (setData(data.requests),setServiceName(data.requests.Services.Type),setFName(data.requests.Users.First_Name),setLName(data.requests.Users.Last_Name),setTimeStamp(data.requests.CreatedAt)))
        .catch(err => console.log(err))

};


useEffect(() =>{
  getReq()

},[])



    return <NativeBaseProvider>

       {/* <SideBar/> */}
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
            uri: "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?w=740&t=st=1710661339~exp=1710661939~hmac=02615f98301244ad254bf67ed93759fa934241ff4876a5dc072557483adb2766"
          }} />
                <VStack>
                  <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
                    {item.Users.First_Name} {item.Users.Last_Name}
                  </Text>
                  <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>

                    {item.Services.Type} Request
                  </Text>
                <Text fontSize="xs" _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" alignSelf="flex-start">
                  {item.CreatedAt}
                </Text>
                </VStack>
                <Spacer />
                <VStack>
                <Button
                mt="0"
                mr="5"
                w="100"
                colorScheme="green"
                variant="outline"
               onPress={() => navigation.navigate("Services")}
              >
                Accept
              </Button>
              </VStack>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
      </Box></NativeBaseProvider>
      ;
  };

  export default Example;