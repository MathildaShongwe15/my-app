import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "../../src/screens/Home/home";
import LoginScreen from "../../src/screens/Login/login";
import RegisterScreen from "../../src/screens/Register/register";
import ServicesScreen from "../../src/screens/servicesRequests/services";
import ProfileScreen from "../../src/screens/Profile/profile";
import RegistrationScreen from "../../src/screens/CarScreens/registerCar";
import RequestFuelScreen from "../../src/screens/Request/requestFuel";
import CarHistoryScreen from "../../src/screens/CarScreens/Vehicles";
import OrderScreen from "../../src/screens/OrderScreens/orderConfirmed";
// import TowingScreen from "./src/screens/Request/requestTowing";
import TyreScreen from "../../src/screens/Request/requestTyre";
import RequestsScreen from "../../src/screens/Request/viewRequests"
// import DrawerNav from "./components/Navigation/sideBarNavigation"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNav from "./tabBarNavigation"
import SidebarNav from './sideBarNavigation'
import MapsScreen from "../../src/screens/Map/pinLocation"
import RouteScreen from "../../src/screens/Map/RouteMap"
// import GoogleMapsScreen from "../../middleware/api"
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
        <Stack.Screen
        // {state.UserToken == null ?}
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RequestFuel" component={RequestFuelScreen} />
        <Stack.Screen name="RegistrationCarDets" component={RegistrationScreen} />
        <Stack.Screen name="CarHistory" component={CarHistoryScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Tyre" component={TyreScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
        <Stack.Screen name="RouteMap" component={RouteScreen} />
        {/* <Stack.Screen name="GoogleMaps" component={GoogleMapsScreen} /> */}
        {/* <Stack.Screen name="Requests" component={RequestsScreen}  options={{ headerShown: false }} /> */}
        <Stack.Screen name ="Homee"  component={TabNav}/>
        <Stack.Screen name ="Homeye"  component={SidebarNav}   options={{ headerShown: false }}/>
      </Stack.Navigator>

  );
}
export default App;
