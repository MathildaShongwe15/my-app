import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import 'react-native-gesture-handler';
import HomeS from "../../src/screens/Home/home";
import Requests from "../../src/screens/Request/viewRequests";
import Profile from "../../src/screens/Profile/profile";
import DrawerContent from "./DrawerContent"
import RouteScreen from "../../src/screens/Map/RouteMap"
import ReqInfoScreen from '../../src/screens/Request/reqInformation'
import AntIcon from "react-native-vector-icons/AntDesign";
import Dashboard from "../../src/screens/Home/Dashboard";

const AppBarNav = () =>{
    const Drawer = createDrawerNavigator();

    return(
          <Drawer.Navigator  defaultStatus="closed"screenOptions={{ overlayColor: '#07137D',drawerActiveBackgroundColor:'#07137D',drawerActiveTintColor:'#FFB400'}}drawerContent={props => <DrawerContent{...props}/>}>
                    <Drawer.Screen name='Dashboard' component={Dashboard}  options={{ headerTintColor:'#07137D',  title: 'Dashboard',drawerIcon: ({focused, size}) => ( <AntIcon name="dashboard" color={focused ? "#FFB400":"#07137D"} size={20} />),}} ></Drawer.Screen>
                    <Drawer.Screen name='Requests' component={Requests} options={{headerTintColor:'#07137D', title: 'Requests Pending',drawerIcon: ({focused, size}) => ( <AntIcon name="mail" color={focused ? "#FFB400":"#07137D"} size={20} />),}}></Drawer.Screen>
                    <Drawer.Screen name='Profile' component={Profile}  options={{ headerTintColor:'#07137D',title: 'Profile',drawerIcon: ({focused, size}) => ( <AntIcon name="user" color={focused ? "#FFB400":"#07137D"} size={20} />),}} ></Drawer.Screen>
                     <Drawer.Screen name="RouteMap" component={RouteScreen}  options={{drawerItemStyle: { height: 0 }}} ></Drawer.Screen>
                     <Drawer.Screen name="InfoReq"  component={ReqInfoScreen}  options={{title:'Request Information',drawerItemStyle: { height: 0 }}} />
            </Drawer.Navigator>
    )
}

export default AppBarNav;


