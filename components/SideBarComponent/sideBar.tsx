import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import HomeScreen from "../../src/screens/Home/home";
import ServiceScreen from '../../src/screens/servicerequests/servicerequests'

const AppDrawerNav = () =>{
    const Drawer=createDrawerNavigator();

    return(
    
           
                <Drawer.Navigator  defaultStatus="open"
                  screenOptions={{
                  overlayColor: '#F0F3FF',}}>
                    <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
                    <Drawer.Screen name='Services' component={ServiceScreen}></Drawer.Screen>
                    <Drawer.Screen name='Profile' component={HomeScreen}></Drawer.Screen>
                </Drawer.Navigator>
         
      
    )
}



const styles = StyleSheet.create({
    
})

export default AppDrawerNav;