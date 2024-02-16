import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import HomeScreen from "../../src/screens/Home/home";
import ServiceScreen from '../../src/screens/servicerequests/servicerequests'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTabNav = () =>{
    //const Drawer=createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    return(
    
           
                // <Drawer.Navigator  defaultStatus="open"
                //   screenOptions={{
                //   overlayColor: '#F0F3FF',}}>
                //     <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
                //     <Drawer.Screen name='Services' component={ServiceScreen}></Drawer.Screen>
                //     <Drawer.Screen name='Profile' component={HomeScreen}></Drawer.Screen>
                // </Drawer.Navigator>
                <Tab.Navigator  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                      }
          
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                  })}>
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
                <Tab.Screen name="Settings" component={ServiceScreen} />
              </Tab.Navigator>
      
    )
}



const styles = StyleSheet.create({
    
})

export default AppTabNav;