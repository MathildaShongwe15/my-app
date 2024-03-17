import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import HomeS from "../../src/screens/Home/home";
import Requests from "../../src/screens/Request/viewRequests";
import Profile from "../../src/screens/Profile/profile";

import RouteScreen from "../../src/screens/Map/RouteMap"
import HomeScreen from "../../src/screens/Home/home";

const AppBarNav = () =>{
    const Drawer = createDrawerNavigator();
    return(
          <Drawer.Navigator  defaultStatus="closed"
                    screenOptions={{
                    overlayColor: '#F0F3FF',}}>
                     <Drawer.Screen name='ViewRequests' component={Requests}></Drawer.Screen>
                     <Drawer.Screen name='Profile' component={Profile}></Drawer.Screen>
                     {/* <Drawer.Screen name="RouteMap" component={RouteScreen} /> */}
            </Drawer.Navigator>
    )
}

export default AppBarNav;