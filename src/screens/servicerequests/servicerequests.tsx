// import { useEffect } from "react";

import { Center, HStack, NativeBaseProvider, Skeleton, VStack } from "native-base";
import React from "react";
import AppDrawerNav from '../../../components/SideBarComponent/sideBar'
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
      <NavigationContainer>
      <NativeBaseProvider>

            <AppDrawerNav/>
          
            <VStack space={4} alignItems="center">
                  <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
                  <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
                  <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
               </VStack>

      </NativeBaseProvider></NavigationContainer>

    )
  };


  export default Example;