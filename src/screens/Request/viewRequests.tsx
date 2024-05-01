import { Avatar, Box, FlatList, HStack, Spacer, VStack,Text, NativeBaseProvider, Button} from "native-base";
import React, { useEffect, useState } from "react";
import {  useNavigation } from "@react-navigation/native";
import LoadingScreens from '../../../components/LoadingComponent/loadingPage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../Context/AuthContext";

const ViewReq = () => {
   const [isLoading, setIsLoading] = useState(true);
   const navigation = useNavigation();
   const [data, setData] = useState("");
   const [id,setId]=useState('');


   const getReq = async () =>{
    let ProdID = await AsyncStorage.getItem("PROVID")

    await fetch(`https://mutt-one-calf.ngrok-free.app/UserRequestByProviderId/${ProdID}`,{
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
        .then(data => (setData(data.requests),setIsLoading(false)))
        .catch(err => console.log(err))

};


const getContent = () =>{

  if(isLoading){
    return <LoadingScreens/>
  }

   return  <Box style={{backgroundColor:"#ffff"}}>
     <FlatList data={data} renderItem={({
     item
   }) =><Box borderBottomWidth="0.2" _dark={{
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
                 {item.Users.First_Name} {item.Users.Last_Name} {setId(item.Id)}
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
            onPress={() => navigation.navigate("InfoReq", {ParamKey: id})}
           >
             View

           </Button>
           </VStack>
           </HStack>
         </Box>}  />
   </Box>
}
useEffect(() =>{
  getReq();

},[])

    return (
    <NativeBaseProvider>
       {getContent()}
   </NativeBaseProvider>
    );

  };

  export default ViewReq;