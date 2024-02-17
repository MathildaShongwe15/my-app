import { FlatList, SafeAreaView, View } from "react-native";

import { Center, HStack, Heading, NativeBaseProvider, Skeleton, VStack } from "native-base";
import React from "react";
import AppTabNav from '../../../components/BarComponent/tabBar'
import { NavigationContainer } from "@react-navigation/native";
import CardComp from "../../../components/CardComponent/Card"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//API CALL
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


const services =[
   {
       name:'Petrol Service',
       serviceProviders: ' Shell, Engen, Caltex',
       deliveryTime:'30min',
       image:require('../../../assets/pics/fuel.png'),
       id:1
   },
   {
       name:'Towing Service',
       serviceProviders: ' Shell, Engen, Caltex',
       image:require('../../../assets/pics/Towing.png'),
       deliveryTime:'30min',
       id:2
   },
   {
       name:'Tyre Change Service',
       serviceProviders: ' Shell, Engen, Caltex',
       image:require('../../../assets/pics/fuel.png'),
       deliveryTime:'30min',
       id:3
   },
   {
      name:'Oil and Water Service',
      serviceProviders: ' Shell, Engen, Caltex',
      image:require('../../../assets/pics/fuel.png'),
      deliveryTime:'30min',
      id:4
  }
]

type ItemProps = {title: string};


const ServicesToRequest = () => {
   const Tab = createBottomTabNavigator();
    return (
    
      <NativeBaseProvider>
          <SafeAreaView>
              <FlatList data={services}
                        renderItem={({ item }) => {
                return  <CardComp info={item} />;
              }}
            keyExtractor={(services) => services.id.toString()}/>
        </SafeAreaView>
      </NativeBaseProvider>

    )
  };


  export default ServicesToRequest;