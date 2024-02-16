// import { useEffect } from "react";

import { Center, HStack, Heading, NativeBaseProvider, Skeleton, VStack } from "native-base";
import React from "react";
import AppDrawerNav from '../../../components/SideBarComponent/tabBar'
import { NavigationContainer } from "@react-navigation/native";
// const BASE_URL=""

// export default function Requests(){
//     useEffect(() =>{
//         const fetchRequests = async () =>{
//             const response =await fetch(`${BASE_URL}/requests`);
//             const requests = await response.json();
//             //response.json().then(json => {
//                 //console.log(json);
//            // })
//         };
//     }, []);

//     return(

//     )
// }


const Example = () => {
    return (
   
      <NativeBaseProvider>

           
            <VStack space={4} alignItems="center" mt="150">
               
                  <Center w="64" h="20" bg="muted.300" rounded="md" shadow={0} ><Heading>Hello</Heading></Center>
                  <Center w="64" h="20" bg="muted.300" rounded="md" shadow={0} ><Heading>Hello</Heading></Center>
                  <Center w="64" h="20" bg="muted.300" rounded="md" shadow={0} ><Heading>Hello</Heading></Center>
                  <Center w="64" h="20" bg="muted.300" rounded="md" shadow={0} ><Heading>Hello</Heading></Center>
               </VStack>
               <AppDrawerNav/>
          
      </NativeBaseProvider>

    )
  };


  export default Example;