
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VehiclesScreen from "../../src/screens/CarScreens/Vehicles"
import ProfileScreen from "../../src/screens/Profile/profile";
import ProviderScreen from "../../src/screens/ServiceProvider/serviceProvider";

import Icon from 'react-native-vector-icons/AntDesign'
import HomeScreen from "../../src/screens/Home/home";
import Menu from "../../src/screens/Home/Menu";


const  BottomTabs = () =>{

    const Tab = createBottomTabNavigator();

           return(
                <Tab.Navigator
                 screenOptions={{
                  headerShown: false,
                  headerStyle: {
                  backgroundColor: "#07137D",},}}
                  initialRouteName="Provider">

                  <Tab.Screen name="Profile"  component={ProfileScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"user"} size={20} color={"#07137D"} />),
                  }}>
                  </Tab.Screen>
                  <Tab.Screen name="Home"  component={Menu}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"home"} size={20} color={"#07137D"} />),
                  }}>
                  </Tab.Screen>
                   <Tab.Screen name="Requests"  component={ProfileScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"user"} size={20} color={"#07137D"} />),
                  }}>
                  </Tab.Screen>
                  {/* <Tab.Screen name="Providers" component={ProviderScreen} ></Tab.Screen> */}



                </Tab.Navigator>
    );
        }

const styles = StyleSheet.create({

})

export default BottomTabs;