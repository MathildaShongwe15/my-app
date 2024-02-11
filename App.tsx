

//const Stack = createNativeStackNavigator();
/* components/Homescreen.js */

import { Button, Center, Heading, NativeBaseProvider, View } from "native-base";
import React from "react";
import Home from "./components/Home";
import Register from "./components/RegisterScreen"
import Selection from "./components/Selection"
import DetailsScreen from "./components/LoadingComp";
import { NavigationContainer, ParamListBase, useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import { Button, View, Text } from "react-native";
// const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
 const Stack = createNativeStackNavigator();
export default function App() {
 //const navigation = useNavigation();
//  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
//  const navigationRef = useNavigationContainerRef();

  return (
 
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>

    <NativeBaseProvider>
      <Center>
         <Selection/>
      </Center>
    
    </NativeBaseProvider>

           
               
          
      
  
  

    
  
  );
}
