import { Avatar, Box, FlatList, HStack, Heading, Spacer, VStack,Text, NativeBaseProvider, Button} from "native-base";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Example = () => {
    const data = [{
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Towing Request",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Petrol Request",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Towing Request",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "Towing Request",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, ];
   // const switchNavigator = createSwitchNavigator();
   const navigation = useNavigation();
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