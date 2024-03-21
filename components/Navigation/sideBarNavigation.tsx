import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import HomeS from "../../src/screens/Home/home";
import Requests from "../../src/screens/Request/viewRequests";
import Profile from "../../src/screens/Profile/profile";
import DrawerContent from "./SidebarContent"
import RouteScreen from "../../src/screens/Map/RouteMap"
import HomeScreen from "../../src/screens/Home/home";
import ReqInfoScreen from '../../src/screens/Request/reqInformation'

import AntIcon from "react-native-vector-icons/AntDesign";

const AppBarNav = () =>{
    const Drawer = createDrawerNavigator();

    return(
          <Drawer.Navigator  defaultStatus="closed"
                    screenOptions={{
                    overlayColor: '#F0F3FF',
                     drawerActiveBackgroundColor:'#07137D',
                    drawerActiveTintColor:'#FFB400'}}
                    drawerContent={props => <DrawerContent{...props}/>}


                    >

                    <Drawer.Screen name='Hoee' component={HomeScreen}  options={{ title: 'Dashboard',drawerIcon: ({focused, size}) => ( <AntIcon name="dashboard" color={focused ? "#FFB400":"#07137D"} size={20} />),}} ></Drawer.Screen>
                    <Drawer.Screen name='Profile' component={Profile}  options={{ title: 'Profile',drawerIcon: ({focused, size}) => ( <AntIcon name="user" color={focused ? "#FFB400":"#07137D"} size={20} />),}} ></Drawer.Screen>
                    <Drawer.Screen name='Requests' component={Requests}
                     options={{ title: 'Requests Pending',drawerIcon: ({focused, size}) => ( <AntIcon name="mail" color={focused ? "#FFB400":"#07137D"} size={20} />),}}></Drawer.Screen>
                     <Drawer.Screen name='Ho' component={HomeS}  options={{ title: 'Request History',drawerIcon: ({focused, size}) => ( <AntIcon name="upload" color={focused ? "#FFB400":"#07137D"} size={20} />),}} ></Drawer.Screen>
                     <Drawer.Screen name="RouteMap" component={RouteScreen}  options={{drawerItemStyle: { height: 0 }}} ></Drawer.Screen>
                     <Drawer.Screen name="InfoReq"  component={ReqInfoScreen}  options={{title:'Request Information',drawerItemStyle: { height: 0 }}} />
            </Drawer.Navigator>
    )
}

export default AppBarNav;


