import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import HomeS from "../../src/screens/Home/home";
import Requests from "../../src/screens/Request/viewRequests";
import Profile from "../../src/screens/Profile/profile";
import ServiceScreen from '../../src/screens/servicesRequests/services'


const AppBarNav = () =>{
    const Drawer=createDrawerNavigator();
    return(
          <Drawer.Navigator  defaultStatus="closed"
                    screenOptions={{
                    overlayColor: '#F0F3FF',}}>
                     <Drawer.Screen name='Requests' component={Requests}></Drawer.Screen>
                     <Drawer.Screen name='Profile' component={Profile}></Drawer.Screen>
                     <Drawer.Screen name='Home' component={Profile}></Drawer.Screen>
            </Drawer.Navigator>
    )
}

export default AppBarNav;