import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../src/screens/Home/home";
import LoginScreen from "../../src/screens/Login/login";
import RegisterScreen from "../../src/screens/Register/register";
import ProfileScreen from "../../src/screens/Profile/profile";
import RegistrationScreen from "../../src/screens/CarScreens/registerCar";
import RequestFuelScreen from "../../src/screens/Request/requestFuel";
import OrderScreen from "../../src/screens/OrderScreens/orderConfirmed";
import FuelScreen from "../../src/screens/Request/requestFuel";
import TyreScreen from "../../src/screens/Request/requestTyre";
import ResetScreen from "../../src/screens/Profile/resetPassword";
import MapsScreen from "../../src/screens/Map/PinLocation";
import RequestsScreen from "../../src/screens/Request/requests";
import MenuScreen from "../../src/screens/Home/Menu";
import RouteScreen from "../../src/screens/Map/RouteMap"
import VehiclesScreen from"../../src/screens/CarScreens/Vehicles";
import { Button} from 'react-native';
import { useAuth } from "../../Context/AuthContext";
import Icon from "react-native-vector-icons/AntDesign";
import AntIcon from "react-native-vector-icons/AntDesign";

const App = () => {
  const{authState, onLogout}:any = useAuth();
  const Stack = createNativeStackNavigator();

  return (

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarColor: "#07137D",
          headerStyle: {
            backgroundColor: "#ffff",
          },
          headerTintColor: "#07137D",
          headerTitleAlign: "center",
        }}

      >
        {authState?.authenticated ?(
          // Authenticated show Menu
        <Stack.Screen name='Menu' component={MenuScreen} options={{ headerShown: true,headerTitle: "Menu", headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}></Stack.Screen>):
          (<Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false}}></Stack.Screen> )
       }

       <Stack.Screen name="Login" component={LoginScreen} />

       <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true , headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}} />
        <Stack.Screen name="ResetPass"  component={ResetScreen} />

        <Stack.Screen name="RequestFuel" component={RequestFuelScreen}options={{ headerShown: true , headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}} />
        <Stack.Screen name="Registration Car" component={RegistrationScreen} options={{ headerShown: true , headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}/>
        <Stack.Screen name="Services"  component={ResetScreen} />
        <Stack.Screen name="Route"  component={RouteScreen} />
        <Stack.Screen name="Fuel"  component={FuelScreen} />

        <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: true , headerRight:() =><AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}/>
        <Stack.Screen name="Tyre" component={TyreScreen} options={{ headerShown: true , headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}/>
        <Stack.Screen name="Maps" component={MapsScreen} options={{ headerShown: true , headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}/>
        <Stack.Screen name="My Vehicles" component={VehiclesScreen} options={{ headerShown: true , headerRight:() =><AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}></Stack.Screen>
        <Stack.Screen name="Requests" component={RequestsScreen} options={{ headerShown: true , headerRight:() => <AntIcon name="logout" color="#07137D" size={30} onPress={onLogout}/>}}></Stack.Screen>
      </Stack.Navigator>

  );
}
export default App;
