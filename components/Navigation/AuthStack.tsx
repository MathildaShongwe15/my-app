import React, {useContext} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../src/screens/Home/home";
import LoginScreen from "../../src/screens/Login/login";
import RegisterScreen from "../../src/screens/Register/register";
import ServicesScreen from "../../src/screens/servicesRequests/services";
import ProfileScreen from "../../src/screens/Profile/profile";
import RegistrationScreen from "../../src/screens/CarScreens/registerCar";
import RequestFuelScreen from "../../src/screens/Request/requestFuel";
import CarHistoryScreen from "../../src/screens/CarScreens/Vehicles";
import OrderScreen from "../../src/screens/OrderScreens/orderConfirmed";
import TyreScreen from "../../src/screens/Request/requestTyre";
import RequestsScreen from "../../src/screens/Request/viewRequests";
import ResetScreen from "../../src/screens/Profile/resetPassword";
import TabNav from "./tabBarNavigation"
import SidebarNav from './sideBarNavigation'
import MapsScreen from "../../src/screens/Map/pinLocation"
import RouteScreen from "../../src/screens/Map/RouteMap"

import {View, ActivityIndicator, Button} from 'react-native';
import { useAuth } from "../../Context/AuthContext";


const App = () => {
  const{authState, onLogout}:any = useAuth();
  const Stack = createNativeStackNavigator();

  return (

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarColor: "#07137D",
          headerStyle: {
            backgroundColor: "#07137D",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}

      >
        {authState?.authenticated ?
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false , headerRight:() => <Button onPress={onLogout} title="SignOut"/>}}></Stack.Screen>:
          <Stack.Screen name="Login" component={LoginScreen} />
       }
       <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ResetPass"  component={ResetScreen}/>

        <Stack.Screen name="RequestFuel" component={RequestFuelScreen} />
        <Stack.Screen name="RegistrationCarDets" component={RegistrationScreen} />

        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Tyre" component={TyreScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />



      </Stack.Navigator>

  );
}
export default App;
