import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/home";
import LoginScreen from "./src/screens/Login/login";
import RegisterScreen from "./src/screens/Register/register";
import ServicesScreen from "./src/screens/servicesRequests/services";
import ProfileScreen from "./src/screens/Profile/profile";
import RegistrationScreen from "./src/screens/CarScreens/registerCar";
import RequestFuelScreen from "./src/screens/Request/requestFuel";
import CarHistoryScreen from "./src/screens/CarScreens/Vehicles";
import OrderScreen from "./src/screens/OrderScreens/orderConfirmed";
// import TowingScreen from "./src/screens/Request/requestTowing";
import TyreScreen from "./src/screens/Request/requestTyre";
import RequestsScreen from "./src/screens/Request/viewRequests"
import DrawerNav from "./components/Navigation/sideBarNavigation"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNav from "../my-app/components/Navigation/tabBarNavigation"
import TopNav from "../my-app/components/Navigation/topBarNavigation"
import Noti from "../my-app/middleware/notifications"


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <TopNav/>
    </NavigationContainer>
  );
}
export default App;
