import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {NativeStackScreenProps,createNativeStackNavigator} from "@react-navigation/native-stack";
import TopNav from "../my-app/components/Navigation/topBarNavigation"
import {AuthProvider} from "../my-app/Context/AuthContext"
import { NativeBaseProvider } from "native-base";


export default function App(){
  return(
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}





export const Layout = () => {

  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>
            <TopNav/>
    </NavigationContainer>




  );
}

