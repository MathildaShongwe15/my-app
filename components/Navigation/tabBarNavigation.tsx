
// import React from "react";
// import { Button, StyleSheet } from "react-native";
// import 'react-native-gesture-handler';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import VehiclesScreen from "../../src/screens/CarScreens/Vehicles"
// import ProfileScreen from "../../src/screens/Profile/profile";
// import ProviderScreen from "../../src/screens/ServiceProvider/serviceProvider";

// import Icon from 'react-native-vector-icons/AntDesign'
// import HomeScreen from "../../src/screens/Home/home";
// import Menu from "../../src/screens/Home/Menu";
// import { useAuth } from "../../Context/AuthContext";


// const  BottomTabs = () =>{
//   const{authState,onLogout}:any = useAuth();

//     const Tab = createBottomTabNavigator();

//            return(
//                 <Tab.Navigator
//                  screenOptions={{
//                   headerShown: false,
//                   headerStyle: {
//                   backgroundColor: "#07137D",},}}
//                   initialRouteName="Provider">





//                   <Tab.Screen name="Home"  component={Menu}
//                    options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"home"} size={20} color={"#07137D"} />),
//                   }}>
//                   </Tab.Screen>
//                    <Tab.Screen name="Logout"  component={HomeScreen}
//                    options={{tabBarIcon:({color,size,focused}) =>(<Icon name={"logout"} size={20} color={"#07137D"} onPress={onLogout} />),
//                   }}>
//                   </Tab.Screen>
//                   {/* <Tab.Screen name="Providers" component={ProviderScreen} ></Tab.Screen> */}



//                 </Tab.Navigator>
//     );
//         }

// const styles = StyleSheet.create({

// })

// export default BottomTabs;