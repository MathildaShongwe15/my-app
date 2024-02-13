/* components/Homescreen.js */

import { Button, Heading, NativeBaseProvider, View } from "native-base";
import React from "react";
import Textbox from "./LoginScreenComp"
import { NavigationContainer, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Routes/Routes";


    
//type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = () =>{
    const navigation = useNavigation();
  return (

  <NativeBaseProvider>
     <Button title='Go to Loading' onPress={() => navigation.navigate("Loading")} />
  </NativeBaseProvider>
    
    
 
 
   
  );
};

export default HomeScreen;

 


      
                
