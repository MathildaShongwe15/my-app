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
import { AuthContext } from "../../Context/AuthContext";
import {View, ActivityIndicator} from 'react-native';

const App = () => {
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


        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
         <Stack.Screen name="Profile" component={ProfileScreen} />


        <Stack.Screen name="RequestFuel" component={RequestFuelScreen} />
        <Stack.Screen name="RegistrationCarDets" component={RegistrationScreen} />
        <Stack.Screen name="CarHistory" component={CarHistoryScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Tyre" component={TyreScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="ResetPass"  component={ResetScreen}/>

         {/* <Stack.Screen name="GoogleMaps" component={GoogleMapsScreen} /> */}
        <Stack.Screen name="Requests" component={RequestsScreen}  options={{ headerShown: false }} />
        <Stack.Screen name ="Homee"  component={TabNav}/>

      </Stack.Navigator>

  );
}
export default App;
