import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import HomeScreen from "../../src/screens/Home/home";
import ServiceScreen from '../../src/screens/servicesRequests/services'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../src/screens/Profile/profile";

import App from '../../App';
import Icon from 'react-native-vector-icons/AntDesign'

  const Tab = createBottomTabNavigator();

  function BottomTabs(){
           return(
                <Tab.Navigator
                 screenOptions={{
                  headerShown: false,
                  headerStyle: {
                  backgroundColor: "#07137D",
                  },
                  }}
                >

                  <Tab.Screen name="Home" component={HomeScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"home"} size={20} color={"#07137D"} />),
                   }} >
                  </Tab.Screen>
                  <Tab.Screen name="Profile"  component={ProfileScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"user"} size={20} color={"#07137D"} />),
                  }}>
                  </Tab.Screen>
                  <Tab.Screen name="Services"  component={ServiceScreen}
                   options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"car"} size={20} color={"#07137D"} />),
                  }}>
                  </Tab.Screen>
                </Tab.Navigator>
    );
        }

const styles = StyleSheet.create({

})

export default BottomTabs;